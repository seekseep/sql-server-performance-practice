export interface DataGenerationConfig {
  employeeCount: number;
  customerCount: number;
  warehouseCount: number;
  productCount: number;
  daysToGenerate: number;
  receivingPerDay: number;
  treatmentPerDay: number;
  shipmentPerDay: number;
  detailItemsMin: number;
  detailItemsMax: number;
}

export class DataGenerationConfigBuilder {
  private config: Partial<DataGenerationConfig> = {};

  setEmployeeCount(count: number): DataGenerationConfigBuilder {
    this.config.employeeCount = count;
    return this;
  }

  setCustomerCount(count: number): DataGenerationConfigBuilder {
    this.config.customerCount = count;
    return this;
  }

  setWarehouseCount(count: number): DataGenerationConfigBuilder {
    this.config.warehouseCount = count;
    return this;
  }

  setProductCount(count: number): DataGenerationConfigBuilder {
    this.config.productCount = count;
    return this;
  }

  setDaysToGenerate(days: number): DataGenerationConfigBuilder {
    this.config.daysToGenerate = days;
    return this;
  }

  setReceivingPerDay(count: number): DataGenerationConfigBuilder {
    this.config.receivingPerDay = count;
    return this;
  }

  setTreatmentPerDay(count: number): DataGenerationConfigBuilder {
    this.config.treatmentPerDay = count;
    return this;
  }

  setShipmentPerDay(count: number): DataGenerationConfigBuilder {
    this.config.shipmentPerDay = count;
    return this;
  }

  setDetailItemsRange(min: number, max: number): DataGenerationConfigBuilder {
    this.config.detailItemsMin = min;
    this.config.detailItemsMax = max;
    return this;
  }

  build(): DataGenerationConfig {
    if (!this.isComplete()) {
      throw new Error('DataGenerationConfig is incomplete');
    }
    return this.config as DataGenerationConfig;
  }

  private isComplete(): boolean {
    return !!(
      this.config.employeeCount &&
      this.config.customerCount &&
      this.config.warehouseCount &&
      this.config.productCount &&
      this.config.daysToGenerate &&
      this.config.receivingPerDay &&
      this.config.treatmentPerDay &&
      this.config.shipmentPerDay &&
      this.config.detailItemsMin !== undefined &&
      this.config.detailItemsMax !== undefined
    );
  }
}

export const DataGenerationPresets = {
  small: (): DataGenerationConfig => new DataGenerationConfigBuilder()
    .setEmployeeCount(50)
    .setCustomerCount(100)
    .setWarehouseCount(5)
    .setProductCount(200)
    .setDaysToGenerate(30)
    .setReceivingPerDay(50)
    .setTreatmentPerDay(40)
    .setShipmentPerDay(45)
    .setDetailItemsRange(1, 5)
    .build(),

  medium: (): DataGenerationConfig => new DataGenerationConfigBuilder()
    .setEmployeeCount(200)
    .setCustomerCount(1000)
    .setWarehouseCount(20)
    .setProductCount(2000)
    .setDaysToGenerate(180)
    .setReceivingPerDay(500)
    .setTreatmentPerDay(400)
    .setShipmentPerDay(450)
    .setDetailItemsRange(1, 8)
    .build(),

  large: (): DataGenerationConfig => new DataGenerationConfigBuilder()
    .setEmployeeCount(1000)
    .setCustomerCount(5000)
    .setWarehouseCount(50)
    .setProductCount(10000)
    .setDaysToGenerate(365)
    .setReceivingPerDay(2000)
    .setTreatmentPerDay(1500)
    .setShipmentPerDay(1800)
    .setDetailItemsRange(1, 15)
    .build()
} as const;
