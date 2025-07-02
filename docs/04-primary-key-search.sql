-- パフォーマンス統計を有効化
SET STATISTICS IO ON;
SET STATISTICS TIME ON;

-- 単一レコード検索（プライマリキー使用）
SELECT
  Id,
  Name
FROM
  Employee
WHERE
  Id = 100;
