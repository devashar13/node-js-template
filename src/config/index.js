require('dotenv').config()

const env = process.env
const config = {
  PORT: env.PORT,
  OPENAI_API_KEY: env.OPENAI_API_KEY,
  MONGO_USER: env.MONGO_USER,
  MONGO_PASS: env.MONGO_PASS,
  DB_URI: env.DB_URI,
}

module.exports = config
