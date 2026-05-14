const isProd = import.meta.env.PROD

export const logger = {
  info: (...args: unknown[]) => !isProd && console.info(...args),
  warn: (...args: unknown[]) => !isProd && console.warn(...args),
  error: (...args: unknown[]) => console.error(...args),
}
