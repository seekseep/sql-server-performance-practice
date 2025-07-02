import type { DataGenerationConfig } from './DataGenerationConfig.ts';

export interface DataGenerationSummary {
  readonly masterDataCount: number;
  readonly estimatedReceivingCount: number;
  readonly estimatedTreatmentCount: number;
  readonly estimatedShipmentCount: number;
  readonly estimatedReceivingDetailCount: number;
  readonly estimatedTreatmentDetailCount: number;
  readonly estimatedShipmentDetailCount: number;
  readonly estimatedTotalRecords: number;
}

export class DataGenerationSummaryCalculator {
  static calculate(config: DataGenerationConfig): DataGenerationSummary {
    const masterDataCount =
      config.employeeCount +
      config.customerCount +
      config.warehouseCount +
      config.productCount;

    const estimatedReceivingCount = config.daysToGenerate * config.receivingPerDay;
    const estimatedTreatmentCount = config.daysToGenerate * config.treatmentPerDay;
    const estimatedShipmentCount = config.daysToGenerate * config.shipmentPerDay;

    const avgDetailItems = (config.detailItemsMin + config.detailItemsMax) / 2;

    const estimatedReceivingDetailCount = Math.round(estimatedReceivingCount * avgDetailItems);
    const estimatedTreatmentDetailCount = Math.round(estimatedTreatmentCount * avgDetailItems);
    const estimatedShipmentDetailCount = Math.round(estimatedShipmentCount * avgDetailItems);

    const estimatedTotalRecords =
      masterDataCount +
      estimatedReceivingCount + estimatedReceivingDetailCount +
      estimatedTreatmentCount + estimatedTreatmentDetailCount +
      estimatedShipmentCount + estimatedShipmentDetailCount;

    return {
      masterDataCount,
      estimatedReceivingCount,
      estimatedTreatmentCount,
      estimatedShipmentCount,
      estimatedReceivingDetailCount,
      estimatedTreatmentDetailCount,
      estimatedShipmentDetailCount,
      estimatedTotalRecords
    };
  }

  static formatSummary(summary: DataGenerationSummary): string {
    return `
=== 推定データ量 ===
基本マスタ: ${summary.masterDataCount.toLocaleString()} 件
受領実績: ${summary.estimatedReceivingCount.toLocaleString()} 件 (明細: ${summary.estimatedReceivingDetailCount.toLocaleString()} 件)
加工実績: ${summary.estimatedTreatmentCount.toLocaleString()} 件 (明細: ${summary.estimatedTreatmentDetailCount.toLocaleString()} 件)
出荷実績: ${summary.estimatedShipmentCount.toLocaleString()} 件 (明細: ${summary.estimatedShipmentDetailCount.toLocaleString()} 件)
合計レコード数: ${summary.estimatedTotalRecords.toLocaleString()} 件
    `.trim();
  }
}
