import { DataGenerationPresets } from '../entities/DataGenerationConfig.ts';
import type { DataGenerationConfig } from '../entities/DataGenerationConfig.ts';
import { DataGenerationSummaryCalculator } from '../entities/DataGenerationSummary.ts';
import type { DataGenerationSummary } from '../entities/DataGenerationSummary.ts';

export type DataScale = 'small' | 'medium' | 'large' | 'custom';

export interface UserInteractionService {
  selectDataScale(): Promise<DataScale>;
  getCustomConfiguration(): Promise<DataGenerationConfig>;
  confirmConfiguration(summary: DataGenerationSummary): Promise<boolean>;
}

export class ConfigurationUseCase {

  private userInteraction: UserInteractionService;

  constructor(
    userInteraction: UserInteractionService
  ) {
    this.userInteraction = userInteraction;
  }

  async getConfiguration(): Promise<DataGenerationConfig> {
    const scale = await this.userInteraction.selectDataScale();

    let config: DataGenerationConfig;

    switch (scale) {
      case 'small':
        config = DataGenerationPresets.small();
        break;
      case 'medium':
        config = DataGenerationPresets.medium();
        break;
      case 'large':
        config = DataGenerationPresets.large();
        break;
      case 'custom':
        config = await this.userInteraction.getCustomConfiguration();
        break;
      default:
        throw new Error(`Unknown data scale: ${scale}`);
    }

    const summary = DataGenerationSummaryCalculator.calculate(config);
    const confirmed = await this.userInteraction.confirmConfiguration(summary);

    if (!confirmed) {
      throw new Error('Configuration cancelled by user');
    }

    return config;
  }
}
