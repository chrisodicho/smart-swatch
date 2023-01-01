import { LogLevel, Options } from '@/types';
import winston from 'winston';

const transports = process.env.NODE_ENV === 'test' && !process.env.LOG_LEVEL ? [] : [new winston.transports.Console()];

function createWinstonLogger(service: string) {
  return winston.createLogger({
    format: winston.format.simple(),
    defaultMeta: { service },
    transports,
  });
}

export const logger = {
  app: createWinstonLogger('app'),
  enhancer: createWinstonLogger('enhancer'),
  scraper: createWinstonLogger('scraper'),
  utils: createWinstonLogger('utils'),
};

export function setupLogger(options: Options): void {
  const logLevel: LogLevel = options.debug ? LogLevel.DEBUG : LogLevel.INFO;

  setAllLogLevels(logLevel);
}

function setAllLogLevels(logLevel: LogLevel) {
  Object.values(logger).forEach((value: winston.Logger) => {
    value.level = logLevel;
  });
}
