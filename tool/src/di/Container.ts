import { PrismaClient } from '../generated/prisma/client.js';

// Domain
import { ConfigurationUseCase } from '../domain/use-cases/ConfigurationUseCase.ts';
import { GenerateTestDataUseCase } from '../domain/use-cases/GenerateTestDataUseCase.ts';

// Infrastructure
import { PrismaDataSource } from '../infrastructure/data-sources/PrismaDataSource.ts';
import { TestDataRepository } from '../infrastructure/repositories/TestDataRepository.ts';

// Presentation
import { InquirerUserInteraction } from '../presentation/cli/InquirerUserInteraction.ts';
import { ConsoleProgressReporter } from '../presentation/cli/ConsoleProgressReporter.ts';
import { DataGenerationController, DataGenerationConfigurationProvider } from '../presentation/controllers/DataGenerationController.ts';

export class DIContainer {
  private static instance: DIContainer;
  private _prismaClient: PrismaClient | null = null;

  static getInstance(): DIContainer {
    if (!DIContainer.instance) {
      DIContainer.instance = new DIContainer();
    }
    return DIContainer.instance;
  }

  private constructor() {}

  // Prisma Client (Singleton)
  get prismaClient(): PrismaClient {
    if (!this._prismaClient) {
      this._prismaClient = new PrismaClient();
    }
    return this._prismaClient;
  }

  // Data Source
  get prismaDataSource(): PrismaDataSource {
    return new PrismaDataSource(this.prismaClient);
  }

  // Repository
  get testDataRepository(): TestDataRepository {
    return new TestDataRepository(this.prismaDataSource, this.progressReporter);
  }

  // User Interaction Service
  get userInteractionService(): InquirerUserInteraction {
    return new InquirerUserInteraction();
  }

  // Progress Reporter
  get progressReporter(): ConsoleProgressReporter {
    return new ConsoleProgressReporter();
  }

  // Use Cases
  get configurationUseCase(): ConfigurationUseCase {
    return new ConfigurationUseCase(this.userInteractionService);
  }

  get generateTestDataUseCase(): GenerateTestDataUseCase {
    const configProvider = new DataGenerationConfigurationProvider(this.configurationUseCase);
    return new GenerateTestDataUseCase(
      this.testDataRepository,
      configProvider,
      this.progressReporter
    );
  }

  // Controller
  get dataGenerationController(): DataGenerationController {
    return new DataGenerationController(this.generateTestDataUseCase);
  }

  // Cleanup
  async cleanup(): Promise<void> {
    if (this._prismaClient) {
      await this._prismaClient.$disconnect();
      this._prismaClient = null;
    }
  }
}
