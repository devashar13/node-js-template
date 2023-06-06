const { logger } = require('../../logger')

class errorHandler {
  constructor() {
    this.handleError = async (error) => {
      if (process.env.NODE_ENV === 'development') logger.error(error.stack)
      logger.error(error)
    }
  }
}
module.exports.handler = new errorHandler()
