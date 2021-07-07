const useAuthen = require('./authenApi')
const useGZip = require('./gzip')
const useCache = require('./cache')
const useCors = require('./cors')
const useErrorCatcher = require('./errorCatcher')
module.exports = [
  useCors,
  useGZip,
  useCache,
  useAuthen,
  useErrorCatcher
]