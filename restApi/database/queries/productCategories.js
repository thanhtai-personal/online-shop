
/**
 * Create ProductCategory Table
 */
 const createProductCategoryTable = async (pool, isEnd = false) => {
  console.log('createProductCategoryTable start')
  const productCategoryCreateQuery = `CREATE TABLE IF NOT EXISTS "product_category"
  (
      id uuid NOT NULL,
      "productId" uuid,
      "categoryId" uuid,
      "createdAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
      "createdBy" uuid,
      "updatedBy" uuid,
      "isActive" boolean DEFAULT true,
      CONSTRAINT product_category_pkey PRIMARY KEY (id)
  )`
  try {
    await pool.query(productCategoryCreateQuery)
    console.log('querry success')
    isEnd && pool.end()
  } catch (error) {
    console.log('query error', error)
    isEnd && pool.end()
  }
}

/**
 * Drop ProductCategory Table
 */
const dropProductCategoryTable = async (pool, isEnd = false) => {
  console.log('dropProductCategoryTable start')
  const productCategoryDropQuery = `DROP TABLE IF EXISTS "product_category"`
  try {
    await pool.query(productCategoryDropQuery)
    console.log('querry success')
    isEnd && pool.end()
  } catch (error) {
    console.log('query error', error)
    isEnd && pool.end()
  }
}

module.exports = {
  create: createProductCategoryTable,
  drop: dropProductCategoryTable
}