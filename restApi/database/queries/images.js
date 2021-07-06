
/**
 * Create Image Table
 */
 const createImageTable = async (pool, isEnd = false) => {
  console.log('createImageTable start')
  const imageCreateQuery = `CREATE TABLE IF NOT EXISTS "image"
  (
      id uuid NOT NULL,
      "altName" text COLLATE pg_catalog."default",
      url text COLLATE pg_catalog."default",
      "productId" uuid,
      "createdAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
      "createdBy" uuid,
      "updatedBy" uuid,
      "isActive" boolean DEFAULT true,
      CONSTRAINT image_pkey PRIMARY KEY (id)
  )`
  try {
    await pool.query(imageCreateQuery)
    console.log('querry success')
    isEnd && pool.end()
  } catch (error) {
    console.log('query error', error)
    isEnd && pool.end()
  }
}

/**
 * Drop Image Table
 */
const dropImageTable = async (pool, isEnd = false) => {
  console.log('dropImageTable start')
  const imageDropQuery = `DROP TABLE IF EXISTS "image"`
  try {
    await pool.query(imageDropQuery)
    console.log('querry success')
    isEnd && pool.end()
  } catch (error) {
    console.log('query error', error)
    isEnd && pool.end()
  }
}

module.exports = {
  create: createImageTable,
  drop: dropImageTable
}