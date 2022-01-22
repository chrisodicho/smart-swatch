export interface Options {
  debug?: boolean;
}

export enum Loggers {
  APP = 'app',
}

export enum LogLevel {
  TRACE = 'trace',
  DEBUG = 'debug',
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
  FATAL = 'fatal',
}

export interface PaletteObject {
  [key: string]: string;
}
