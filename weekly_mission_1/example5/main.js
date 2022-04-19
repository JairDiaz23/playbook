const Logger = require('./logger')

Logger.log('This is an informational message')

  const customLogger = new Logger.constructor('CUSTOM')
  customLogger.log('This is an informational message')