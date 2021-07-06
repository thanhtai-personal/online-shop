
/**
 * Create Order Table
 */
 const createOrderTable = async (pool, isEnd = false) => {
  console.log('createOrderTable start')
  const orderCreateQuery = `CREATE TABLE IF NOT EXISTS "order"
  (
      id uuid NOT NULL,
      status text COLLATE pg_catalog."default",
      "createdAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
      "createdBy" uuid,
      "updatedBy" uuid,
      "isActive" boolean DEFAULT true,
      CONSTRAINT order_pkey PRIMARY KEY (id)
  )`
  try {
    await pool.query(orderCreateQuery)
    console.log('querry success')
    isEnd && pool.end()
  } catch (error) {
    console.log('query error', error)
    isEnd && pool.end()
  }
}

/**
 * Drop Order Table
 */
const dropOrderTable = async (pool, isEnd = false) => {
  console.log('dropOrderTable start')
  const orderDropQuery = `DROP TABLE IF EXISTS "order"`
  try {
    await pool.query(orderDropQuery)
    console.log('querry success')
    isEnd && pool.end()
  } catch (error) {
    console.log('query error', error)
    isEnd && pool.end()
  }
}

module.exports = {
  create: createOrderTable,
  drop: dropOrderTable
}