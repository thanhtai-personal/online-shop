const BaseController = require('./../base.controller')
const ProductService = require('./../../../applicationServices/product/product.service')

class ProductController extends BaseController {
  constructor(productService) {
    super()
    this._productService = productService || new ProductService()
  }

  addOrEdit = async (req, res) => {
    const dataReq = req.body
    let reponse = await this._productService.addOrEdit({...dataReq, authData: req.authData})
    res.status(200).send(reponse)
  }

  addOrEditCategory = async (req, res) => {
    const dataReq = req.body
    let reponse = await this._productService.addOrEditCategory({...dataReq, authData: req.authData})
    res.status(200).send(reponse)
  }

  addOrEditOrder = async (req, res) => {
    const dataReq = req.body
    let reponse = await this._productService.addOrEditOrder({...dataReq, authData: req.authData})
    res.status(200).send(reponse)
  }

  searchProducts = async (req, res) => {
    const dataReq = req.body
    let reponse = await this._productService.searchProducts({...dataReq, authData: req.authData})
    res.status(200).send(reponse)
  }

  getCategory = async (req, res) => {
    const dataReq = req.body
    let reponse = await this._productService.getCategory({...dataReq, authData: req.authData})
    res.status(200).send(reponse)
  }

  searchOrders = async (req, res) => {
    const dataReq = req.body
    let reponse = await this._productService.searchOrders({...dataReq, authData: req.authData})
    res.status(200).send(reponse)
  }

  searchOrdersByUser = async (req, res) => {
    const dataReq = req.body
    let reponse = await this._productService.searchOrdersByUser({...dataReq, authData: req.authData})
    res.status(200).send(reponse)
  }
}

module.exports = ProductController