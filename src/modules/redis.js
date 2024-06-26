const { createClient } = require('ioredis')
const { redisUrl } = require('../config/config')

const redis = createClient(redisUrl)
const redisSubscribe = createClient(redisUrl)

module.exports = {
  redis,
  redisSubscribe,
  redisUrl,
}
