-- パフォーマンス統計を有効化
SET STATISTICS IO ON;
SET STATISTICS TIME ON;

-- 基本テーブルのレコード数
SELECT 'Employee' TableName, COUNT(*) RecordCount FROM Employee
UNION ALL
SELECT 'Customer', COUNT(*) FROM Customer
UNION ALL
SELECT 'Warehouse', COUNT(*) FROM Warehouse
UNION ALL
SELECT 'Product', COUNT(*) FROM Product
UNION ALL
SELECT 'ProductStock', COUNT(*) FROM ProductStock;
