const pool = require('./dev/pool')
const migrate = require('./migrate')
const queriesManager = require('./queries')
const queries = queriesManager.queries

if (!pool) console.log('No pool!!!')

pool.on('connect', () => {
  console.log('connected to the db')
})

/**
 * Create All Tables
 */
module.exports = {
  createAllTables: async () => {
    queries.forEach((query, index) => {
      await query.create(pool, index === queries.length - 1)
    })
  },

  /**
   * Drop All Tables
   */
  dropAllTables: async () => {
    queries.forEach((query, index) => {
      await query.drop(pool, index === queries.length - 1)
    })
  },

  /**
   * migrate
   */
  migrateData: async () => {
    await migrate.execute(pool)
  }
}
pool.on('remove', () => {
  console.log('client removed')
  process.exit(0)
})

require('make-runnable')