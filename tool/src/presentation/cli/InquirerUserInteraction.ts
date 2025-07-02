import inquirer from 'inquirer';
import { DataGenerationConfigBuilder } from '../../domain/entities/DataGenerationConfig.ts';
import type { DataGenerationConfig } from '../../domain/entities/DataGenerationConfig.ts';
import { DataGenerationSummaryCalculator } from '../../domain/entities/DataGenerationSummary.ts';
import type { DataGenerationSummary } from '../../domain/entities/DataGenerationSummary.ts';
import type { UserInteractionService, DataScale } from '../../domain/use-cases/ConfigurationUseCase.ts';

export class InquirerUserInteraction implements UserInteractionService {
  async selectDataScale(): Promise<DataScale> {
    console.log('\n=== SQL Server パフォーマンス検証用テストデータ生成 ===');
    console.log('製造業務の整合性を保った実データを生成します。\n');

    const { scale } = await inquirer.prompt([
      {
        type: 'list',
        name: 'scale',
        message: 'データ規模を選択してください:',
        choices: [
          { name: '小規模 (検証・開発用)', value: 'small' },
          { name: '中規模 (パフォーマンステスト用)', value: 'medium' },
          { name: '大規模 (本格検証用)', value: 'large' },
          { name: 'カスタム (詳細設定)', value: 'custom' }
        ]
      }
    ]);

    return scale as DataScale;
  }

  async getCustomConfiguration(): Promise<DataGenerationConfig> {
    console.log('\n=== カスタム設定 ===');

    const employeeCount = await this.askNumber('従業員数:', 100, 1);
    const customerCount = await this.askNumber('顧客数:', 500, 1);
    const warehouseCount = await this.askNumber('倉庫数:', 10, 1);
    const productCount = await this.askNumber('製品数:', 1000, 1);
    const daysToGenerate = await this.askNumber('生成期間 (日数):', 365, 1);
    const receivingPerDay = await this.askNumber('1日あたりの受領実績数:', 1000, 0);
    const treatmentPerDay = await this.askNumber('1日あたりの加工実績数:', 800, 0);
    const shipmentPerDay = await this.askNumber('1日あたりの出荷実績数:', 900, 0);
    const detailItemsMin = await this.askNumber('1実績あたりの明細最小数:', 1, 1);
    const detailItemsMax = await this.askNumber('1実績あたりの明細最大数:', 10, 1);

    const answers = {
      employeeCount,
      customerCount,
      warehouseCount,
      productCount,
      daysToGenerate,
      receivingPerDay,
      treatmentPerDay,
      shipmentPerDay,
      detailItemsMin,
      detailItemsMax
    };

    // バリデーション

    if (answers.detailItemsMin > answers.detailItemsMax) {
      throw new Error('明細の最小数は最大数以下である必要があります');
    }

    return new DataGenerationConfigBuilder()
      .setEmployeeCount(answers.employeeCount)
      .setCustomerCount(answers.customerCount)
      .setWarehouseCount(answers.warehouseCount)
      .setProductCount(answers.productCount)
      .setDaysToGenerate(answers.daysToGenerate)
      .setReceivingPerDay(answers.receivingPerDay)
      .setTreatmentPerDay(answers.treatmentPerDay)
      .setShipmentPerDay(answers.shipmentPerDay)
      .setDetailItemsRange(answers.detailItemsMin, answers.detailItemsMax)
      .build();
  }

  async confirmConfiguration(summary: DataGenerationSummary): Promise<boolean> {
    console.log(DataGenerationSummaryCalculator.formatSummary(summary));

    const { confirm } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'confirm',
        message: '上記の設定でデータ生成を開始しますか?',
        default: true
      }
    ]);

    return confirm;
  }

  private async askNumber(message: string, defaultValue: number, minValue: number): Promise<number> {
    const { value } = await inquirer.prompt({
      type: 'number',
      name: 'value',
      message,
      default: defaultValue,
      validate: (input: number | undefined) => {
        if (input === undefined || input < minValue) {
          return `${minValue}以上の値を入力してください`;
        }
        return true;
      }
    });
    return value;
  }
}
