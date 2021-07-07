module.exports = async (pool, isEnd = false) => {
  console.log('migrate 06-07-2021 start')
  const addProductColumns = `ALTER TABLE "product" 
  ADD COLUMN IF NOT EXISTS "description" text,
  ADD COLUMN IF NOT EXISTS "htmlDes" text,
  ADD COLUMN IF NOT EXISTS "markdownDes" text;
  `
  const insertRoles = `INSERT INTO "role"(id, name) VALUES 
  ('00ca3cae-97b1-11eb-a8b3-0242ac130003', 'superadmin'),
  ('65b68b6b-8c50-48d7-84fd-11998eae02b6', 'client')
  ON CONFLICT DO NOTHING;
  `
  const insertAdminUser = `INSERT INTO "user"
  (id, name, "userName", password, role) VALUES 
  ('faf8723f-bc1d-45b1-817d-9f373c9ca1da', 'root', 'superadmin', 'Hp+9;aeg*=ux;]y', '00ca3cae-97b1-11eb-a8b3-0242ac130003') 
  ON CONFLICT DO NOTHING;
  `

  try {
    await pool.query(addProductColumns)
    await pool.query(insertRoles)
    await pool.query(insertAdminUser)
    console.log('querry success')
    isEnd && pool.end()
  } catch (error) {
    console.log('query error', error)
    isEnd && pool.end()
  }
}