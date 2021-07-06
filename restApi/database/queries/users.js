
/**
 * Create User Table
 */
const createUserTable = async (pool, isEnd = false) => {
  console.log('createUserTable start')
  const userCreateQuery = `CREATE TABLE IF NOT EXISTS "user"
  (
      id uuid NOT NULL,
      name text COLLATE pg_catalog."default",
      email text COLLATE pg_catalog."default",
      "userName" text COLLATE pg_catalog."default",
      password text COLLATE pg_catalog."default",
      role uuid,
      socialId text COLLATE pg_catalog."default",
      "createdAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
      "createdBy" uuid,
      "updatedBy" uuid,
      "isActive" boolean DEFAULT true,
      CONSTRAINT user_pkey PRIMARY KEY (id)
  )`
  try {
    await pool.query(userCreateQuery)
    console.log('querry success')
    isEnd && pool.end()
  } catch (error) {
    console.log('query error', error)
    isEnd && pool.end()
  }
}

/**
 * Drop User Table
 */
const dropUserTable = async (pool, isEnd = false) => {
  console.log('dropUserTable start')
  const userDropQuery = `DROP TABLE IF EXISTS "user"`
  try {
    await pool.query(userDropQuery)
    console.log('querry success')
    isEnd && pool.end()
  } catch (error) {
    console.log('query error', error)
    isEnd && pool.end()
  }
}

module.exports = {
  create: createUserTable,
  drop: dropUserTable
}