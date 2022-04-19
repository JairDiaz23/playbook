const Logger = require('./logger')

const dbLogger = new Logger('DB')
dbLogger.info('This is an informational message')

const accessLogger = new Logger('access')
accessLogger.verbose('This is a verbose message')