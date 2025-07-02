# CLAUDE.md

このファイルは、このリポジトリでClaude Code (claude.ai/code)が作業する際のガイダンスを提供します。

## プロジェクト概要

SQL Serverのパフォーマンステストとインデックス最適化の実践プロジェクトです。製造業の業務システム（受領・加工・出荷業務）をモデル化し、大規模なテストデータ（最大1億件）を生成してSQL Serverのクエリパフォーマンスとインデックス効果を分析します。

## データベース環境

### デフォルトデータベース接続
| 項目       | 設定内容              | 補足                        |
|------------|---------------------|----------------------------|
| Server     | localhost:1433      |                            |
| Username   | sa                  |                            |
| Password   | YourStrong!Passw0rd | SA_PASSWORD環境変数で設定可能 |
| Database   | SQL Server 2019     |                            |

### データベースの起動

```bash
docker-compose up -d
```

### テーブルの作成

```bash
sqlcmd -S localhost -U sa -P 'YourStrong!Passw0rd' -i sql/create-tables.sql
```

### テストデータの生成

```bash
# ツールディレクトリに移動
cd tool
# テストデータ生成ツールの実行
npm start
```

### 動作の検証

`docs/verification.md`に記載の手順に従い、データ生成後の動作を確認します。

### インデックスの作成

```bash
sqlcmd -S localhost -U sa -P 'YourStrong!Passw0rd' -i sql/create-indexes.sql
```

### インデックスの効果確認

インデックスの作成後再度テストデータ生成ツールを実行し、パフォーマンスの向上を確認します。


### アーキテクチャ概要

クリーンアーキテクチャの原則に従い、関心事を明確に分離：

**ドメイン層** (`src/domain/`):
- `entities/`: コアビジネスオブジェクト（DataGenerationConfig、ManufacturingDataなど）
- `use-cases/`: ビジネスロジック（ConfigurationUseCase、GenerateTestDataUseCase）

**インフラ層** (`src/infrastructure/`):
- `data-sources/`: 外部データアクセス（PrismaDataSource）
- `repositories/`: データ永続化実装（TestDataRepository）

**プレゼンテーション層** (`src/presentation/`):
- `cli/`: コマンドラインインターフェースコンポーネント（InquirerUserInteraction、ConsoleProgressReporter）
- `controllers/`: アプリケーションコントローラー（DataGenerationController）

**依存関係注入**: `DIContainer`シングルトンパターンで管理

### データ生成規模
- 従業員: 1,000件
- 製品: 1,000件
- 倉庫: 1,000件
- 顧客: 1,000件
- 受領実績: 1億件（各100-1,000件の詳細付き）
- 加工実績: 1億件（各100-1,000件の詳細付き）
- 出荷実績: 1億件（各100-1,000件の詳細付き）

## データベーススキーマ

製造業ワークフローテーブルのモデル化:
- **受領**: 従業員が原材料を倉庫在庫に受領
- **加工**: 従業員が加工計画に従って材料を加工
- **出荷**: 従業員が完成品を顧客に出荷

主要な関係性:
- すべての作業は従業員（作業実行者）にリンク
- ProductStockは使用フラグ付きで在庫を追跡
- Achievementテーブルはタイムスタンプ付きで実作業を記録
- Detailテーブルは各作業の明細を提供

## パフォーマンステスト

### SQLクエリファイル
- `performance-tests.sql`: メインパフォーマンス検証クエリ
- `level1-*.sql`: 段階的基本パフォーマンスチュートリアル
- `create-indexes.sql`: 最適化用インデックス定義

### テストワークフロー
1. ツールを使用してテストデータ生成
2. インデックスなしでベースラインクエリ実行
3. 対象インデックス作成
4. パフォーマンス指標比較（実行時間、I/O統計、実行計画）
5. インデックス使用状況と効果分析

### パフォーマンス測定
テストクエリ実行前に必ずSQL Server統計を有効化:
```sql
SET STATISTICS IO ON
SET STATISTICS TIME ON
```

## 開発メモ

- SQL ServerプロバイダーでPrismaをORMとして使用
- ES2022ターゲット、ESNextモジュールのTypeScript
- カスタムApplicationErrorクラスでエラーハンドリング
- 長時間実行データ生成操作の進捗レポート
- 依存関係注入コンテナでオブジェクトライフサイクル管理

## データベース設計の焦点

スキーマは現実的な製造業シナリオを重視:
- 大量トランザクションデータ（数億件のレコード）
- 結合最適化が必要な外部キー関係
- 時系列分析用の日付ベースクエリ
- 複数テーブルにまたがる従業員生産性クエリ
- 製品在庫と移動追跡
