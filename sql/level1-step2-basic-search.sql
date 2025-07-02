-- =============================================================================
-- レベル1 ステップ2: 基本的な検索（全件取得）
-- =============================================================================
-- 
-- 【学習目標】
-- - 小さなテーブル vs 大きなテーブルの性能差を体感する
-- - COUNT(*)の実行時間とlogical readsの違いを観察する
-- 
-- 【実行方法】
-- 各クエリを一つずつ実行して、結果を確認してください
-- 実行後にメッセージタブで「logical reads」と「CPU time」を確認しましょう
-- 
-- =============================================================================

-- 実行前の状態確認
SELECT 
    @@SPID session_id,
    'Ready for basic search test' status;

PRINT '';
PRINT '=== 2-1. 小さなテーブル（従業員）の全件取得 ===';
PRINT '【予想】高速（数ミリ秒、logical reads少ない）';

-- ★ここから実行 ★
SELECT COUNT(*) EmployeeCount FROM Employee;
-- 結果を確認してから次へ進んでください

PRINT '';
PRINT '=== 2-2. 中程度のテーブル（製品在庫）の件数取得 ===';
PRINT '【予想】前回より時間がかかる（logical reads増加）';

-- ★ここから実行 ★
SELECT COUNT(*) ProductStockCount FROM ProductStock;
-- 結果を確認してから次へ進んでください

PRINT '';
PRINT '=== 2-3. 大きなテーブル（受領実績詳細）の件数取得 ===';
PRINT '【予想】最も時間がかかる（logical reads最大）';

-- ★ここから実行 ★  
SELECT COUNT(*) ReceivingDetailCount FROM ReceivingAchievementDetail;
-- 結果を確認してから次へ進んでください

PRINT '';
PRINT '=== 観察ポイント ===';
PRINT '1. テーブルサイズが大きいほど実行時間が長くなる';
PRINT '2. logical readsの数値がテーブルサイズに比例している';
PRINT '3. メッセージタブの「Table ''''テーブル名''''. Scan count 1, logical reads XXX」を確認';
PRINT '';
PRINT '=== 次のステップ ===';
PRINT 'level1-step3-primary-key-search.sql を実行してください';