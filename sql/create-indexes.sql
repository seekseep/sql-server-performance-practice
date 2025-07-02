-- =============================================================================
-- SQL Server インデックス作成スクリプト
-- =============================================================================
-- パフォーマンス検証用のインデックスを段階的に作成
-- 各セクションは独立して実行可能で、効果を個別に測定できます

-- =============================================================================
-- セクション1: 基本的な単一列インデックス
-- =============================================================================

PRINT '=== セクション1: 基本的な単一列インデックス ===';

-- 1-1. 外部キーインデックス（JOIN性能向上）
IF NOT EXISTS (SELECT 1 FROM sys.indexes WHERE name = 'IX_ReceivingAchievement_EmployeeId')
BEGIN
    CREATE NONCLUSTERED INDEX IX_ReceivingAchievement_EmployeeId 
    ON ReceivingAchievement (EmployeeId);
    PRINT '✓ 受領実績の従業員IDインデックスを作成しました';
END

IF NOT EXISTS (SELECT 1 FROM sys.indexes WHERE name = 'IX_ReceivingAchievementDetail_ReceivingAchievementId')
BEGIN
    CREATE NONCLUSTERED INDEX IX_ReceivingAchievementDetail_ReceivingAchievementId 
    ON ReceivingAchievementDetail (ReceivingAchievementId);
    PRINT '✓ 受領実績詳細の実績IDインデックスを作成しました';
END

IF NOT EXISTS (SELECT 1 FROM sys.indexes WHERE name = 'IX_ProductStock_ProductId')
BEGIN
    CREATE NONCLUSTERED INDEX IX_ProductStock_ProductId 
    ON ProductStock (ProductId);
    PRINT '✓ 製品在庫の製品IDインデックスを作成しました';
END

IF NOT EXISTS (SELECT 1 FROM sys.indexes WHERE name = 'IX_ProductStock_WarehouseId')
BEGIN
    CREATE NONCLUSTERED INDEX IX_ProductStock_WarehouseId 
    ON ProductStock (WarehouseId);
    PRINT '✓ 製品在庫の倉庫IDインデックスを作成しました';
END

-- 1-2. 日付列インデックス（日付範囲検索用）
IF NOT EXISTS (SELECT 1 FROM sys.indexes WHERE name = 'IX_ReceivingAchievement_ReceivedAt')
BEGIN
    CREATE NONCLUSTERED INDEX IX_ReceivingAchievement_ReceivedAt 
    ON ReceivingAchievement (ReceivedAt);
    PRINT '✓ 受領実績の受領日インデックスを作成しました';
END

IF NOT EXISTS (SELECT 1 FROM sys.indexes WHERE name = 'IX_TreatmentAchievement_TreatedAt')
BEGIN
    CREATE NONCLUSTERED INDEX IX_TreatmentAchievement_TreatedAt 
    ON TreatmentAchievement (TreatedAt);
    PRINT '✓ 加工実績の加工日インデックスを作成しました';
END

IF NOT EXISTS (SELECT 1 FROM sys.indexes WHERE name = 'IX_ShipmentAchievement_ShippedAt')
BEGIN
    CREATE NONCLUSTERED INDEX IX_ShipmentAchievement_ShippedAt 
    ON ShipmentAchievement (ShippedAt);
    PRINT '✓ 出荷実績の出荷日インデックスを作成しました';
END

-- 1-3. 状態フラグインデックス（絞り込み条件用）
IF NOT EXISTS (SELECT 1 FROM sys.indexes WHERE name = 'IX_ProductStock_Used')
BEGIN
    CREATE NONCLUSTERED INDEX IX_ProductStock_Used 
    ON ProductStock (Used);
    PRINT '✓ 製品在庫の使用状況インデックスを作成しました';
END

PRINT 'セクション1完了: 基本的な単一列インデックス';
PRINT '';

-- =============================================================================
-- セクション2: 複合インデックス（複数列の組み合わせ）
-- =============================================================================

PRINT '=== セクション2: 複合インデックス ===';

-- 2-1. 製品在庫の複合検索用
IF NOT EXISTS (SELECT 1 FROM sys.indexes WHERE name = 'IX_ProductStock_ProductId_WarehouseId')
BEGIN
    CREATE NONCLUSTERED INDEX IX_ProductStock_ProductId_WarehouseId 
    ON ProductStock (ProductId, WarehouseId);
    PRINT '✓ 製品在庫の製品ID・倉庫ID複合インデックスを作成しました';
END

IF NOT EXISTS (SELECT 1 FROM sys.indexes WHERE name = 'IX_ProductStock_ProductId_Used')
BEGIN
    CREATE NONCLUSTERED INDEX IX_ProductStock_ProductId_Used 
    ON ProductStock (ProductId, Used);
    PRINT '✓ 製品在庫の製品ID・使用状況複合インデックスを作成しました';
END

IF NOT EXISTS (SELECT 1 FROM sys.indexes WHERE name = 'IX_ProductStock_WarehouseId_Used')
BEGIN
    CREATE NONCLUSTERED INDEX IX_ProductStock_WarehouseId_Used 
    ON ProductStock (WarehouseId, Used);
    PRINT '✓ 製品在庫の倉庫ID・使用状況複合インデックスを作成しました';
END

-- 2-2. 従業員・日付の複合検索用
IF NOT EXISTS (SELECT 1 FROM sys.indexes WHERE name = 'IX_ReceivingAchievement_EmployeeId_ReceivedAt')
BEGIN
    CREATE NONCLUSTERED INDEX IX_ReceivingAchievement_EmployeeId_ReceivedAt 
    ON ReceivingAchievement (EmployeeId, ReceivedAt);
    PRINT '✓ 受領実績の従業員ID・受領日複合インデックスを作成しました';
END

IF NOT EXISTS (SELECT 1 FROM sys.indexes WHERE name = 'IX_TreatmentAchievement_EmployeeId_TreatedAt')
BEGIN
    CREATE NONCLUSTERED INDEX IX_TreatmentAchievement_EmployeeId_TreatedAt 
    ON TreatmentAchievement (EmployeeId, TreatedAt);
    PRINT '✓ 加工実績の従業員ID・加工日複合インデックスを作成しました';
END

IF NOT EXISTS (SELECT 1 FROM sys.indexes WHERE name = 'IX_ShipmentAchievement_EmployeeId_ShippedAt')
BEGIN
    CREATE NONCLUSTERED INDEX IX_ShipmentAchievement_EmployeeId_ShippedAt 
    ON ShipmentAchievement (EmployeeId, ShippedAt);
    PRINT '✓ 出荷実績の従業員ID・出荷日複合インデックスを作成しました';
END

-- 2-3. 3列複合インデックス（高度な絞り込み用）
IF NOT EXISTS (SELECT 1 FROM sys.indexes WHERE name = 'IX_ProductStock_ProductId_WarehouseId_Used')
BEGIN
    CREATE NONCLUSTERED INDEX IX_ProductStock_ProductId_WarehouseId_Used 
    ON ProductStock (ProductId, WarehouseId, Used);
    PRINT '✓ 製品在庫の製品ID・倉庫ID・使用状況3列複合インデックスを作成しました';
END

PRINT 'セクション2完了: 複合インデックス';
PRINT '';

-- =============================================================================
-- セクション3: カバリングインデックス（INCLUDE列付き）
-- =============================================================================

PRINT '=== セクション3: カバリングインデックス ===';

-- 3-1. 受領実績の完全カバリング
IF NOT EXISTS (SELECT 1 FROM sys.indexes WHERE name = 'IX_ReceivingAchievement_Covering')
BEGIN
    CREATE NONCLUSTERED INDEX IX_ReceivingAchievement_Covering 
    ON ReceivingAchievement (EmployeeId, ReceivedAt)
    INCLUDE (Id);
    PRINT '✓ 受領実績のカバリングインデックスを作成しました';
END

-- 3-2. 製品在庫の完全カバリング
IF NOT EXISTS (SELECT 1 FROM sys.indexes WHERE name = 'IX_ProductStock_Covering')
BEGIN
    CREATE NONCLUSTERED INDEX IX_ProductStock_Covering 
    ON ProductStock (ProductId, WarehouseId, Used)
    INCLUDE (Id);
    PRINT '✓ 製品在庫のカバリングインデックスを作成しました';
END

-- 3-3. JOIN最適化用カバリング
IF NOT EXISTS (SELECT 1 FROM sys.indexes WHERE name = 'IX_ReceivingAchievementDetail_Covering')
BEGIN
    CREATE NONCLUSTERED INDEX IX_ReceivingAchievementDetail_Covering 
    ON ReceivingAchievementDetail (ReceivingAchievementId)
    INCLUDE (ProductStockId);
    PRINT '✓ 受領実績詳細のカバリングインデックスを作成しました';
END

-- 3-4. 集計クエリ最適化用
IF NOT EXISTS (SELECT 1 FROM sys.indexes WHERE name = 'IX_Employee_Covering')
BEGIN
    CREATE NONCLUSTERED INDEX IX_Employee_Covering 
    ON Employee (Id)
    INCLUDE (Name);
    PRINT '✓ 従業員のカバリングインデックスを作成しました';
END

IF NOT EXISTS (SELECT 1 FROM sys.indexes WHERE name = 'IX_Product_Covering')
BEGIN
    CREATE NONCLUSTERED INDEX IX_Product_Covering 
    ON Product (Id)
    INCLUDE (Name);
    PRINT '✓ 製品のカバリングインデックスを作成しました';
END

IF NOT EXISTS (SELECT 1 FROM sys.indexes WHERE name = 'IX_Warehouse_Covering')
BEGIN
    CREATE NONCLUSTERED INDEX IX_Warehouse_Covering 
    ON Warehouse (Id)
    INCLUDE (Name);
    PRINT '✓ 倉庫のカバリングインデックスを作成しました';
END

PRINT 'セクション3完了: カバリングインデックス';
PRINT '';

-- =============================================================================
-- セクション4: 加工・出荷業務用インデックス
-- =============================================================================

PRINT '=== セクション4: 加工・出荷業務用インデックス ===';

-- 4-1. 加工業務用インデックス
IF NOT EXISTS (SELECT 1 FROM sys.indexes WHERE name = 'IX_TreatmentAchievementDetail_TreatmentAchievementId')
BEGIN
    CREATE NONCLUSTERED INDEX IX_TreatmentAchievementDetail_TreatmentAchievementId 
    ON TreatmentAchievementDetail (TreatmentAchievementId);
    PRINT '✓ 加工実績詳細の実績IDインデックスを作成しました';
END

IF NOT EXISTS (SELECT 1 FROM sys.indexes WHERE name = 'IX_TreatmentAchievementDetail_UsedProductStockId')
BEGIN
    CREATE NONCLUSTERED INDEX IX_TreatmentAchievementDetail_UsedProductStockId 
    ON TreatmentAchievementDetail (UsedProductStockId);
    PRINT '✓ 加工実績詳細の使用在庫IDインデックスを作成しました';
END

IF NOT EXISTS (SELECT 1 FROM sys.indexes WHERE name = 'IX_TreatmentAchievementDetail_ProducedProductStockId')
BEGIN
    CREATE NONCLUSTERED INDEX IX_TreatmentAchievementDetail_ProducedProductStockId 
    ON TreatmentAchievementDetail (ProducedProductStockId);
    PRINT '✓ 加工実績詳細の生産在庫IDインデックスを作成しました';
END

-- 4-2. 出荷業務用インデックス
IF NOT EXISTS (SELECT 1 FROM sys.indexes WHERE name = 'IX_ShipmentPlan_CustomerId')
BEGIN
    CREATE NONCLUSTERED INDEX IX_ShipmentPlan_CustomerId 
    ON ShipmentPlan (CustomerId);
    PRINT '✓ 出荷計画の顧客IDインデックスを作成しました';
END

IF NOT EXISTS (SELECT 1 FROM sys.indexes WHERE name = 'IX_ShipmentAchievementDetail_ShipmentAchievementId')
BEGIN
    CREATE NONCLUSTERED INDEX IX_ShipmentAchievementDetail_ShipmentAchievementId 
    ON ShipmentAchievementDetail (ShipmentAchievementId);
    PRINT '✓ 出荷実績詳細の実績IDインデックスを作成しました';
END

IF NOT EXISTS (SELECT 1 FROM sys.indexes WHERE name = 'IX_ShipmentAchievementDetail_ProductStockId')
BEGIN
    CREATE NONCLUSTERED INDEX IX_ShipmentAchievementDetail_ProductStockId 
    ON ShipmentAchievementDetail (ProductStockId);
    PRINT '✓ 出荷実績詳細の在庫IDインデックスを作成しました';
END

-- 4-3. 計画テーブル用インデックス
IF NOT EXISTS (SELECT 1 FROM sys.indexes WHERE name = 'IX_TreatmentPlanDetail_TreatmentPlanId')
BEGIN
    CREATE NONCLUSTERED INDEX IX_TreatmentPlanDetail_TreatmentPlanId 
    ON TreatmentPlanDetail (TreatmentPlanId);
    PRINT '✓ 加工計画詳細の計画IDインデックスを作成しました';
END

IF NOT EXISTS (SELECT 1 FROM sys.indexes WHERE name = 'IX_ShipmentPlanDetail_ShipmentPlanId')
BEGIN
    CREATE NONCLUSTERED INDEX IX_ShipmentPlanDetail_ShipmentPlanId 
    ON ShipmentPlanDetail (ShipmentPlanId);
    PRINT '✓ 出荷計画詳細の計画IDインデックスを作成しました';
END

PRINT 'セクション4完了: 加工・出荷業務用インデックス';
PRINT '';

-- =============================================================================
-- セクション5: 特殊用途インデックス（フィルタ付き、部分）
-- =============================================================================

PRINT '=== セクション5: 特殊用途インデックス ===';

-- 5-1. フィルタ付きインデックス（使用可能な在庫のみ）
IF NOT EXISTS (SELECT 1 FROM sys.indexes WHERE name = 'IX_ProductStock_Available_Filtered')
BEGIN
    CREATE NONCLUSTERED INDEX IX_ProductStock_Available_Filtered 
    ON ProductStock (ProductId, WarehouseId)
    WHERE Used = 0;
    PRINT '✓ 使用可能在庫のフィルタ付きインデックスを作成しました';
END

-- 5-2. 最近のデータ用フィルタ付きインデックス
IF NOT EXISTS (SELECT 1 FROM sys.indexes WHERE name = 'IX_ReceivingAchievement_Recent_Filtered')
BEGIN
    CREATE NONCLUSTERED INDEX IX_ReceivingAchievement_Recent_Filtered 
    ON ReceivingAchievement (EmployeeId, ReceivedAt)
    WHERE ReceivedAt >= DATEADD(MONTH, -3, GETDATE());
    PRINT '✓ 直近3ヶ月の受領実績フィルタ付きインデックスを作成しました';
END

-- 5-3. 文字列検索用インデックス（名前フィールド）
IF NOT EXISTS (SELECT 1 FROM sys.indexes WHERE name = 'IX_Product_Name')
BEGIN
    CREATE NONCLUSTERED INDEX IX_Product_Name 
    ON Product (Name);
    PRINT '✓ 製品名検索用インデックスを作成しました';
END

IF NOT EXISTS (SELECT 1 FROM sys.indexes WHERE name = 'IX_Customer_Name')
BEGIN
    CREATE NONCLUSTERED INDEX IX_Customer_Name 
    ON Customer (Name);
    PRINT '✓ 顧客名検索用インデックスを作成しました';
END

-- 5-4. ソート最適化用インデックス
IF NOT EXISTS (SELECT 1 FROM sys.indexes WHERE name = 'IX_ReceivingAchievement_ReceivedAt_Desc')
BEGIN
    CREATE NONCLUSTERED INDEX IX_ReceivingAchievement_ReceivedAt_Desc 
    ON ReceivingAchievement (ReceivedAt DESC);
    PRINT '✓ 受領実績の日付降順インデックスを作成しました';
END

PRINT 'セクション5完了: 特殊用途インデックス';
PRINT '';

-- =============================================================================
-- セクション6: 統計情報の更新
-- =============================================================================

PRINT '=== セクション6: 統計情報の更新 ===';

-- すべてのテーブルの統計情報を更新
UPDATE STATISTICS Employee;
UPDATE STATISTICS Customer;
UPDATE STATISTICS Warehouse;
UPDATE STATISTICS Product;
UPDATE STATISTICS ProductStock;
UPDATE STATISTICS ReceivingAchievement;
UPDATE STATISTICS ReceivingAchievementDetail;
UPDATE STATISTICS TreatmentPlan;
UPDATE STATISTICS TreatmentPlanDetail;
UPDATE STATISTICS TreatmentAchievement;
UPDATE STATISTICS TreatmentAchievementDetail;
UPDATE STATISTICS ShipmentPlan;
UPDATE STATISTICS ShipmentPlanDetail;
UPDATE STATISTICS ShipmentAchievement;
UPDATE STATISTICS ShipmentAchievementDetail;

PRINT '✓ 全テーブルの統計情報を更新しました';
PRINT 'セクション6完了: 統計情報の更新';
PRINT '';

-- =============================================================================
-- インデックス作成完了レポート
-- =============================================================================

PRINT '=============================================================================';
PRINT 'インデックス作成完了レポート';
PRINT '=============================================================================';

-- 作成されたインデックス数をカウント
SELECT 
    t.name TableName,
    COUNT(i.index_id) IndexCount,
    SUM(CASE WHEN i.type_desc = 'CLUSTERED' THEN 1 ELSE 0 END) ClusteredIndexes,
    SUM(CASE WHEN i.type_desc = 'NONCLUSTERED' THEN 1 ELSE 0 END) NonClusteredIndexes
FROM sys.tables t
LEFT JOIN sys.indexes i ON t.object_id = i.object_id
WHERE t.name IN ('Employee', 'Customer', 'Warehouse', 'Product', 'ProductStock', 
                 'ReceivingAchievement', 'ReceivingAchievementDetail',
                 'TreatmentPlan', 'TreatmentPlanDetail',
                 'TreatmentAchievement', 'TreatmentAchievementDetail',
                 'ShipmentPlan', 'ShipmentPlanDetail',
                 'ShipmentAchievement', 'ShipmentAchievementDetail')
  AND i.index_id > 0  -- インデックスが存在するもののみ
GROUP BY t.name
ORDER BY t.name;

PRINT '';
PRINT '=== インデックス作成が完了しました ===';
PRINT '次のステップ:';
PRINT '1. sql/performance-tests.sql でパフォーマンステストを実行';
PRINT '2. SET STATISTICS IO ON でI/O統計を確認';
PRINT '3. 実行プランを分析してインデックス使用状況を確認';
PRINT '4. 必要に応じてインデックスの追加・削除・調整を実施';

-- =============================================================================
-- インデックス削除用スクリプト（必要時に実行）
-- =============================================================================

/*
-- 全ての非クラスタ化インデックスを削除する場合は以下のコメントを外して実行

PRINT '=== インデックス削除処理 ===';

-- 作成したインデックスを削除
DROP INDEX IF EXISTS IX_ReceivingAchievement_EmployeeId ON ReceivingAchievement;
DROP INDEX IF EXISTS IX_ReceivingAchievementDetail_ReceivingAchievementId ON ReceivingAchievementDetail;
DROP INDEX IF EXISTS IX_ProductStock_ProductId ON ProductStock;
DROP INDEX IF EXISTS IX_ProductStock_WarehouseId ON ProductStock;
DROP INDEX IF EXISTS IX_ReceivingAchievement_ReceivedAt ON ReceivingAchievement;
DROP INDEX IF EXISTS IX_TreatmentAchievement_TreatedAt ON TreatmentAchievement;
DROP INDEX IF EXISTS IX_ShipmentAchievement_ShippedAt ON ShipmentAchievement;
DROP INDEX IF EXISTS IX_ProductStock_Used ON ProductStock;
DROP INDEX IF EXISTS IX_ProductStock_ProductId_WarehouseId ON ProductStock;
DROP INDEX IF EXISTS IX_ProductStock_ProductId_Used ON ProductStock;
DROP INDEX IF EXISTS IX_ProductStock_WarehouseId_Used ON ProductStock;
DROP INDEX IF EXISTS IX_ReceivingAchievement_EmployeeId_ReceivedAt ON ReceivingAchievement;
DROP INDEX IF EXISTS IX_TreatmentAchievement_EmployeeId_TreatedAt ON TreatmentAchievement;
DROP INDEX IF EXISTS IX_ShipmentAchievement_EmployeeId_ShippedAt ON ShipmentAchievement;
DROP INDEX IF EXISTS IX_ProductStock_ProductId_WarehouseId_Used ON ProductStock;
DROP INDEX IF EXISTS IX_ReceivingAchievement_Covering ON ReceivingAchievement;
DROP INDEX IF EXISTS IX_ProductStock_Covering ON ProductStock;
DROP INDEX IF EXISTS IX_ReceivingAchievementDetail_Covering ON ReceivingAchievementDetail;
DROP INDEX IF EXISTS IX_Employee_Covering ON Employee;
DROP INDEX IF EXISTS IX_Product_Covering ON Product;
DROP INDEX IF EXISTS IX_Warehouse_Covering ON Warehouse;
DROP INDEX IF EXISTS IX_TreatmentAchievementDetail_TreatmentAchievementId ON TreatmentAchievementDetail;
DROP INDEX IF EXISTS IX_TreatmentAchievementDetail_UsedProductStockId ON TreatmentAchievementDetail;
DROP INDEX IF EXISTS IX_TreatmentAchievementDetail_ProducedProductStockId ON TreatmentAchievementDetail;
DROP INDEX IF EXISTS IX_ShipmentPlan_CustomerId ON ShipmentPlan;
DROP INDEX IF EXISTS IX_ShipmentAchievementDetail_ShipmentAchievementId ON ShipmentAchievementDetail;
DROP INDEX IF EXISTS IX_ShipmentAchievementDetail_ProductStockId ON ShipmentAchievementDetail;
DROP INDEX IF EXISTS IX_TreatmentPlanDetail_TreatmentPlanId ON TreatmentPlanDetail;
DROP INDEX IF EXISTS IX_ShipmentPlanDetail_ShipmentPlanId ON ShipmentPlanDetail;
DROP INDEX IF EXISTS IX_ProductStock_Available_Filtered ON ProductStock;
DROP INDEX IF EXISTS IX_ReceivingAchievement_Recent_Filtered ON ReceivingAchievement;
DROP INDEX IF EXISTS IX_Product_Name ON Product;
DROP INDEX IF EXISTS IX_Customer_Name ON Customer;
DROP INDEX IF EXISTS IX_ReceivingAchievement_ReceivedAt_Desc ON ReceivingAchievement;

PRINT '✓ 全インデックスを削除しました';
*/