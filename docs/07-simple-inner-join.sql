-- パフォーマンス統計を有効化
SET STATISTICS IO ON;
SET STATISTICS TIME ON;

-- 受領実績と従業員の結合
SELECT
    ReceivingAchievement.Id,
    ReceivingAchievement.ReceivedAt,
    Employee.Name EmployeeName
FROM
    ReceivingAchievement
INNER JOIN Employee
    ON ReceivingAchievement.EmployeeId = Employee.Id
WHERE
    ReceivingAchievement.Id = 1000;
