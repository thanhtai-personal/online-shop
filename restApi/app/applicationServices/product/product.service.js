const BaseService = require('../base.service')
const ProductRepo = require('./../../repositories/product/services/product.service')
const CategoryService = require('./../../repositories/product/services/category.service')
const OrderService = require('./../../repositories/product/services/order.service')
const ProductCategoryService = require('./../../repositories/product/services/productCategory.service')
const OrderProductService = require('./../../repositories/product/services/orderProduct.service')
const ImageService = require('./../../repositories/product/services/image.service')

class ProductService extends BaseService {
  constructor (
    roleService,
    userService,
    productService,
    categoryService,
    orderService,
    productCategoryService,
    orderProductService,
    imageService
  ) {
    super(userService, roleService)
    this._productService = productService || ProductRepo
    this._categoryService = categoryService || CategoryService
    this._orderService = orderService || OrderService
    this._productCategoryService = productCategoryService || ProductCategoryService
    this._orderProductService = orderProductService || OrderProductService
    this._imageService = imageService || ImageService
  }
}

module.exports = ProductService;