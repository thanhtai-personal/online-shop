
/**
 * Create Product Table
 */
 const createProductTable = async (pool, isEnd = false) => {
  console.log('createProductTable start')
  const productCreateQuery = `CREATE TABLE IF NOT EXISTS "product"
  (
      id uuid NOT NULL,
      name text COLLATE pg_catalog."default",
      price bigint,
      "priceUnit" text COLLATE pg_catalog."default",
      quantity bigint,
      "createdAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
      "createdBy" uuid,
      "updatedBy" uuid,
      "isActive" boolean DEFAULT true,
      CONSTRAINT product_pkey PRIMARY KEY (id)
  )`
  try {
    await pool.query(productCreateQuery)
    console.log('querry success')
    isEnd && pool.end()
  } catch (error) {
    console.log('query error', error)
    isEnd && pool.end()
  }
}

/**
 * Drop Product Table
 */
const dropProductTable = async (pool, isEnd = false) => {
  console.log('dropProductTable start')
  const productDropQuery = `DROP TABLE IF EXISTS "product"`
  try {
    await pool.query(productDropQuery)
    console.log('querry success')
    isEnd && pool.end()
  } catch (error) {
    console.log('query error', error)
    isEnd && pool.end()
  }
}

module.exports = {
  create: createProductTable,
  drop: dropProductTable
}