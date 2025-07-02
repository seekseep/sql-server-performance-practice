import type { Employee, Customer, Warehouse, Product, ProductStock, TreatmentPlan, ShipmentPlan } from '../../generated/prisma/client.js';

export interface MasterData {
  readonly employees: Employee[];
  readonly customers: Customer[];
  readonly warehouses: Warehouse[];
  readonly products: Product[];
}

export interface TransactionData {
  readonly productStocks: ProductStock[];
  readonly treatmentPlans: TreatmentPlan[];
  readonly shipmentPlans: ShipmentPlan[];
}

export class MasterDataCollection {
  public employees: Employee[]
  public customers: Customer[]
  public warehouses: Warehouse[]
  public products: Product[]

  constructor(
    employees: Employee[],
    customers: Customer[],
    warehouses: Warehouse[],
    products: Product[]
  ) {
    this.employees = employees;
    this.customers = customers;
    this.warehouses = warehouses;
    this.products = products;
  }

  getRandomEmployee(): Employee {
    const index = Math.floor(Math.random() * this.employees.length);
    const employee = this.employees[index];
    if (!employee) {
      throw new Error('No employees available');
    }
    return employee;
  }

  getRandomCustomer(): Customer {
    const index = Math.floor(Math.random() * this.customers.length);
    const customer = this.customers[index];
    if (!customer) {
      throw new Error('No customers available');
    }
    return customer;
  }

  getRandomWarehouse(): Warehouse {
    const index = Math.floor(Math.random() * this.warehouses.length);
    const warehouse = this.warehouses[index];
    if (!warehouse) {
      throw new Error('No warehouses available');
    }
    return warehouse;
  }

  getRandomProduct(): Product {
    const index = Math.floor(Math.random() * this.products.length);
    const product = this.products[index];
    if (!product) {
      throw new Error('No products available');
    }
    return product;
  }

  getTotalCount(): number {
    return this.employees.length + this.customers.length +
           this.warehouses.length + this.products.length;
  }
}

export class ProductStockManager {
  private stocks: ProductStock[] = [];

  addStock(stock: ProductStock): void {
    this.stocks.push(stock);
  }

  getAvailableStocks(): ProductStock[] {
    return this.stocks.filter(stock => stock.Used === 0);
  }

  getAllStocks(): ProductStock[] {
    return [...this.stocks];
  }

  markAsUsed(stockId: number): boolean {
    const stock = this.stocks.find(s => s.Id === stockId);
    if (stock && stock.Used === 0) {
      stock.Used = 1;
      return true;
    }
    return false;
  }

  getStockCount(): number {
    return this.stocks.length;
  }

  getAvailableStockCount(): number {
    return this.getAvailableStocks().length;
  }
}
