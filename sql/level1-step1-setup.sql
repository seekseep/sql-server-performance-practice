-- =============================================================================
-- レベル1 ステップ1: 測定環境のセットアップとデータ量確認
-- =============================================================================
-- 
-- 【このスクリプトの目的】
-- - パフォーマンス測定に必要な設定を行う
-- - 実験対象のデータ量を確認する
-- 
-- 【実行方法】
-- このスクリプト全体を選択して実行してください（Ctrl+A → F5）
-- 
-- =============================================================================

-- パフォーマンス測定の設定を有効化
SET STATISTICS IO ON;    -- ディスク読み取り回数を表示
SET STATISTICS TIME ON;  -- 実行時間を表示

PRINT '=== パフォーマンス測定環境セットアップ完了 ===';
PRINT '';

-- データ量の確認
PRINT '=== データ量の確認 ===';

SELECT 'Employee' TableName, COUNT(*) RowCount FROM Employee
UNION ALL
SELECT 'Customer', COUNT(*) FROM Customer  
UNION ALL
SELECT 'Product', COUNT(*) FROM Product
UNION ALL
SELECT 'ProductStock', COUNT(*) FROM ProductStock
UNION ALL
SELECT 'ReceivingAchievement', COUNT(*) FROM ReceivingAchievement
UNION ALL
SELECT 'ReceivingAchievementDetail', COUNT(*) FROM ReceivingAchievementDetail
ORDER BY RowCount DESC;

PRINT '';
PRINT '=== 次のステップ ===';
PRINT 'level1-step2-basic-search.sql を実行してください';