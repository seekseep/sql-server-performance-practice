-- =============================================================================
-- レベル1 ステップ5: 範囲検索の性能比較
-- =============================================================================
-- 
-- 【学習目標】
-- - 同じ範囲検索でもインデックスの有無で性能が大きく変わることを体感
-- - BETWEEN句でのインデックス効果を理解
-- - 実行計画の違いを確認
-- 
-- =============================================================================

PRINT '=== 5-1. 主キーでの範囲検索（高速） ===';
PRINT '【予想】インデックスで範囲を効率的に特定（Index Range Scan）';

-- ★ここから実行 ★
SELECT Id, Name FROM Employee WHERE Id BETWEEN 1 AND 10;
-- logical readsが範囲に関係した少ない数値になることを確認

PRINT '';
PRINT '=== 5-2. 製品在庫IDでの範囲検索（高速） ===';
PRINT '【予想】大きな範囲でも主キーなら効率的';

-- ★ここから実行 ★
SELECT COUNT(*) FROM ProductStock WHERE Id BETWEEN 1 AND 1000;
-- 1000件の範囲でもlogical readsが効率的であることを確認

PRINT '';
PRINT '=== 5-3. 非インデックス列での範囲検索（低速） ===';
PRINT '【予想】少ない範囲でも全表スキャンで遅い';
PRINT '実行中... ※時間がかかります';

-- ★ここから実行 ★
SELECT COUNT(*) FROM ProductStock WHERE ProductId BETWEEN 1 AND 10;
-- わずか10個の範囲でも全表スキャンになることを確認

PRINT '';
PRINT '=== 5-4. 複合条件での範囲検索（低速） ===';
PRINT '【予想】複数の非インデックス条件でさらに遅い';

-- ★ここから実行 ★
SELECT COUNT(*) FROM ProductStock 
WHERE ProductId BETWEEN 1 AND 5 AND WarehouseId BETWEEN 1 AND 3;
-- 複数条件でも結局は全表スキャンになることを確認

PRINT '';
PRINT '=== 範囲サイズによる性能比較 ===';
PRINT '主キーでの範囲検索：範囲が大きくなるとlogical readsも増加';

PRINT '';
PRINT '【小範囲】ID 1-10:';
-- ★ここから実行 ★
SELECT COUNT(*) FROM ProductStock WHERE Id BETWEEN 1 AND 10;

PRINT '';
PRINT '【中範囲】ID 1-1000:';
-- ★ここから実行 ★
SELECT COUNT(*) FROM ProductStock WHERE Id BETWEEN 1 AND 1000;

PRINT '';
PRINT '【大範囲】ID 1-10000:';
-- ★ここから実行 ★
SELECT COUNT(*) FROM ProductStock WHERE Id BETWEEN 1 AND 10000;

PRINT '';
PRINT '=== 非インデックス列の比較 ===';
PRINT '非インデックス列：範囲に関係なく常に全表スキャン';

PRINT '';
PRINT '【小範囲】ProductId 1-2:';
-- ★ここから実行 ★
SELECT COUNT(*) FROM ProductStock WHERE ProductId BETWEEN 1 AND 2;

PRINT '';
PRINT '【大範囲】ProductId 1-50:';
-- ★ここから実行 ★
SELECT COUNT(*) FROM ProductStock WHERE ProductId BETWEEN 1 AND 50;

PRINT '';
PRINT '=== 観察ポイント ===';
PRINT '1. 主キー範囲検索：範囲サイズに比例してlogical reads増加';
PRINT '2. 非インデックス列：範囲サイズに関係なく常に全表スキャン';
PRINT '3. インデックスがあると「どこからどこまで」を効率的に特定できる';
PRINT '';
PRINT '=== 次のステップ ===';
PRINT 'level1-step6-execution-plan.sql で実行計画を詳しく見てみましょう';