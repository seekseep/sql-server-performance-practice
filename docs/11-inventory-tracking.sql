-- パフォーマンス統計を有効化
SET STATISTICS IO ON;
SET STATISTICS TIME ON;

-- 製品在庫の使用状況と移動履歴
SELECT
    Product.Name AS ProductName,
    Warehouse.Name AS WarehouseName,
    ProductStock.Used,
    CASE
        WHEN UsedIn.ProductStockCount > 0 THEN '原材料として使用済み'
        WHEN ProducedFrom.ProductStockCount > 0 THEN '加工により生産済み'
        ELSE '未使用'
    END Status,
    COALESCE(UsedIn.ProductStockCount, 0) UsedCount,
    COALESCE(ProducedFrom.ProductStockCount, 0) ProducedCount
FROM
    ProductStock
    INNER JOIN Product
        ON ProductStock.ProductId = Product.Id
    INNER JOIN Warehouse
        ON ProductStock.WarehouseId = Warehouse.Id
    LEFT JOIN (
        SELECT
            UsedProductStockId,
            COUNT(*) AS ProductStockCount
        FROM
            TreatmentAchievementDetail
        GROUP BY
            UsedProductStockId
    ) UsedIn
        ON ProductStock.Id = UsedIn.UsedProductStockId
    LEFT JOIN (
        SELECT
            ProducedProductStockId,
            COUNT(*) AS ProductStockCount
        FROM
            TreatmentAchievementDetail
        GROUP BY
            ProducedProductStockId
    ) ProducedFrom
        ON ProductStock.Id = ProducedFrom.ProducedProductStockId
WHERE
    Product.Id <= 10
ORDER BY
    Product.Name, Warehouse.Name;
