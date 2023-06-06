const { Configuration, OpenAIApi } = require('openai')
const config = require('../config')

const openAiLoader = async () => {
  const configuration = new Configuration({
    apiKey: config.OPENAI_API_KEY,
  })
  const openai = new OpenAIApi(configuration)
  // console.log(openai)
  return openai
}

module.exports = openAiLoader
