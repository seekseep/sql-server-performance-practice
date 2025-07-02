import { DIContainer } from './src/di/Container.ts';

async function main(): Promise<void> {
  const container = DIContainer.getInstance();

  try {
    // データベース接続
    await container.prismaDataSource.connect();

    // コントローラーを取得してデータ生成を実行
    const controller = container.dataGenerationController;
    await controller.generateData();

  } catch (error) {
    console.error('アプリケーション実行中にエラーが発生しました:', error);
    process.exit(1);
  } finally {
    // リソースのクリーンアップ
    await container.cleanup();
  }
}

// エラーハンドリング
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

// SIGINT ハンドリング (Ctrl+C)
process.on('SIGINT', async () => {
  console.log('\n👋 アプリケーションを終了しています...');
  const container = DIContainer.getInstance();
  await container.cleanup();
  process.exit(0);
});

// メイン関数実行
main();
