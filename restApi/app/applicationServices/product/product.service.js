const BaseService = require('../base.service')
const ProductRepoService = require('./../../repositories/product/services/product.service')
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
    this._productService = productService || ProductRepoService
    this._categoryService = categoryService || CategoryService
    this._orderService = orderService || OrderService
    this._productCategoryService = productCategoryService || ProductCategoryService
    this._orderProductService = orderProductService || OrderProductService
    this._imageService = imageService || ImageService
  }

  addOrEdit = async (dataReq) => {
    const { authData, images = [], ...nestedData} = dataReq
    const product = await this._productService.create({
      ...nestedData,
      createdBy: authData.user?.id,
      updatedBy: authData.user?.id,
      createdTime: new Date(),
      updatedTime: new Date(),
    })
    for (let image of images) {
      await this._imageService.create({
        productId: product.id,
        altName: image.name,
        url: image.src,
        createdBy: authData.user?.id,
        updatedBy: authData.user?.id,
        createdTime: new Date(),
        updatedTime: new Date(),
      })
    }
    return { product, images }
  }

  addOrEditCategory = async (dataReq) => {
    const { authData, ...nestedData } = dataReq
    return await this._categoryService.create({
      ...nestedData,
      createdBy: authData.user?.id,
      updatedBy: authData.user?.id,
      createdTime: new Date(),
      updatedTime: new Date(),
    })
  }

  addOrEditOrder = async (dataReq) => {
    const { authData, products, ...nestedData } = dataReq
    const order = await this._orderService.create({
      ...nestedData,
      createdBy: authData.user?.id,
      updatedBy: authData.user?.id,
      createdTime: new Date(),
      updatedTime: new Date(),
    })
    for (let product of products) {
      await this._orderProductService.create({
        productId: product.id,
        orderId: order.id,
        quantity: product.quantity,
        createdBy: authData.user?.id,
        updatedBy: authData.user?.id,
        createdTime: new Date(),
        updatedTime: new Date(),
      })
    }
    return order
  }

  searchProducts = async (dataReq) => {
    const { query, take, skip } = dataReq
    let products = []
    if (!query) {
      products = this._productService.findAll({
        raw: true,
        limit: take,
        offset: skip,
        where: {
          isActive: true
        }
      })
    } else {
      products = this._productService.findAll({
        raw: true,
        limit: take,
        offset: skip,
        where: {
          [Op.or]: [{
            name: {
              [Op.like]: `%${query}%`
            }
          }, {
            description: {
              [Op.like]: `%${query}%`
            }
          }],
          isActive: true
        }
      })
    }
    for (let idx in products) {
      products[idx].images = await this._imageService.findAll({
        raw: true,
        where: {
          isActive: true,
          productId: products[idx].id
        }
      })
    }
    return products
  }

  getCategory = async (dataReq) => {
    return await this._categoryService.findAll({
      raw: true,
      where: {
        isActive: true
      }
    })
  }

  searchOrders = async (dataReq) => {
    return await this._orderService.findAll({
      raw: true,
      where: {
        isActive: true
      }
    })
  }

  searchOrdersByUser = async (dataReq) => {
    return await this._orderService.findAll({
      raw: true,
      where: {
        isActive: true,
        createdBy: dataReq.authData.user.id
      }
    })
  }

  getRoles = async (dataReq) => {
    return await this._roleService.findAll({
      raw: true,
      where: {
        isActive: true,
      }
    })
  }

  getUsers = async (dataReq) => {
    return await this._userService.findAll({
      raw: true,
      where: {
        isActive: true,
      }
    })
  }
}

module.exports = ProductService;