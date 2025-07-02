-- =============================================================================
-- レベル1 ステップ6: 実行計画の確認と理解
-- =============================================================================
-- 
-- 【学習目標】
-- - 実行計画の基本的な読み方を覚える
-- - Index Seek vs Table Scan の違いを視覚的に理解
-- - パフォーマンス問題の原因を特定する方法を学ぶ
-- 
-- 【重要】
-- このステップでは実際のクエリは実行せず、実行計画のみを表示します
-- 
-- =============================================================================

PRINT '=== 実行計画の表示設定 ===';
PRINT '実行計画を文字で表示する設定に変更します';

-- 実行計画をテキストで表示（実際のクエリは実行しない）
SET SHOWPLAN_TEXT ON;

PRINT '';
PRINT '=== 6-1. 主キー検索の実行計画（効率的） ===';
PRINT '【確認ポイント】Index Seek が表示されることを確認';

-- ★ここから実行 ★（実際には実行されず、計画のみ表示）
SELECT Id, Name FROM Employee WHERE Id = 1;
-- 実行計画に「Index Seek」と表示されることを確認

PRINT '';
PRINT '=== 6-2. 非インデックス列検索の実行計画（非効率） ===';
PRINT '【確認ポイント】Table Scan が表示されることを確認';

-- ★ここから実行 ★（実際には実行されず、計画のみ表示）
SELECT COUNT(*) FROM ProductStock WHERE Used = 1;
-- 実行計画に「Table Scan」と表示されることを確認

PRINT '';
PRINT '=== 6-3. 範囲検索の実行計画（効率的） ===';
PRINT '【確認ポイント】Index Seek (Range Scan) が表示される';

-- ★ここから実行 ★
SELECT COUNT(*) FROM ProductStock WHERE Id BETWEEN 1 AND 1000;
-- 範囲検索でもIndex Seekが使われることを確認

PRINT '';
PRINT '=== 6-4. 複雑な条件の実行計画（非効率） ===';
PRINT '【確認ポイント】複数の非インデックス条件でTable Scan';

-- ★ここから実行 ★
SELECT COUNT(*) FROM ProductStock 
WHERE ProductId = 1 AND WarehouseId = 2 AND Used = 0;
-- 複数条件でもTable Scanになることを確認

-- 実行計画表示を終了
SET SHOWPLAN_TEXT OFF;

PRINT '';
PRINT '=== より詳細な実行計画の確認（SSMS使用時） ===';
PRINT 'SQL Server Management Studio を使用している場合：';
PRINT '1. クエリを選択';
PRINT '2. Ctrl+L を押す（または「実行計画を含める」をクリック）';
PRINT '3. クエリを実行';
PRINT '4. 「実行計画」タブを確認';
PRINT '';
PRINT '【実行計画で確認すべきポイント】';
PRINT '- Index Seek: 効率的（緑色、コストが低い）';
PRINT '- Table Scan: 非効率（赤色、コストが高い）';
PRINT '- Index Scan: 中程度（黄色、全インデックスをスキャン）';

PRINT '';
PRINT '=== 実際に確認してみましょう ===';
PRINT '以下のクエリをSSMSで実行計画付きで実行してください：';

-- パフォーマンス測定を有効にして実際に実行
SET STATISTICS IO ON;
SET STATISTICS TIME ON;

PRINT '';
PRINT '【効率的なクエリ】実行計画でIndex Seekを確認:';
-- ★SSMS で Ctrl+L を押してから実行 ★
SELECT Id, ProductId, WarehouseId, Used FROM ProductStock WHERE Id = 1;

PRINT '';
PRINT '【非効率なクエリ】実行計画でTable Scanを確認:';
-- ★SSMS で Ctrl+L を押してから実行 ★
SELECT Id, ProductId, WarehouseId, Used FROM ProductStock WHERE ProductId = 1;

PRINT '';
PRINT '=== 実行計画の読み方まとめ ===';
PRINT '1. 右から左に処理が流れる';
PRINT '2. 太い矢印 = 大量のデータが流れている（注意が必要）';
PRINT '3. コスト% = そのオペレーションの相対的な重さ';
PRINT '4. Table Scan が見つかったら最初に最適化を検討';
PRINT '';
PRINT '=== レベル1完了おめでとうございます！ ===';
PRINT '';
PRINT '【学んだこと】';
PRINT '✓ インデックス（主キー）の効果';
PRINT '✓ logical reads の意味';
PRINT '✓ Table Scan vs Index Seek の違い';
PRINT '✓ 実行計画の基本的な読み方';
PRINT '';
PRINT '【次のレベルへ】';
PRINT 'レベル2では実際にインデックスを追加して';
PRINT '劇的な性能改善を体験しましょう！';
PRINT '';
PRINT 'level2-index-creation.sql を実行してください。';

-- 測定終了
SET STATISTICS IO OFF;
SET STATISTICS TIME OFF;