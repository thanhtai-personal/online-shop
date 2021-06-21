const dotenv = require('dotenv')

dotenv.config();

module.exports =  {
  database_url: process.env.DATABASE_URL,
  jwtKey: process.env.JWT_KEY,
  saltPrefix: process.env.SALT_PREFIX,
  database: process.env.DATABASE,
  username: process.env.USER,
  password: process.env.PASSWORD,
}