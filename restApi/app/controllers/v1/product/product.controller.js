const BaseController = require('./../base.controller')
const ProductService = require('./../../../applicationServices/product/product.service')

class ProductController extends BaseController {
  constructor(productService) {
    super()
    this._productService = productService || new ProductService()
  }

  addOrEdit = async (req, res) => {
    try {
      const dataReq = req.body
      let reponse = await this._productService.addOrEdit({ ...dataReq, authData: req.authData })
      res.status(200).send(reponse)
    } catch (error) {
      res.status(500).send(error)
    }
  }

  addOrEditCategory = async (req, res) => {
    try {
      const dataReq = req.body
      let reponse = await this._productService.addOrEditCategory({ ...dataReq, authData: req.authData })
      res.status(200).send(reponse)
    } catch (error) {
      res.status(500).send(error)
    }
  }

  addOrEditOrder = async (req, res) => {
    try {
      const dataReq = req.body
      let reponse = await this._productService.addOrEditOrder({ ...dataReq, authData: req.authData })
      res.status(200).send(reponse)
    } catch (error) {
      res.status(500).send(error)
    }
  }

  searchProducts = async (req, res) => {
    try {
      const dataReq = req.body
      let reponse = await this._productService.searchProducts({ ...dataReq, authData: req.authData })
      res.status(200).send(reponse)
    } catch (error) {
      res.status(500).send(error)
    }
  }

  getCategory = async (req, res) => {
    try {
      const dataReq = req.body
      let reponse = await this._productService.getCategory({ ...dataReq, authData: req.authData })
      res.status(200).send(reponse)
    } catch (error) {
      res.status(500).send(error)
    }
  }

  searchOrders = async (req, res) => {
    try {
      const dataReq = req.body
      let reponse = await this._productService.searchOrders({ ...dataReq, authData: req.authData })
      res.status(200).send(reponse)
    } catch (error) {
      res.status(500).send(error)
    }
  }

  searchOrdersByUser = async (req, res) => {
    try {
      const dataReq = req.body
      let reponse = await this._productService.searchOrdersByUser({ ...dataReq, authData: req.authData })
      res.status(200).send(reponse)
    } catch (error) {
      res.status(500).send(error)
    }
  }

  getRoles = async (req, res) => {
    try {
      const dataReq = req.body
      let reponse = await this._productService.getRoles({ ...dataReq, authData: req.authData })
      res.status(200).send(reponse)
    } catch (error) {
      res.status(500).send(error)
    }
  }

  getUsers = async (req, res) => {
    try {
      const dataReq = req.body
      let reponse = await this._productService.getUsersß({ ...dataReq, authData: req.authData })
      res.status(200).send(reponse)
    } catch (error) {
      res.status(500).send(error)
    }
  }
}

module.exports = ProductController