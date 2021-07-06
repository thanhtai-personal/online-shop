const BaseController = require('./../base.controller ')
const ProductService = require('./../../../applicationServices/product/product.service')

class ProductController extends BaseController {
  constructor(productService) {
    super()
    this._productService = productService || ProductService
  }
}

module.exports = ProductController