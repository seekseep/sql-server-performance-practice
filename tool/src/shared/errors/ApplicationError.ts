export abstract class ApplicationError extends Error {
  abstract readonly code: string;
  abstract readonly statusCode: number;

  constructor(
    message: string,
    public readonly context?: Record<string, any>
  ) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class ConfigurationError extends ApplicationError {
  readonly code = 'CONFIGURATION_ERROR';
  readonly statusCode = 400;

  constructor(message: string, context?: Record<string, any>) {
    super(`設定エラー: ${message}`, context);
  }
}

export class DatabaseError extends ApplicationError {
  readonly code = 'DATABASE_ERROR';
  readonly statusCode = 500;

  constructor(message: string, context?: Record<string, any>) {
    super(`データベースエラー: ${message}`, context);
  }
}

export class DataGenerationError extends ApplicationError {
  readonly code = 'DATA_GENERATION_ERROR';
  readonly statusCode = 500;

  constructor(message: string, context?: Record<string, any>) {
    super(`データ生成エラー: ${message}`, context);
  }
}

export class UserCancellationError extends ApplicationError {
  readonly code = 'USER_CANCELLATION';
  readonly statusCode = 200;

  constructor(message: string = 'ユーザーによってキャンセルされました') {
    super(message);
  }
}