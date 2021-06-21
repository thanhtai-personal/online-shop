const permissionService = require('./domainServices/permission.service')
const roleService = require('./domainServices/role.service')
const userService = require('./domainServices/user.service')
const rolePermissionService =  require('./domainServices/rolePermission.service')
const googleAccountService =  require('./domainServices/googleAccount.service')

module.exports = {
  permissionService,
  roleService,
  userService,
  rolePermissionService,
  googleAccountService
}