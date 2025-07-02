import { faker } from '@faker-js/faker';
import { subDays, addDays } from 'date-fns';
import type { DataRepository, ProgressReporter } from '../../domain/use-cases/GenerateTestDataUseCase.ts';
import type { DataGenerationConfig } from '../../domain/entities/DataGenerationConfig.ts';
import { MasterDataCollection, ProductStockManager } from '../../domain/entities/ManufacturingData.ts';
import { PrismaDataSource } from '../data-sources/PrismaDataSource.ts';

export class TestDataRepository implements DataRepository {
  private dataSource: PrismaDataSource;
  private progressReporter?: ProgressReporter;

  constructor(dataSource: PrismaDataSource, progressReporter?: ProgressReporter) {
    this.dataSource = dataSource;
    this.progressReporter = progressReporter;
  }

  async clearAllData(): Promise<void> {
    await this.dataSource.clearAllData();
  }

  async generateMasterData(config: DataGenerationConfig): Promise<MasterDataCollection> {
    const employees = [];
    const customers = [];
    const warehouses = [];
    const products = [];

    // 従業員マスタ生成
    for (let i = 0; i < config.employeeCount; i++) {
      const employee = await this.dataSource.createEmployee(
        faker.person.fullName()
      );
      employees.push(employee);
    }

    // 顧客マスタ生成
    for (let i = 0; i < config.customerCount; i++) {
      const customer = await this.dataSource.createCustomer(
        faker.company.name(),
        faker.location.streetAddress({ useFullAddress: true }),
        faker.internet.email()
      );
      customers.push(customer);
    }

    // 倉庫マスタ生成
    for (let i = 0; i < config.warehouseCount; i++) {
      const warehouse = await this.dataSource.createWarehouse(
        `${faker.location.city()}倉庫${i + 1}`
      );
      warehouses.push(warehouse);
    }

    // 製品マスタ生成
    for (let i = 0; i < config.productCount; i++) {
      const product = await this.dataSource.createProduct(
        `${faker.commerce.product()}${faker.commerce.productAdjective()}`
      );
      products.push(product);
    }

    return new MasterDataCollection(employees, customers, warehouses, products);
  }

  async generateTransactionData(
    config: DataGenerationConfig,
    masterData: MasterDataCollection
  ): Promise<void> {
    const stockManager = new ProductStockManager();
    const treatmentPlans = [];
    const shipmentPlans = [];

    const startDate = subDays(new Date(), config.daysToGenerate);

    // 加工計画を事前に作成
    const treatmentPlanCount = Math.ceil(config.daysToGenerate / 7);
    for (let i = 0; i < treatmentPlanCount; i++) {
      const plan = await this.dataSource.createTreatmentPlan();
      treatmentPlans.push(plan);
    }

    // 出荷計画を事前に作成
    const shipmentPlanCount = Math.ceil(config.daysToGenerate / 3);
    for (let i = 0; i < shipmentPlanCount; i++) {
      const customer = masterData.getRandomCustomer();
      const plan = await this.dataSource.createShipmentPlan(customer.Id);
      shipmentPlans.push(plan);
    }

    // 日次でトランザクションデータを生成
    for (let day = 0; day < config.daysToGenerate; day++) {
      const currentDate = addDays(startDate, day);
      this.progressReporter?.reportProgress(`${day + 1}日目のデータ生成中...`);

      // 受領実績生成
      const receivingStartTime = performance.now();
      await this.generateReceivingData(config, masterData, stockManager, currentDate);
      const receivingDuration = performance.now() - receivingStartTime;
      this.progressReporter?.reportTiming(`${day + 1}日目 受領データ生成`, receivingDuration);

      // 加工実績生成
      if (stockManager.getAvailableStockCount() > 0) {
        const treatmentStartTime = performance.now();
        await this.generateTreatmentData(
          config,
          masterData,
          stockManager,
          treatmentPlans,
          currentDate
        );
        const treatmentDuration = performance.now() - treatmentStartTime;
        this.progressReporter?.reportTiming(`${day + 1}日目 加工データ生成`, treatmentDuration);
      }

      // 出荷実績生成
      if (stockManager.getAvailableStockCount() > 0) {
        const shipmentStartTime = performance.now();
        await this.generateShipmentData(
          config,
          masterData,
          stockManager,
          shipmentPlans,
          currentDate
        );
        const shipmentDuration = performance.now() - shipmentStartTime;
        this.progressReporter?.reportTiming(`${day + 1}日目 出荷データ生成`, shipmentDuration);
      }
    }
  }

  private async generateReceivingData(
    config: DataGenerationConfig,
    masterData: MasterDataCollection,
    stockManager: ProductStockManager,
    currentDate: Date
  ): Promise<void> {
    // 受領実績を一括作成
    const achievementPromises = [];
    for (let i = 0; i < config.receivingPerDay; i++) {
      const employee = masterData.getRandomEmployee();
      achievementPromises.push(
        this.dataSource.createReceivingAchievement(
          employee.Id,
          faker.date.between({ from: currentDate, to: addDays(currentDate, 1) })
        )
      );
    }
    const achievements = await Promise.all(achievementPromises);

    // 製品在庫データを準備
    const stockData = [];
    const detailCounts = [];
    
    for (const achievement of achievements) {
      const detailCount = faker.number.int({
        min: config.detailItemsMin,
        max: config.detailItemsMax
      });
      detailCounts.push(detailCount);

      for (let j = 0; j < detailCount; j++) {
        const product = masterData.getRandomProduct();
        const warehouse = masterData.getRandomWarehouse();

        stockData.push({
          ProductId: product.Id,
          WarehouseId: warehouse.Id,
          Used: 0
        });
      }
    }

    // 製品在庫を一括作成
    const createdStocks = await this.dataSource.bulkCreateProductStocks(stockData);
    
    // 作成された在庫をstockManagerに追加
    for (const stock of createdStocks) {
      stockManager.addStock(stock);
    }

    // 受領実績詳細データを準備
    const achievementDetailsData = [];
    let stockIndex = 0;
    for (let i = 0; i < achievements.length; i++) {
      const achievement = achievements[i];
      const detailCount = detailCounts[i];

      for (let j = 0; j < detailCount; j++) {
        achievementDetailsData.push({
          ReceivingAchievementId: achievement.Id,
          ProductStockId: createdStocks[stockIndex].Id
        });
        stockIndex++;
      }
    }

    // 受領実績詳細を一括作成
    await this.dataSource.bulkCreateReceivingAchievementDetails(achievementDetailsData);
  }

  private async generateTreatmentData(
    config: DataGenerationConfig,
    masterData: MasterDataCollection,
    stockManager: ProductStockManager,
    treatmentPlans: any[],
    currentDate: Date
  ): Promise<void> {
    const availableStocks = stockManager.getAvailableStocks();
    const treatmentCount = Math.min(config.treatmentPerDay, Math.floor(availableStocks.length / 2));

    if (treatmentCount === 0) return;

    // 加工実績を一括作成
    const achievementPromises = [];
    for (let i = 0; i < treatmentCount; i++) {
      const employee = masterData.getRandomEmployee();
      achievementPromises.push(
        this.dataSource.createTreatmentAchievement(
          employee.Id,
          faker.date.between({ from: currentDate, to: addDays(currentDate, 1) })
        )
      );
    }
    const achievements = await Promise.all(achievementPromises);

    // データ準備
    const usedStockIds = [];
    const producedStockData = [];
    const planDetailData = [];
    const treatmentDetails = [];

    for (let i = 0; i < achievements.length && availableStocks.length > 0; i++) {
      const achievement = achievements[i];
      const detailCount = faker.number.int({
        min: config.detailItemsMin,
        max: Math.min(config.detailItemsMax, availableStocks.length)
      });

      for (let j = 0; j < detailCount && availableStocks.length > 0; j++) {
        const plan = faker.helpers.arrayElement(treatmentPlans);
        const usedStock = availableStocks.shift();
        
        if (!usedStock) break;

        usedStockIds.push(usedStock.Id);
        stockManager.markAsUsed(usedStock.Id);

        // 生産される製品在庫データを準備
        const producedProduct = masterData.getRandomProduct();
        const warehouse = masterData.getRandomWarehouse();
        producedStockData.push({
          ProductId: producedProduct.Id,
          WarehouseId: warehouse.Id,
          Used: 0
        });

        // 加工計画詳細データを準備
        planDetailData.push({
          TreatmentPlanId: plan.Id,
          ProductStockId: usedStock.Id,
          Quantity: 1
        });

        treatmentDetails.push({
          achievementId: achievement.Id,
          usedStockId: usedStock.Id
        });
      }
    }

    // 並列で一括処理実行
    const [, createdProducedStocks, createdPlanDetails] = await Promise.all([
      // 使用済み在庫の更新
      this.dataSource.bulkUpdateProductStockUsage(usedStockIds, 1),
      // 生産される製品在庫を作成
      this.dataSource.bulkCreateProductStocks(producedStockData),
      // 加工計画詳細を作成
      this.dataSource.bulkCreateTreatmentPlanDetails(planDetailData)
    ]);

    // 作成された在庫をstockManagerに追加
    for (const stock of createdProducedStocks) {
      stockManager.addStock(stock);
    }

    // 加工実績詳細データを準備
    const achievementDetailsData = [];
    for (let i = 0; i < treatmentDetails.length; i++) {
      achievementDetailsData.push({
        TreatmentAchievementId: treatmentDetails[i].achievementId,
        TreatmentPlanDetailId: createdPlanDetails[i].Id,
        UsedProductStockId: treatmentDetails[i].usedStockId,
        ProducedProductStockId: createdProducedStocks[i].Id
      });
    }

    // 加工実績詳細を一括作成
    await this.dataSource.bulkCreateTreatmentAchievementDetails(achievementDetailsData);
  }

  private async generateShipmentData(
    config: DataGenerationConfig,
    masterData: MasterDataCollection,
    stockManager: ProductStockManager,
    shipmentPlans: any[],
    currentDate: Date
  ): Promise<void> {
    const availableStocks = stockManager.getAvailableStocks();
    const shipmentCount = Math.min(config.shipmentPerDay, availableStocks.length);

    if (shipmentCount === 0 || availableStocks.length === 0) return;

    // 出荷実績を一括作成
    const achievementPromises = [];
    for (let i = 0; i < shipmentCount; i++) {
      const employee = masterData.getRandomEmployee();
      achievementPromises.push(
        this.dataSource.createShipmentAchievement(
          employee.Id,
          faker.date.between({ from: currentDate, to: addDays(currentDate, 1) })
        )
      );
    }
    const achievements = await Promise.all(achievementPromises);

    // データ準備
    const shipmentStockIds = [];
    const planDetailData = [];
    const shipmentDetails = [];

    for (let i = 0; i < achievements.length && availableStocks.length > 0; i++) {
      const achievement = achievements[i];
      const detailCount = faker.number.int({
        min: config.detailItemsMin,
        max: Math.min(config.detailItemsMax, availableStocks.length)
      });

      for (let j = 0; j < detailCount && availableStocks.length > 0; j++) {
        const plan = faker.helpers.arrayElement(shipmentPlans);
        const stock = availableStocks.shift();
        
        if (!stock) break;

        shipmentStockIds.push(stock.Id);
        stockManager.markAsUsed(stock.Id);

        // 出荷計画詳細データを準備
        planDetailData.push({
          ShipmentPlanId: plan.Id,
          ProductId: stock.ProductId,
          Quantity: 1
        });

        shipmentDetails.push({
          achievementId: achievement.Id,
          stockId: stock.Id
        });
      }
    }

    // 並列で一括処理実行
    const [, createdPlanDetails] = await Promise.all([
      // 出荷済み在庫の更新
      this.dataSource.bulkUpdateProductStockUsage(shipmentStockIds, 1),
      // 出荷計画詳細を作成
      this.dataSource.bulkCreateShipmentPlanDetails(planDetailData)
    ]);

    // 出荷実績詳細データを準備
    const achievementDetailsData = [];
    for (let i = 0; i < shipmentDetails.length; i++) {
      achievementDetailsData.push({
        ShipmentAchievementId: shipmentDetails[i].achievementId,
        ProductStockId: shipmentDetails[i].stockId,
        ShipmentPlanDetailId: createdPlanDetails[i].Id
      });
    }

    // 出荷実績詳細を一括作成
    await this.dataSource.bulkCreateShipmentAchievementDetails(achievementDetailsData);
  }
}
