import type { ProgressReporter } from '../../domain/use-cases/GenerateTestDataUseCase.ts';

export class ConsoleProgressReporter implements ProgressReporter {
  reportProgress(message: string): void {
    console.log(`⏳ ${message}`);
  }

  reportCompletion(message: string): void {
    console.log('\n=== データ生成完了 ===');
    console.log(`✅ ${message}`);
    console.log('\n次は以下のコマンドでパフォーマンス計測を実行できます:');
    console.log('- インデックス作成: sql/create-indexes.sql');
    console.log('- パフォーマンス計測: sql/performance-tests.sql');
  }

  reportError(error: Error): void {
    console.error('\n❌ エラーが発生しました:');
    console.error(error.message);
    if (error.stack) {
      console.error('\nスタックトレース:');
      console.error(error.stack);
    }
  }

  reportTiming(operation: string, duration: number): void {
    const durationMs = Math.round(duration);
    const durationSeconds = (duration / 1000).toFixed(2);
    
    if (duration < 1000) {
      console.log(`⏱️  ${operation}: ${durationMs}ms`);
    } else {
      console.log(`⏱️  ${operation}: ${durationSeconds}s (${durationMs}ms)`);
    }
  }
}
