
const RoleService = require('./../repositories/authen/services/role.service')
const UserService = require('./../repositories/authen/services/user.service')

class BaseService {
  constructor (
      userService,
      roleService
    ) {
    this._userService = userService || UserService
    this._roleService = roleService || RoleService
  }
}

module.exports = BaseService;