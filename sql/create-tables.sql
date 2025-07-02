CREATE TABLE Employee (
  Id INT PRIMARY KEY IDENTITY(1,1),
  Name NVARCHAR(100) NOT NULL
);

CREATE TABLE Customer (
  Id INT PRIMARY KEY IDENTITY(1,1),
  Name NVARCHAR(100) NOT NULL,
  Address NVARCHAR(255) NOT NULL,
  Email NVARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE Warehouse (
  Id INT PRIMARY KEY IDENTITY(1,1),
  Name NVARCHAR(100) NOT NULL
);

CREATE TABLE Product (
  Id INT PRIMARY KEY IDENTITY(1,1),
  Name NVARCHAR(100) NOT NULL
);

CREATE TABLE ProductStock (
  Id INT PRIMARY KEY IDENTITY(1,1),
  ProductId INT NOT NULL,
  WarehouseId INT NOT NULL,
  Used TINYINT NOT NULL DEFAULT 0,
  FOREIGN KEY (ProductId) REFERENCES Product(Id),
  FOREIGN KEY (WarehouseId) REFERENCES Warehouse(Id)
);

CREATE TABLE ReceivingAchievement (
  Id INT PRIMARY KEY IDENTITY(1,1),
  ReceivedAt DATETIME NOT NULL DEFAULT GETDATE(),
  EmployeeId INT NOT NULL,
  FOREIGN KEY (EmployeeId) REFERENCES Employee(Id)
);

CREATE TABLE ReceivingAchievementDetail (
  Id INT PRIMARY KEY IDENTITY(1,1),
  ReceivingAchievementId INT NOT NULL,
  ProductStockId INT NOT NULL,
  FOREIGN KEY (ReceivingAchievementId) REFERENCES ReceivingAchievement(Id),
  FOREIGN KEY (ProductStockId) REFERENCES ProductStock(Id)
);

CREATE TABLE TreatmentPlan (
  Id INT PRIMARY KEY IDENTITY(1,1)
);

CREATE TABLE TreatmentPlanDetail (
  Id INT PRIMARY KEY IDENTITY(1,1),
  TreatmentPlanId INT NOT NULL,
  ProductStockId INT NOT NULL,
  Quantity INT NOT NULL,
  FOREIGN KEY (TreatmentPlanId) REFERENCES TreatmentPlan(Id),
  FOREIGN KEY (ProductStockId) REFERENCES ProductStock(Id)
);

CREATE TABLE TreatmentAchievement (
  Id INT PRIMARY KEY IDENTITY(1,1),
  TreatedAt DATETIME NOT NULL DEFAULT GETDATE(),
  EmployeeId INT NOT NULL,
  FOREIGN KEY (EmployeeId) REFERENCES Employee(Id)
);

CREATE TABLE TreatmentAchievementDetail (
  Id INT PRIMARY KEY IDENTITY(1,1),
  TreatmentAchievementId INT NOT NULL,
  TreatmentPlanDetailId INT NOT NULL,
  UsedProductStockId INT NOT NULL,
  ProducedProductStockId INT NOT NULL,
  FOREIGN KEY (TreatmentAchievementId) REFERENCES TreatmentAchievement(Id),
  FOREIGN KEY (TreatmentPlanDetailId) REFERENCES TreatmentPlanDetail(Id),
  FOREIGN KEY (UsedProductStockId) REFERENCES ProductStock(Id),
  FOREIGN KEY (ProducedProductStockId) REFERENCES ProductStock(Id)
);

CREATE TABLE ShipmentPlan (
  Id INT PRIMARY KEY IDENTITY(1,1),
  CustomerId INT NOT NULL,
  FOREIGN KEY (CustomerId) REFERENCES Customer(Id)
);

CREATE TABLE ShipmentPlanDetail (
  Id INT PRIMARY KEY IDENTITY(1,1),
  ShipmentPlanId INT NOT NULL,
  ProductId INT NOT NULL,
  Quantity INT NOT NULL,
  FOREIGN KEY (ShipmentPlanId) REFERENCES ShipmentPlan(Id),
  FOREIGN KEY (ProductId) REFERENCES Product(Id)
);

CREATE TABLE ShipmentAchievement (
  Id INT PRIMARY KEY IDENTITY(1,1),
  ShippedAt DATETIME NOT NULL DEFAULT GETDATE(),
  EmployeeId INT NOT NULL,
  FOREIGN KEY (EmployeeId) REFERENCES Employee(Id)
);

CREATE TABLE ShipmentAchievementDetail (
  Id INT PRIMARY KEY IDENTITY(1,1),
  ShipmentAchievementId INT NOT NULL,
  ProductStockId INT NOT NULL,
  ShipmentPlanDetailId INT NOT NULL,
  FOREIGN KEY (ShipmentAchievementId) REFERENCES ShipmentAchievement(Id),
  FOREIGN KEY (ProductStockId) REFERENCES ProductStock(Id),
  FOREIGN KEY (ShipmentPlanDetailId) REFERENCES ShipmentPlanDetail(Id)
);
