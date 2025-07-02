#!/bin/bash
mkdir -p results
echo "=== SQL Serverパフォーマンステスト開始 ==="
echo "$(date): テスト開始" > results/test-summary.txt

# 各テストファイルを順次実行
declare -A test_names=(
  ["01"]="テーブル存在確認"
  ["02"]="マスタデータ件数確認"
  ["03"]="トランザクションデータ件数確認"
  ["04"]="プライマリキー検索"
  ["05"]="プライマリキー範囲検索"
  ["06"]="非インデックス検索"
  ["07"]="単純内部結合"
  ["08"]="複数テーブル結合"
  ["09"]="時系列集計"
  ["10"]="従業員生産性分析"
  ["11"]="在庫追跡"
  ["12"]="顧客出荷分析"
  ["13"]="実行計画確認"
  ["14"]="パフォーマンス比較"
)

for i in {01..14}; do
  test_file=$(ls docs/${i}-*.sql 2>/dev/null | head -1)
  if [ -f "$test_file" ]; then
    echo "=== Test $i: ${test_names[$i]} ===" | tee -a results/test-summary.txt
    echo "実行ファイル: $test_file" | tee -a results/test-summary.txt
    echo "$(date): 開始" | tee -a results/test-summary.txt
    
    sqlcmd -S localhost -U sa -P 'YourStrong!Passw0rd' -i "$test_file" -o "results/${i}-results.txt"
    
    echo "$(date): 完了" | tee -a results/test-summary.txt
    echo "" | tee -a results/test-summary.txt
  fi
done

echo "$(date): 全テスト完了" | tee -a results/test-summary.txt
echo "結果: resultsディレクトリを確認してください"