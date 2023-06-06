const { mailRouter } = require('./routes')

const initRoutes = ({ expressApp }) => {
  expressApp.use('/api/mail', mailRouter)
}

module.exports = initRoutes
