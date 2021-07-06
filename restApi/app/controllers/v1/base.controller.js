const BaseService = require('./../../applicationServices/base.service')

class BaseController {
  constructor(baseService) {
    this._baseService = baseService || BaseService
  }
}

module.exports = BaseController