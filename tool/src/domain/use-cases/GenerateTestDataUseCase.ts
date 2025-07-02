import type { DataGenerationConfig } from '../entities/DataGenerationConfig.ts';
import { MasterDataCollection } from '../entities/ManufacturingData.ts';

export interface DataRepository {
  clearAllData(): Promise<void>;
  generateMasterData(config: DataGenerationConfig): Promise<MasterDataCollection>;
  generateTransactionData(config: DataGenerationConfig, masterData: MasterDataCollection): Promise<void>;
}

export interface ConfigurationProvider {
  getConfiguration(): Promise<DataGenerationConfig>;
}

export interface ProgressReporter {
  reportProgress(message: string): void;
  reportCompletion(message: string): void;
  reportError(error: Error): void;
  reportTiming(operation: string, duration: number): void;
}

export class GenerateTestDataUseCase {
    private dataRepository: DataRepository
    private configProvider: ConfigurationProvider
    private progressReporter: ProgressReporter

  constructor(
    dataRepository: DataRepository,
    configProvider: ConfigurationProvider,
    progressReporter: ProgressReporter
  ) {
    this.dataRepository = dataRepository;
    this.configProvider = configProvider;
    this.progressReporter = progressReporter;
  }

  async execute(): Promise<void> {
    const totalStartTime = performance.now();
    
    try {
      this.progressReporter.reportProgress('設定を取得しています...');
      const configStartTime = performance.now();
      const config = await this.configProvider.getConfiguration();
      const configDuration = performance.now() - configStartTime;
      this.progressReporter.reportTiming('設定取得', configDuration);

      this.progressReporter.reportProgress('既存データをクリアしています...');
      const clearStartTime = performance.now();
      await this.dataRepository.clearAllData();
      const clearDuration = performance.now() - clearStartTime;
      this.progressReporter.reportTiming('データクリア', clearDuration);

      this.progressReporter.reportProgress('マスタデータを生成しています...');
      const masterStartTime = performance.now();
      const masterData = await this.dataRepository.generateMasterData(config);
      const masterDuration = performance.now() - masterStartTime;
      this.progressReporter.reportTiming('マスタデータ生成', masterDuration);

      this.progressReporter.reportProgress('取引データを生成しています...');
      const transactionStartTime = performance.now();
      await this.dataRepository.generateTransactionData(config, masterData);
      const transactionDuration = performance.now() - transactionStartTime;
      this.progressReporter.reportTiming('取引データ生成', transactionDuration);

      const totalDuration = performance.now() - totalStartTime;
      this.progressReporter.reportTiming('全体処理', totalDuration);
      this.progressReporter.reportCompletion('データ生成が正常に完了しました！');
    } catch (error) {
      this.progressReporter.reportError(error as Error);
      throw error;
    }
  }
}
