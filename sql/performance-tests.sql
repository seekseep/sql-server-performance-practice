-- =============================================================================
-- SQL Server パフォーマンス検証用クエリ集
-- =============================================================================
-- 各クエリの実行前に以下を実行して統計情報を取得
-- SET STATISTICS IO ON
-- SET STATISTICS TIME ON

-- =============================================================================
-- 1. 基本的な検索クエリ（インデックス効果の確認）
-- =============================================================================

-- 1-1. 従業員による受領実績検索（従業員IDによる絞り込み）
SELECT 
    e.Name EmployeeName,
    COUNT(*) ReceivingCount,
    COUNT(rad.Id) DetailCount
FROM Employee e
INNER JOIN ReceivingAchievement ra ON e.Id = ra.EmployeeId
INNER JOIN ReceivingAchievementDetail rad ON ra.Id = rad.ReceivingAchievementId
WHERE e.Id = 1
GROUP BY e.Id, e.Name;

-- 1-2. 日付範囲による受領実績検索（日付インデックスの効果確認）
SELECT 
    CAST(ra.ReceivedAt AS DATE) ReceiveDate,
    COUNT(*) ReceivingCount,
    COUNT(rad.Id) DetailCount
FROM ReceivingAchievement ra
INNER JOIN ReceivingAchievementDetail rad ON ra.Id = rad.ReceivingAchievementId
WHERE ra.ReceivedAt >= DATEADD(DAY, -30, GETDATE())
  AND ra.ReceivedAt < GETDATE()
GROUP BY CAST(ra.ReceivedAt AS DATE)
ORDER BY ReceiveDate;

-- 1-3. 製品別在庫検索（製品IDによる絞り込み）
SELECT 
    p.Name ProductName,
    w.Name WarehouseName,
    COUNT(*) StockCount,
    SUM(CASE WHEN ps.Used = 0 THEN 1 ELSE 0 END) AvailableStock,
    SUM(CASE WHEN ps.Used = 1 THEN 1 ELSE 0 END) UsedStock
FROM Product p
INNER JOIN ProductStock ps ON p.Id = ps.ProductId
INNER JOIN Warehouse w ON ps.WarehouseId = w.Id
WHERE p.Id = 1
GROUP BY p.Id, p.Name, w.Id, w.Name
ORDER BY w.Name;

-- =============================================================================
-- 2. 複合条件検索（複合インデックスの効果確認）
-- =============================================================================

-- 2-1. 製品・倉庫・使用状況による在庫検索
SELECT 
    p.Name ProductName,
    w.Name WarehouseName,
    COUNT(*) StockCount
FROM ProductStock ps
INNER JOIN Product p ON ps.ProductId = p.Id
INNER JOIN Warehouse w ON ps.WarehouseId = w.Id
WHERE ps.ProductId = 1 
  AND ps.WarehouseId = 1 
  AND ps.Used = 0
GROUP BY p.Id, p.Name, w.Id, w.Name;

-- 2-2. 従業員・日付範囲による実績検索
SELECT 
    e.Name EmployeeName,
    CAST(ra.ReceivedAt AS DATE) ReceiveDate,
    COUNT(*) AchievementCount
FROM Employee e
INNER JOIN ReceivingAchievement ra ON e.Id = ra.EmployeeId
WHERE ra.EmployeeId IN (1, 2, 3, 4, 5)
  AND ra.ReceivedAt >= DATEADD(DAY, -7, GETDATE())
  AND ra.ReceivedAt < GETDATE()
GROUP BY e.Id, e.Name, CAST(ra.ReceivedAt AS DATE)
ORDER BY EmployeeName, ReceiveDate;

-- =============================================================================
-- 3. JOIN性能検証（外部キー・関連テーブルの効果確認）
-- =============================================================================

-- 3-1. 受領実績の詳細情報取得（多段階JOIN）
SELECT 
    ra.Id AchievementId,
    ra.ReceivedAt,
    e.Name EmployeeName,
    p.Name ProductName,
    w.Name WarehouseName,
    COUNT(rad.Id) DetailCount
FROM ReceivingAchievement ra
INNER JOIN Employee e ON ra.EmployeeId = e.Id
INNER JOIN ReceivingAchievementDetail rad ON ra.Id = rad.ReceivingAchievementId
INNER JOIN ProductStock ps ON rad.ProductStockId = ps.Id
INNER JOIN Product p ON ps.ProductId = p.Id
INNER JOIN Warehouse w ON ps.WarehouseId = w.Id
WHERE ra.ReceivedAt >= DATEADD(DAY, -1, GETDATE())
GROUP BY ra.Id, ra.ReceivedAt, e.Name, p.Name, w.Name
ORDER BY ra.ReceivedAt DESC;

-- 3-2. 製造フロー全体の追跡（受領→加工→出荷）
SELECT 
    p.Name ProductName,
    'Received' ProcessType,
    ra.ReceivedAt ProcessDate,
    e.Name EmployeeName
FROM Product p
INNER JOIN ProductStock ps ON p.Id = ps.ProductId
INNER JOIN ReceivingAchievementDetail rad ON ps.Id = rad.ProductStockId
INNER JOIN ReceivingAchievement ra ON rad.ReceivingAchievementId = ra.Id
INNER JOIN Employee e ON ra.EmployeeId = e.Id
WHERE p.Id = 1

UNION ALL

SELECT 
    p.Name ProductName,
    'Treated' ProcessType,
    ta.TreatedAt ProcessDate,
    e.Name EmployeeName
FROM Product p
INNER JOIN ProductStock ps ON p.Id = ps.ProductId
INNER JOIN TreatmentAchievementDetail tad ON ps.Id = tad.ProducedProductStockId
INNER JOIN TreatmentAchievement ta ON tad.TreatmentAchievementId = ta.Id
INNER JOIN Employee e ON ta.EmployeeId = e.Id
WHERE p.Id = 1

UNION ALL

SELECT 
    p.Name ProductName,
    'Shipped' ProcessType,
    sa.ShippedAt ProcessDate,
    e.Name EmployeeName
FROM Product p
INNER JOIN ProductStock ps ON p.Id = ps.ProductId
INNER JOIN ShipmentAchievementDetail sad ON ps.Id = sad.ProductStockId
INNER JOIN ShipmentAchievement sa ON sad.ShipmentAchievementId = sa.Id
INNER JOIN Employee e ON sa.EmployeeId = e.Id
WHERE p.Id = 1

ORDER BY ProcessDate;

-- =============================================================================
-- 4. 集計クエリ（GROUP BY・集計関数の性能確認）
-- =============================================================================

-- 4-1. 日別実績サマリ
SELECT 
    CAST(ra.ReceivedAt AS DATE) ProcessDate,
    COUNT(DISTINCT ra.Id) ReceivingCount,
    COUNT(DISTINCT ta.Id) TreatmentCount,
    COUNT(DISTINCT sa.Id) ShipmentCount,
    COUNT(rad.Id) ReceivingDetailCount,
    COUNT(tad.Id) TreatmentDetailCount,
    COUNT(sad.Id) ShipmentDetailCount
FROM ReceivingAchievement ra
INNER JOIN ReceivingAchievementDetail rad ON ra.Id = rad.ReceivingAchievementId
FULL OUTER JOIN TreatmentAchievement ta ON CAST(ta.TreatedAt AS DATE) = CAST(ra.ReceivedAt AS DATE)
FULL OUTER JOIN TreatmentAchievementDetail tad ON ta.Id = tad.TreatmentAchievementId
FULL OUTER JOIN ShipmentAchievement sa ON CAST(sa.ShippedAt AS DATE) = CAST(ra.ReceivedAt AS DATE)
FULL OUTER JOIN ShipmentAchievementDetail sad ON sa.Id = sad.ShipmentAchievementId
WHERE ra.ReceivedAt >= DATEADD(DAY, -30, GETDATE())
GROUP BY CAST(ra.ReceivedAt AS DATE)
ORDER BY ProcessDate;

-- 4-2. 従業員別パフォーマンス分析
SELECT 
    e.Name EmployeeName,
    COUNT(DISTINCT ra.Id) ReceivingAchievements,
    COUNT(DISTINCT ta.Id) TreatmentAchievements,
    COUNT(DISTINCT sa.Id) ShipmentAchievements,
    COUNT(rad.Id) TotalReceivingDetails,
    COUNT(tad.Id) TotalTreatmentDetails,
    COUNT(sad.Id) TotalShipmentDetails,
    CAST(AVG(CAST(rad.Id AS FLOAT)) AS DECIMAL(10,2)) AvgReceivingDetailsPerAchievement
FROM Employee e
LEFT JOIN ReceivingAchievement ra ON e.Id = ra.EmployeeId
LEFT JOIN ReceivingAchievementDetail rad ON ra.Id = rad.ReceivingAchievementId
LEFT JOIN TreatmentAchievement ta ON e.Id = ta.EmployeeId
LEFT JOIN TreatmentAchievementDetail tad ON ta.Id = tad.TreatmentAchievementId
LEFT JOIN ShipmentAchievement sa ON e.Id = sa.EmployeeId
LEFT JOIN ShipmentAchievementDetail sad ON sa.Id = sad.ShipmentAchievementId
GROUP BY e.Id, e.Name
HAVING COUNT(ra.Id) > 0 OR COUNT(ta.Id) > 0 OR COUNT(sa.Id) > 0
ORDER BY TotalReceivingDetails + TotalTreatmentDetails + TotalShipmentDetails DESC;

-- =============================================================================
-- 5. サブクエリ性能検証
-- =============================================================================

-- 5-1. 最も活発な従業員の実績詳細（EXISTS使用）
SELECT 
    ra.Id,
    ra.ReceivedAt,
    e.Name EmployeeName
FROM ReceivingAchievement ra
INNER JOIN Employee e ON ra.EmployeeId = e.Id
WHERE EXISTS (
    SELECT 1 
    FROM ReceivingAchievementDetail rad 
    WHERE rad.ReceivingAchievementId = ra.Id
    HAVING COUNT(*) > 5
)
ORDER BY ra.ReceivedAt DESC;

-- 5-2. 在庫が最も多い製品の詳細（サブクエリ使用）
SELECT 
    p.Name ProductName,
    w.Name WarehouseName,
    COUNT(*) StockCount
FROM Product p
INNER JOIN ProductStock ps ON p.Id = ps.ProductId
INNER JOIN Warehouse w ON ps.WarehouseId = w.Id
WHERE p.Id IN (
    SELECT TOP 10 ProductId
    FROM ProductStock
    WHERE Used = 0
    GROUP BY ProductId
    ORDER BY COUNT(*) DESC
)
GROUP BY p.Id, p.Name, w.Id, w.Name
ORDER BY StockCount DESC;

-- =============================================================================
-- 6. 全表スキャン vs インデックス利用の比較
-- =============================================================================

-- 6-1. 全表スキャンが発生しやすいクエリ（LIKE演算子）
SELECT 
    p.Name ProductName,
    COUNT(*) StockCount
FROM Product p
INNER JOIN ProductStock ps ON p.Id = ps.ProductId
WHERE p.Name LIKE '%製品%'
GROUP BY p.Id, p.Name
ORDER BY StockCount DESC;

-- 6-2. 範囲検索（BETWEEN使用）
SELECT 
    COUNT(*) AchievementCount,
    AVG(CAST(DATEDIFF(HOUR, ra.ReceivedAt, GETDATE()) AS FLOAT)) AvgHoursAgo
FROM ReceivingAchievement ra
WHERE ra.ReceivedAt BETWEEN DATEADD(DAY, -7, GETDATE()) AND DATEADD(DAY, -1, GETDATE());

-- =============================================================================
-- 7. パフォーマンス測定用ユーティリティクエリ
-- =============================================================================

-- 7-1. テーブルサイズ確認
SELECT 
    t.name TableName,
    SUM(p.rows) RowCount,
    SUM(a.total_pages) * 8 TotalSpaceKB,
    SUM(a.used_pages) * 8 UsedSpaceKB,
    (SUM(a.total_pages) - SUM(a.used_pages)) * 8 UnusedSpaceKB
FROM sys.tables t
INNER JOIN sys.indexes i ON t.object_id = i.object_id
INNER JOIN sys.partitions p ON i.object_id = p.object_id AND i.index_id = p.index_id
INNER JOIN sys.allocation_units a ON p.partition_id = a.container_id
WHERE t.name IN ('Employee', 'Customer', 'Warehouse', 'Product', 'ProductStock', 
                 'ReceivingAchievement', 'ReceivingAchievementDetail',
                 'TreatmentAchievement', 'TreatmentAchievementDetail',
                 'ShipmentAchievement', 'ShipmentAchievementDetail')
GROUP BY t.name
ORDER BY RowCount DESC;

-- 7-2. インデックス使用状況確認
SELECT 
    i.name IndexName,
    t.name TableName,
    i.type_desc IndexType,
    us.user_seeks Seeks,
    us.user_scans Scans,
    us.user_lookups Lookups,
    us.user_updates Updates,
    us.last_user_seek LastSeek,
    us.last_user_scan LastScan
FROM sys.indexes i
INNER JOIN sys.tables t ON i.object_id = t.object_id
LEFT JOIN sys.dm_db_index_usage_stats us ON i.object_id = us.object_id AND i.index_id = us.index_id
WHERE t.name IN ('Employee', 'Customer', 'Warehouse', 'Product', 'ProductStock', 
                 'ReceivingAchievement', 'ReceivingAchievementDetail',
                 'TreatmentAchievement', 'TreatmentAchievementDetail',
                 'ShipmentAchievement', 'ShipmentAchievementDetail')
ORDER BY t.name, i.name;

-- =============================================================================
-- 8. ストレステスト用クエリ（大量データ処理）
-- =============================================================================

-- 8-1. 大量JOINクエリ
SELECT 
    p.Name ProductName,
    COUNT(DISTINCT ra.Id) ReceivingCount,
    COUNT(DISTINCT ta.Id) TreatmentCount,
    COUNT(DISTINCT sa.Id) ShipmentCount,
    MIN(ra.ReceivedAt) FirstReceived,
    MAX(sa.ShippedAt) LastShipped
FROM Product p
LEFT JOIN ProductStock ps ON p.Id = ps.ProductId
LEFT JOIN ReceivingAchievementDetail rad ON ps.Id = rad.ProductStockId
LEFT JOIN ReceivingAchievement ra ON rad.ReceivingAchievementId = ra.Id
LEFT JOIN TreatmentAchievementDetail tad ON ps.Id = tad.ProducedProductStockId
LEFT JOIN TreatmentAchievement ta ON tad.TreatmentAchievementId = ta.Id
LEFT JOIN ShipmentAchievementDetail sad ON ps.Id = sad.ProductStockId
LEFT JOIN ShipmentAchievement sa ON sad.ShipmentAchievementId = sa.Id
GROUP BY p.Id, p.Name
HAVING COUNT(DISTINCT ra.Id) > 0
ORDER BY ReceivingCount + TreatmentCount + ShipmentCount DESC;

-- 8-2. 再帰的なデータ処理（製品の変換履歴）
WITH ProductHistory AS (
    -- 最初の受領（原材料）
    SELECT 
        ps.Id ProductStockId,
        ps.ProductId,
        0 Level,
        'Received' Operation,
        ra.ReceivedAt OperationDate,
        CAST(p.Name AS NVARCHAR(MAX)) ProductPath
    FROM ProductStock ps
    INNER JOIN Product p ON ps.ProductId = p.Id
    INNER JOIN ReceivingAchievementDetail rad ON ps.Id = rad.ProductStockId
    INNER JOIN ReceivingAchievement ra ON rad.ReceivingAchievementId = ra.Id
    WHERE ps.Id < 1000  -- 最初の1000件のみ
    
    UNION ALL
    
    -- 加工による変換
    SELECT 
        ps.Id ProductStockId,
        ps.ProductId,
        ph.Level + 1,
        'Treated' Operation,
        ta.TreatedAt OperationDate,
        ph.ProductPath + ' -> ' + p.Name
    FROM ProductHistory ph
    INNER JOIN TreatmentAchievementDetail tad ON ph.ProductStockId = tad.UsedProductStockId
    INNER JOIN TreatmentAchievement ta ON tad.TreatmentAchievementId = ta.Id
    INNER JOIN ProductStock ps ON tad.ProducedProductStockId = ps.Id
    INNER JOIN Product p ON ps.ProductId = p.Id
    WHERE ph.Level < 5  -- 最大5レベルまで
)
SELECT 
    ProductStockId,
    ProductId,
    Level,
    Operation,
    OperationDate,
    ProductPath
FROM ProductHistory
ORDER BY ProductStockId, Level;

-- =============================================================================
-- 実行例:
-- 各クエリの実行前に以下を実行:
-- SET STATISTICS IO ON
-- SET STATISTICS TIME ON
-- 
-- 実行後に以下で統計情報をリセット:
-- SET STATISTICS IO OFF
-- SET STATISTICS TIME OFF
-- =============================================================================