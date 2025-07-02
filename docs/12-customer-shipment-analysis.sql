-- パフォーマンス統計を有効化
SET STATISTICS IO ON;
SET STATISTICS TIME ON;

-- 顧客別製品出荷実績（計画vs実績）
SELECT
    Customer.Name AS CustomerName,
    Product.Name AS ProductName,
    SUM(ShipmentPlanDetail.Quantity) AS PlannedQuantity,
    COUNT(ShipmentAchievementDetail.Id) AS ActualShipments,
    CAST(COUNT(ShipmentAchievementDetail.Id) AS FLOAT) / NULLIF(SUM(ShipmentPlanDetail.Quantity), 0) * 100 AS FulfillmentRate
FROM Customer
INNER JOIN ShipmentPlan
    ON Customer.Id = ShipmentPlan.CustomerId
INNER JOIN ShipmentPlanDetail
    ON ShipmentPlan.Id = ShipmentPlanDetail.ShipmentPlanId
INNER JOIN Product
    ON ShipmentPlanDetail.ProductId = Product.Id
LEFT JOIN ShipmentAchievementDetail
    ON ShipmentPlanDetail.Id = ShipmentAchievementDetail.ShipmentPlanDetailId
GROUP BY
    Customer.Name, Product.Name
HAVING
    SUM(ShipmentPlanDetail.Quantity) > 0
ORDER BY
    Customer.Name, FulfillmentRate DESC;
