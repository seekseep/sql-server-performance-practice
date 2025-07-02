-- 実行時間計測を有効化
SET STATISTICS TIME ON;

-- 重いクエリの実行計画確認
SELECT
    ReceivingAchievement.Id,
    ReceivingAchievement.ReceivedAt,
    Employee.Name,
    COUNT(ReceivingAchievementDetail.Id) DetailCount
FROM
    ReceivingAchievement
INNER JOIN Employee
    ON ReceivingAchievement.EmployeeId = Employee.Id
INNER JOIN ReceivingAchievementDetail
    ON ReceivingAchievement.Id = ReceivingAchievementDetail.ReceivingAchievementId
WHERE
    ReceivingAchievement.ReceivedAt >= DATEADD(day, -30, GETDATE())
GROUP BY
    ReceivingAchievement.Id,
    ReceivingAchievement.ReceivedAt,
    Employee.Name
ORDER BY
    DetailCount DESC;

-- 計測を無効化
SET STATISTICS TIME OFF;
