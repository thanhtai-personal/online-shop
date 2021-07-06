
/**
 * Create OrderProduct Table
 */
 const createOrderProductTable = async (pool, isEnd = false) => {
  console.log('createOrderProductTable start')
  const orderProductCreateQuery = `CREATE TABLE IF NOT EXISTS "order_product"
  (
      id uuid NOT NULL,
      "productId" uuid,
      "orderId" uuid,
      quantity bigint,
      "createdAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
      "createdBy" uuid,
      "updatedBy" uuid,
      "isActive" boolean DEFAULT true,
      CONSTRAINT orderProduct_pkey PRIMARY KEY (id)
  )`
  try {
    await pool.query(orderProductCreateQuery)
    console.log('querry success')
    isEnd && pool.end()
  } catch (error) {
    console.log('query error', error)
    isEnd && pool.end()
  }
}

/**
 * Drop OrderProduct Table
 */
const dropOrderProductTable = async (pool, isEnd = false) => {
  console.log('dropOrderProductTable start')
  const orderProductDropQuery = `DROP TABLE IF EXISTS "order_product"`
  try {
    await pool.query(orderProductDropQuery)
    console.log('querry success')
    isEnd && pool.end()
  } catch (error) {
    console.log('query error', error)
    isEnd && pool.end()
  }
}

module.exports = {
  create: createOrderProductTable,
  drop: dropOrderProductTable
}