-- パフォーマンス統計を有効化
SET STATISTICS IO ON;
SET STATISTICS TIME ON;

-- 従業員別全工程実績集計
WITH EmployeeStats AS (
    SELECT
        Employee.Id,
        Employee.Name,
        COALESCE(r.ReceivingCount, 0) AS ReceivingCount,
        COALESCE(t.TreatmentCount, 0) AS TreatmentCount,
        COALESCE(s.ShipmentCount, 0) AS ShipmentCount
    FROM Employee
    LEFT JOIN (
        SELECT
            EmployeeId,
            COUNT(*) AS ReceivingCount
        FROM
            ReceivingAchievement
        WHERE
            ReceivedAt >= '2024-01-01'
        GROUP BY
            EmployeeId
    ) Receiving ON Employee.Id = Receiving.EmployeeId
    LEFT JOIN (
        SELECT
            EmployeeId,
            COUNT(*) AS TreatmentCount
        FROM
            TreatmentAchievement
        WHERE
            TreatedAt >= '2024-01-01'
        GROUP BY
            EmployeeId
    ) Treatment ON Employee.Id = Treatment.EmployeeId
    LEFT JOIN (
        SELECT
            EmployeeId,
            COUNT(*) AS ShipmentCount
        FROM
            ShipmentAchievement
        WHERE
            ShippedAt >= '2024-01-01'
        GROUP BY
            EmployeeId
    ) Shipment ON Employee.Id = Shipment.EmployeeId
)
SELECT
    Name,
    ReceivingCount,
    TreatmentCount,
    ShipmentCount,
    (ReceivingCount + TreatmentCount + ShipmentCount) AS TotalCount
FROM
    EmployeeStats
WHERE
    (ReceivingCount + TreatmentCount + ShipmentCount) > 0
ORDER BY
    TotalCount DESC;
