const BaseService = require('../base.service')

class AuthenticateService extends BaseService {
  constructor (
    roleService,
    userService,
  ) {
    super(userService, roleService)
  }
}

module.exports = AuthenticateService;