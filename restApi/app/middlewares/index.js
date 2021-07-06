const authenApi = require('./authenApi')
const gZip = require('./gzip')
const cacheMiddleware = require('./cache')
const cors = require('./cors')
module.exports = [
  cors,
  gZip,
  cacheMiddleware,
  authenApi
]