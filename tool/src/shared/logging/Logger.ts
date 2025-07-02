export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3
}

export interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: Date;
  context?: Record<string, any>;
  error?: Error;
}

export interface Logger {
  debug(message: string, context?: Record<string, any>): void;
  info(message: string, context?: Record<string, any>): void;
  warn(message: string, context?: Record<string, any>): void;
  error(message: string, error?: Error, context?: Record<string, any>): void;
}

export class ConsoleLogger implements Logger {
  private minLevel: LogLevel;

  constructor(minLevel: LogLevel = LogLevel.INFO) {
    this.minLevel = minLevel;
  }

  debug(message: string, context?: Record<string, any>): void {
    this.log(LogLevel.DEBUG, message, context);
  }

  info(message: string, context?: Record<string, any>): void {
    this.log(LogLevel.INFO, message, context);
  }

  warn(message: string, context?: Record<string, any>): void {
    this.log(LogLevel.WARN, message, context);
  }

  error(message: string, error?: Error, context?: Record<string, any>): void {
    const logContext = { ...context };
    if (error) {
      logContext.error = {
        name: error.name,
        message: error.message,
        stack: error.stack
      };
    }
    this.log(LogLevel.ERROR, message, logContext);
  }

  private log(level: LogLevel, message: string, context?: Record<string, any>): void {
    if (level < this.minLevel) {
      return;
    }

    const entry: LogEntry = {
      level,
      message,
      timestamp: new Date(),
      context
    };

    const levelName = LogLevel[level];
    const timestamp = entry.timestamp.toISOString();
    const prefix = this.getPrefix(level);

    let logMessage = `${prefix} [${timestamp}] ${levelName}: ${message}`;

    if (context && Object.keys(context).length > 0) {
      logMessage += `\n  Context: ${JSON.stringify(context, null, 2)}`;
    }

    switch (level) {
      case LogLevel.DEBUG:
      case LogLevel.INFO:
        console.log(logMessage);
        break;
      case LogLevel.WARN:
        console.warn(logMessage);
        break;
      case LogLevel.ERROR:
        console.error(logMessage);
        break;
    }
  }

  private getPrefix(level: LogLevel): string {
    switch (level) {
      case LogLevel.DEBUG:
        return '🐛';
      case LogLevel.INFO:
        return '📝';
      case LogLevel.WARN:
        return '⚠️';
      case LogLevel.ERROR:
        return '❌';
      default:
        return '📝';
    }
  }
}
