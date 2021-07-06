
/**
 * Create Role Table
 */
 const createRoleTable = async (pool, isEnd = false) => {
  console.log('createRoleTable start')
  const roleCreateQuery = `CREATE TABLE IF NOT EXISTS "role"
  (
      id uuid NOT NULL,
      name text COLLATE pg_catalog."default",
      "createdAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
      "createdBy" uuid,
      "updatedBy" uuid,
      "isActive" boolean DEFAULT true,
      CONSTRAINT role_pkey PRIMARY KEY (id)
  )`
  try {
    await pool.query(roleCreateQuery)
    console.log('querry success')
    isEnd && pool.end()
  } catch (error) {
    console.log('query error', error)
    isEnd && pool.end()
  }
}

/**
 * Drop Role Table
 */
const dropRoleTable = async (pool, isEnd = false) => {
  console.log('dropRoleTable start')
  const roleDropQuery = `DROP TABLE IF EXISTS "role"`
  try {
    await pool.query(roleDropQuery)
    console.log('querry success')
    isEnd && pool.end()
  } catch (error) {
    console.log('query error', error)
    isEnd && pool.end()
  }
}

module.exports = {
  create: createRoleTable,
  drop: dropRoleTable
}