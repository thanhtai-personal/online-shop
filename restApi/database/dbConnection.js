const pool = require('./dev/pool')
const migrate = require('./migrate')
const queriesManager = require('./queries')
const queries = queriesManager.queries
const referenceQueries = queriesManager.referenceQueries

if (!pool) console.log('No pool!!!')

pool.on('connect', () => {
  console.log('connected to the db')
})

/**
 * Create All Tables
 */
module.exports = {
  createAllTables: async () => {
    for (let query of queries) {
      await query.create(pool)
    }
    for (let queryIdx = 0; queryIdx < referenceQueries.length; queryIdx++) {
      await referenceQueries[queryIdx].create(pool, queryIdx === (referenceQueries.length - 1))
    }
  },

  /**
   * Drop All Tables
   */
  dropAllTables: async () => {
    for (let query of referenceQueries) {
      await query.drop(pool)
    }
    for (let queryIdx = 0; queryIdx < queries.length; queryIdx++) {
      await queries[queryIdx].drop(pool, queryIdx === (queries.length - 1))
    }
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