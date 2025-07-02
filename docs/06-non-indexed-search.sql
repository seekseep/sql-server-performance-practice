-- パフォーマンス統計を有効化
SET STATISTICS IO ON;
SET STATISTICS TIME ON;

-- 名前による検索（インデックスなし）
SELECT
  Id, Name
FROM
  Employee
WHERE
  Name LIKE '%Bergnaum';
