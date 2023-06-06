const { logger } = require('../logger')
const expressLoader = require('./expressLoader')

const mongooseLoader = require('./mongooseLoader')

// const openAiLoader = require('./openAiLoader')

const loaders = async ({ expressApp }) => {
  await expressLoader({ app: expressApp })
  logger.info('Express Initialised.')
  await mongooseLoader()
  logger.info('MongoDB Initialised')
  // await openAiLoader()
  // logger.info('OpenAI API Initialised')
}

module.exports = loaders
