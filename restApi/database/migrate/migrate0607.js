module.exports = async (pool, isEnd = false) => {
  console.log('migrate 06-07-2021 start')
  const addProductColumns = `ALTER TABLE "product" 
  ADD COLUMN IF NOT EXISTS "description" text,
  ADD COLUMN IF NOT EXISTS "htmlDes" text,
  ADD COLUMN IF NOT EXISTS "markdownDes" text
  `

  try {
    await pool.query(addProductColumns)
    console.log('querry success')
    isEnd && pool.end()
  } catch (error) {
    console.log('query error', error)
    isEnd && pool.end()
  }
}