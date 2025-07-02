import { PrismaClient } from '../../generated/prisma/client.js';
import type { Employee, Customer, Warehouse, Product, ProductStock } from '../../generated/prisma/client.js';

export class PrismaDataSource {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async connect(): Promise<void> {
    await this.prisma.$connect();
  }

  async disconnect(): Promise<void> {
    await this.prisma.$disconnect();
  }

  // Master Data Operations
  async createEmployee(name: string): Promise<Employee> {
    return this.prisma.employee.create({
      data: { Name: name }
    });
  }

  async createCustomer(name: string, address: string, email: string): Promise<Customer> {
    return this.prisma.customer.create({
      data: { Name: name, Address: address, Email: email }
    });
  }

  async createWarehouse(name: string): Promise<Warehouse> {
    return this.prisma.warehouse.create({
      data: { Name: name }
    });
  }

  async createProduct(name: string): Promise<Product> {
    return this.prisma.product.create({
      data: { Name: name }
    });
  }

  // ProductStock Operations
  async createProductStock(productId: number, warehouseId: number, used: number = 0): Promise<ProductStock> {
    return this.prisma.productStock.create({
      data: {
        ProductId: productId,
        WarehouseId: warehouseId,
        Used: used
      }
    });
  }

  async updateProductStockUsage(stockId: number, used: number): Promise<ProductStock> {
    return this.prisma.productStock.update({
      where: { Id: stockId },
      data: { Used: used }
    });
  }

  // Receiving Achievement Operations
  async createReceivingAchievement(employeeId: number, receivedAt: Date) {
    return this.prisma.receivingAchievement.create({
      data: {
        EmployeeId: employeeId,
        ReceivedAt: receivedAt
      }
    });
  }

  async createReceivingAchievementDetail(receivingAchievementId: number, productStockId: number) {
    return this.prisma.receivingAchievementDetail.create({
      data: {
        ReceivingAchievementId: receivingAchievementId,
        ProductStockId: productStockId
      }
    });
  }

  // Treatment Operations
  async createTreatmentPlan() {
    return this.prisma.treatmentPlan.create({ data: {} });
  }

  async createTreatmentPlanDetail(treatmentPlanId: number, productStockId: number, quantity: number) {
    return this.prisma.treatmentPlanDetail.create({
      data: {
        TreatmentPlanId: treatmentPlanId,
        ProductStockId: productStockId,
        Quantity: quantity
      }
    });
  }

  async createTreatmentAchievement(employeeId: number, treatedAt: Date) {
    return this.prisma.treatmentAchievement.create({
      data: {
        EmployeeId: employeeId,
        TreatedAt: treatedAt
      }
    });
  }

  async createTreatmentAchievementDetail(
    treatmentAchievementId: number,
    treatmentPlanDetailId: number,
    usedProductStockId: number,
    producedProductStockId: number
  ) {
    return this.prisma.treatmentAchievementDetail.create({
      data: {
        TreatmentAchievementId: treatmentAchievementId,
        TreatmentPlanDetailId: treatmentPlanDetailId,
        UsedProductStockId: usedProductStockId,
        ProducedProductStockId: producedProductStockId
      }
    });
  }

  // Shipment Operations
  async createShipmentPlan(customerId: number) {
    return this.prisma.shipmentPlan.create({
      data: { CustomerId: customerId }
    });
  }

  async createShipmentPlanDetail(shipmentPlanId: number, productId: number, quantity: number) {
    return this.prisma.shipmentPlanDetail.create({
      data: {
        ShipmentPlanId: shipmentPlanId,
        ProductId: productId,
        Quantity: quantity
      }
    });
  }

  async createShipmentAchievement(employeeId: number, shippedAt: Date) {
    return this.prisma.shipmentAchievement.create({
      data: {
        EmployeeId: employeeId,
        ShippedAt: shippedAt
      }
    });
  }

  async createShipmentAchievementDetail(
    shipmentAchievementId: number,
    productStockId: number,
    shipmentPlanDetailId: number
  ) {
    return this.prisma.shipmentAchievementDetail.create({
      data: {
        ShipmentAchievementId: shipmentAchievementId,
        ProductStockId: productStockId,
        ShipmentPlanDetailId: shipmentPlanDetailId
      }
    });
  }

  // Bulk Insert Operations
  async bulkCreateProductStocks(data: Array<{ProductId: number, WarehouseId: number, Used: number}>): Promise<ProductStock[]> {
    // createManyAndReturnがサポートされていない場合は、Promise.allで並列作成
    const promises = data.map(item => 
      this.prisma.productStock.create({
        data: item
      })
    );
    const result = await Promise.all(promises);
    return result;
  }

  async bulkCreateReceivingAchievementDetails(data: Array<{ReceivingAchievementId: number, ProductStockId: number}>) {
    const BATCH_SIZE = 1000; // SQL Serverの2100パラメータ制限を考慮
    const results = [];
    
    for (let i = 0; i < data.length; i += BATCH_SIZE) {
      const batch = data.slice(i, i + BATCH_SIZE);
      const result = await this.prisma.receivingAchievementDetail.createMany({
        data: batch
      });
      results.push(result);
    }
    
    return results;
  }

  async bulkCreateTreatmentPlanDetails(data: Array<{TreatmentPlanId: number, ProductStockId: number, Quantity: number}>) {
    // createManyAndReturnがサポートされていない場合は、Promise.allで並列作成
    const promises = data.map(item => 
      this.prisma.treatmentPlanDetail.create({
        data: item
      })
    );
    const result = await Promise.all(promises);
    return result;
  }

  async bulkCreateTreatmentAchievementDetails(data: Array<{TreatmentAchievementId: number, TreatmentPlanDetailId: number, UsedProductStockId: number, ProducedProductStockId: number}>) {
    const BATCH_SIZE = 500; // 4フィールド×500件=2000パラメータ（2100制限内）
    const results = [];
    
    for (let i = 0; i < data.length; i += BATCH_SIZE) {
      const batch = data.slice(i, i + BATCH_SIZE);
      const result = await this.prisma.treatmentAchievementDetail.createMany({
        data: batch
      });
      results.push(result);
    }
    
    return results;
  }

  async bulkCreateShipmentPlanDetails(data: Array<{ShipmentPlanId: number, ProductId: number, Quantity: number}>) {
    // createManyAndReturnがサポートされていない場合は、Promise.allで並列作成
    const promises = data.map(item => 
      this.prisma.shipmentPlanDetail.create({
        data: item
      })
    );
    const result = await Promise.all(promises);
    return result;
  }

  async bulkCreateShipmentAchievementDetails(data: Array<{ShipmentAchievementId: number, ProductStockId: number, ShipmentPlanDetailId: number}>) {
    const BATCH_SIZE = 700; // 3フィールド×700件=2100パラメータ（制限ぎりぎり）
    const results = [];
    
    for (let i = 0; i < data.length; i += BATCH_SIZE) {
      const batch = data.slice(i, i + BATCH_SIZE);
      const result = await this.prisma.shipmentAchievementDetail.createMany({
        data: batch
      });
      results.push(result);
    }
    
    return results;
  }

  async bulkUpdateProductStockUsage(stockIds: number[], used: number) {
    const BATCH_SIZE = 1000; // SQL Serverの2100パラメータ制限を考慮
    const results = [];
    
    for (let i = 0; i < stockIds.length; i += BATCH_SIZE) {
      const batch = stockIds.slice(i, i + BATCH_SIZE);
      const result = await this.prisma.productStock.updateMany({
        where: {
          Id: {
            in: batch
          }
        },
        data: {
          Used: used
        }
      });
      results.push(result);
    }
    
    return results;
  }

  // Clear Data Operations
  async clearAllData(): Promise<void> {
    await this.prisma.shipmentAchievementDetail.deleteMany();
    await this.prisma.shipmentAchievement.deleteMany();
    await this.prisma.shipmentPlanDetail.deleteMany();
    await this.prisma.shipmentPlan.deleteMany();

    await this.prisma.treatmentAchievementDetail.deleteMany();
    await this.prisma.treatmentAchievement.deleteMany();
    await this.prisma.treatmentPlanDetail.deleteMany();
    await this.prisma.treatmentPlan.deleteMany();

    await this.prisma.receivingAchievementDetail.deleteMany();
    await this.prisma.receivingAchievement.deleteMany();

    await this.prisma.productStock.deleteMany();
    await this.prisma.product.deleteMany();
    await this.prisma.warehouse.deleteMany();
    await this.prisma.customer.deleteMany();
    await this.prisma.employee.deleteMany();
  }
}
