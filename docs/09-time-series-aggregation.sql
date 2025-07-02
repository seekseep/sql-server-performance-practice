-- パフォーマンス統計を有効化
SET STATISTICS IO ON;
SET STATISTICS TIME ON;

-- 月別受領実績集計
SELECT
    YEAR(ReceivedAt) AS Year,
    MONTH(ReceivedAt) AS Month,
    COUNT(*) AS AchievementCount,
    COUNT(DISTINCT EmployeeId) AS EmployeeCount
FROM ReceivingAchievement
WHERE ReceivedAt >= '2024-01-01'
GROUP BY YEAR(ReceivedAt), MONTH(ReceivedAt)
ORDER BY Year, Month;
