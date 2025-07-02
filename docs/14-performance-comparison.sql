-- インデックス作成前のパフォーマンス測定
SET STATISTICS IO ON;
SET STATISTICS TIME ON;

-- 日付範囲検索（インデックスなし想定）
SELECT
    COUNT(*)
FROM
    ReceivingAchievement
WHERE
    ReceivedAt BETWEEN '2025-01-01' AND '2025-01-31';

-- インデックス作成（create-indexes.sqlを実行後）
-- 同じクエリで再測定し比較
