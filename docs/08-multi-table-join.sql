-- パフォーマンス統計を有効化
SET STATISTICS IO ON;
SET STATISTICS TIME ON;

-- 受領実績の詳細情報（4テーブル結合）
SELECT
    ReceivingAchievement.ReceivedAt,
    Employee.Name AS EmployeeName,
    Product.Name AS ProductName,
    COUNT(ReceivingAchievementDetail.Id) AS DetailCount
FROM
    ReceivingAchievement
    INNER JOIN Employee
        ON ReceivingAchievement.EmployeeId = Employee.Id
    INNER JOIN ReceivingAchievementDetail
        ON ReceivingAchievement.Id = ReceivingAchievementDetail.ReceivingAchievementId
    INNER JOIN ProductStock
        ON ReceivingAchievementDetail.ProductStockId = ProductStock.Id
    INNER JOIN Product
        ON ProductStock.ProductId = Product.Id
WHERE
    ReceivingAchievement.ReceivedAt >= '2024-01-01'
GROUP BY
    ReceivingAchievement.ReceivedAt, Employee.Name, Product.Name
ORDER BY
    ReceivingAchievement.ReceivedAt DESC;
