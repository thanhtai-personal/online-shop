const migrate0607 = require('./migrate0607')
module.exports =  {
  execute: async (pool) => {
    await migrate0607(pool, true)
  }
}