
const createReferenceKey = async (pool, isEnd = false) => {
  console.log('createReferenceKey start')
  const userRole = `ALTER TABLE "user" ADD CONSTRAINT 
    fkey_user_role FOREIGN KEY ("role")
    REFERENCES "role" (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION`
  const productCategoryProduct = `ALTER TABLE "product_category" ADD CONSTRAINT 
    fkey_product_category_product FOREIGN KEY ("productId")
    REFERENCES "product" (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION`
  const productCategoryCategory = `ALTER TABLE "product_category" ADD CONSTRAINT 
    fkey_product_category_category FOREIGN KEY ("categoryId")
    REFERENCES "category" (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION`
  const orderProductProduct = `ALTER TABLE "order_product" ADD CONSTRAINT 
    fkey_order_product_product FOREIGN KEY ("productId")
    REFERENCES "product" (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION`
  const orderProductOrder = `ALTER TABLE "order_product" ADD CONSTRAINT 
    fkey_order_product_order FOREIGN KEY ("orderId")
    REFERENCES "order" (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION`
  const imageProduct = `ALTER TABLE "image" ADD CONSTRAINT 
    fkey_image_product FOREIGN KEY ("productId")
    REFERENCES "product" (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION`
  try {
    await pool.query(userRole)
    await pool.query(productCategoryProduct)
    await pool.query(productCategoryCategory)
    await pool.query(orderProductProduct)
    await pool.query(orderProductOrder)
    await pool.query(imageProduct)
    console.log('querry success')
    isEnd && pool.end()
  } catch (error) {
    console.log('query error', error)
    isEnd && pool.end()
  }
}

const dropReferenceKey = async (pool, isEnd = false) => {
  console.log('dropReferenceKey start')
  const user = `ALTER TABLE IF EXISTS "user"
    DROP CONSTRAINT IF EXISTS fkey_user_role`
  const productCategory = `ALTER TABLE IF EXISTS "product_category"
    DROP CONSTRAINT IF EXISTS fkey_product_category_product,
    DROP CONSTRAINT IF EXISTS fkey_product_category_category`
  const orderProduct = `ALTER TABLE IF EXISTS "order_product"
    DROP CONSTRAINT IF EXISTS fkey_order_product_product,
    DROP CONSTRAINT IF EXISTS fkey_order_product_order`
  const image = `ALTER TABLE IF EXISTS "image"
    DROP CONSTRAINT IF EXISTS fkey_image_product`
  try {
    await pool.query(user)
    await pool.query(productCategory)
    await pool.query(orderProduct)
    await pool.query(image)
    console.log('querry success')
    isEnd && pool.end()
  } catch (error) {
    console.log('query error', error)
    isEnd && pool.end()
  }
}

module.exports = {
  create: createReferenceKey,
  drop: dropReferenceKey
}