import { ConfigurationUseCase } from '../../domain/use-cases/ConfigurationUseCase.ts';
import { GenerateTestDataUseCase } from '../../domain/use-cases/GenerateTestDataUseCase.ts';
import type { ConfigurationProvider } from '../../domain/use-cases/GenerateTestDataUseCase.ts';
import type { DataGenerationConfig } from '../../domain/entities/DataGenerationConfig.ts';

export class DataGenerationConfigurationProvider implements ConfigurationProvider {
  private readonly configurationUseCase: ConfigurationUseCase;

  constructor(configurationUseCase: ConfigurationUseCase) {
    this.configurationUseCase = configurationUseCase;
  }

  async getConfiguration(): Promise<DataGenerationConfig> {
    return this.configurationUseCase.getConfiguration();
  }
}

export class DataGenerationController {
  private generateTestDataUseCase: GenerateTestDataUseCase;

  constructor(
    generateTestDataUseCase: GenerateTestDataUseCase
  ) {
    this.generateTestDataUseCase = generateTestDataUseCase;
  }

  async generateData(): Promise<void> {
    try {
      await this.generateTestDataUseCase.execute();
    } catch (error) {
      if (error instanceof Error && error.message === 'Configuration cancelled by user') {
        console.log('データ生成をキャンセルしました。');
        process.exit(0);
      }
      throw error;
    }
  }
}
