
/**
 * Create Category Table
 */
 const createCategoryTable = async (pool, isEnd = false) => {
  console.log('createCategoryTable start')
  const categoryCreateQuery = `CREATE TABLE IF NOT EXISTS "category"
  (
      id uuid NOT NULL,
      name text COLLATE pg_catalog."default",
      key text COLLATE pg_catalog."default",
      "createdAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
      "createdBy" uuid,
      "updatedBy" uuid,
      "isActive" boolean DEFAULT true,
      CONSTRAINT category_pkey PRIMARY KEY (id)
  )`
  try {
    await pool.query(categoryCreateQuery)
    console.log('querry success')
    isEnd && pool.end()
  } catch (error) {
    console.log('query error', error)
    isEnd && pool.end()
  }
}

/**
 * Drop Category Table
 */
const dropCategoryTable = async (pool, isEnd = false) => {
  console.log('dropCategoryTable start')
  const categoryDropQuery = `DROP TABLE IF EXISTS "category"`
  try {
    await pool.query(categoryDropQuery)
    console.log('querry success')
    isEnd && pool.end()
  } catch (error) {
    console.log('query error', error)
    isEnd && pool.end()
  }
}

module.exports = {
  create: createCategoryTable,
  drop: dropCategoryTable
}