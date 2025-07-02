-- =============================================================================
-- レベル1 ステップ3: 主キー検索（インデックスが効く検索）
-- =============================================================================
-- 
-- 【学習目標】
-- - 主キー検索の速さを体感する
-- - logical readsが劇的に少なくなることを確認する
-- - 存在しないデータの検索でも高速であることを理解する
-- 
-- 【実行方法】
-- 各クエリを一つずつ実行して、ステップ2との違いを比較してください
-- 
-- =============================================================================

PRINT '=== 3-1. 特定の従業員を主キーで検索 ===';
PRINT '【予想】非常に高速（logical reads = 2-3程度）';

-- ★ここから実行 ★
SELECT Id, Name FROM Employee WHERE Id = 1;
-- logical readsが数個だけになることを確認してください

PRINT '';
PRINT '=== 3-2. 特定の製品在庫を主キーで検索 ===';
PRINT '【予想】大きなテーブルでも非常に高速';

-- ★ここから実行 ★
SELECT Id, ProductId, WarehouseId, Used FROM ProductStock WHERE Id = 1;
-- 大きなテーブルでもlogical readsが少ないことを確認

PRINT '';
PRINT '=== 3-3. 複数行を主キーで検索 ===';
PRINT '【予想】行数が増えてもlogical readsは少ない';

-- ★ここから実行 ★
SELECT Id, ProductId, WarehouseId, Used 
FROM ProductStock 
WHERE Id IN (1, 100, 500, 1000, 2000);
-- IN句でも効率的に検索されることを確認

PRINT '';
PRINT '=== 3-4. 存在しないIDの検索 ===';
PRINT '【予想】データが見つからなくても高速';

-- ★ここから実行 ★
SELECT Id, Name FROM Employee WHERE Id = 99999;
-- 結果が0件でもlogical readsが少ないことを確認

PRINT '';
PRINT '=== 主キー検索 vs 全件検索の比較 ===';
PRINT '以下の2つのクエリを実行して、logical readsの違いを比較してください：';

PRINT '';
PRINT '【比較1】主キー検索:';
-- ★ここから実行 ★
SELECT COUNT(*) FROM ProductStock WHERE Id = 1;

PRINT '';
PRINT '【比較2】全件検索:';
-- ★ここから実行 ★
SELECT COUNT(*) FROM ProductStock;

PRINT '';
PRINT '=== 観察ポイント ===';
PRINT '1. 主キー検索のlogical readsは常に数個だけ';
PRINT '2. テーブルサイズに関係なく高速';
PRINT '3. 「Index Seek」という効率的な検索方法が使われている';
PRINT '';
PRINT '=== 次のステップ ===';
PRINT 'level1-step4-non-index-search.sql で遅い検索を体感しましょう';