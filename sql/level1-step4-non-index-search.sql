-- =============================================================================
-- レベル1 ステップ4: 非インデックス列での検索（遅い検索の体感）
-- =============================================================================
-- 
-- 【学習目標】
-- - インデックスがない列で検索すると遅くなることを体感する
-- - 主キー検索との性能差を比較する
-- - 「全表スキャン」がどれだけ非効率かを理解する
-- 
-- 【重要】
-- この検索は意図的に遅くしています。ステップ3との違いを実感してください！
-- 
-- =============================================================================

PRINT '=== 4-1. 従業員名での検索（インデックスなし） ===';
PRINT '【予想】主キー検索より遅い（全行チェックが必要）';
PRINT '実行中...';

-- ★ここから実行 ★
SELECT Id, Name FROM Employee WHERE Name = 'employee_1';
-- logical readsがEmployeeテーブル全体をスキャンした数になることを確認

PRINT '';
PRINT '=== 4-2. 製品在庫の使用状況での検索（インデックスなし） ===';
PRINT '【予想】かなり遅い（大量データを全行チェック）';
PRINT '実行中... ※これは時間がかかります';

-- ★ここから実行 ★
SELECT COUNT(*) UsedStockCount FROM ProductStock WHERE Used = 1;
-- logical readsがProductStockテーブル全体のページ数になることを確認

PRINT '';
PRINT '=== 4-3. 利用可能な在庫の検索（インデックスなし） ===';
PRINT '【予想】上記と同程度に遅い（全行チェック）';
PRINT '実行中... ※これも時間がかかります';

-- ★ここから実行 ★
SELECT COUNT(*) AvailableStockCount FROM ProductStock WHERE Used = 0;
-- Used = 1 の検索と同じくらいのlogical readsになることを確認

PRINT '';
PRINT '=== 4-4. 製品IDでの検索（外部キーだがインデックスなし） ===';
PRINT '【予想】全表スキャンで遅い';

-- ★ここから実行 ★
SELECT COUNT(*) FROM ProductStock WHERE ProductId = 1;
-- ProductIdでの検索でも全表スキャンになることを確認

PRINT '';
PRINT '=== 性能比較まとめ ===';
PRINT '以下のクエリを順番に実行して、logical readsの違いを比較してください：';

PRINT '';
PRINT '【高速】主キー検索:';
-- ★ここから実行 ★
SELECT Id, ProductId, WarehouseId, Used FROM ProductStock WHERE Id = 1;

PRINT '';
PRINT '【低速】非インデックス列検索:';
-- ★ここから実行 ★
SELECT Id, ProductId, WarehouseId, Used FROM ProductStock WHERE ProductId = 1 AND Used = 0;

PRINT '';
PRINT '=== なぜこんなに遅いのか？ ===';
PRINT '1. インデックスがない列では「全表スキャン（Table Scan）」が発生';
PRINT '2. 全ての行を一つずつチェックしないと結果がわからない';
PRINT '3. データ量が多いほど、この差は顕著になる';
PRINT '';
PRINT '=== 次のステップ ===';
PRINT 'level1-step5-range-search.sql で範囲検索の性能差を確認しましょう';