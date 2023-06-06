const express = require('express')
const initRoutes = require('./api')
const config = require('./config')
const loaders = require('./loaders')
const { logger } = require('./logger')
const { handler } = require('./api/middlewares/ErrorHandler')

const server = async () => {
  const app = express()

  loaders({ expressApp: app })
  initRoutes({ expressApp: app })

  // eslint-disable-next-line no-unused-vars
  app.use(async (err, req, res, next) => {
    await handler.handleError(err, res) //The error handler will send a response
  })

  process.on('uncaughtException', (error) => {
    handler.handleError(error)
  })

  process.on('unhandledRejection', (reason) => {
    handler.handleError(reason)
  })
  app.listen(config.PORT, () => {
    logger.info(`Server started at http://localhost:${config.PORT}`)
  })
}

server()
