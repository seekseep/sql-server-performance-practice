-- パフォーマンス統計を有効化
SET STATISTICS IO ON;
SET STATISTICS TIME ON;

-- 実績テーブルのレコード数（大量データ）
SELECT 'ReceivingAchievement' TableName, COUNT(*) RecordCount FROM ReceivingAchievement
UNION ALL
SELECT 'ReceivingAchievementDetail', COUNT(*) FROM ReceivingAchievementDetail
UNION ALL
SELECT 'TreatmentAchievement', COUNT(*) FROM TreatmentAchievement
UNION ALL
SELECT 'TreatmentAchievementDetail', COUNT(*) FROM TreatmentAchievementDetail
UNION ALL
SELECT 'ShipmentAchievement', COUNT(*) FROM ShipmentAchievement
UNION ALL
SELECT 'ShipmentAchievementDetail', COUNT(*) FROM ShipmentAchievementDetail;