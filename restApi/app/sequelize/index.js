const dbConfig = require('./../../env')
const { Sequelize } = require('sequelize')

const sequelize = dbConfig.database_url ? new Sequelize(dbConfig.database_url)
 : new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }}
)

module.exports = {
  testConnect: async () => {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  },
  sequelize
}