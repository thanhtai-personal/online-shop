const { permissionService,
  roleService,
  userService,
  rolePermissionService,
  googleAccountService
} = require('./../../../repositories/authentication')

const AuthService = require('./../../../applicationServices/authentication/authenticate.service')

class AuthenticateController {
  constructor(authService) {
    this._authService = authService
  }

  login = async (req, res) => {
    try {
      let authData = null
      if (req.headers.token) {
        authData = await this._authService.getAuthDataByToken(req.headers.token, req.headers.refreshtoken, req.headers['user-agent'])
        await this._authService.updateLastLogin(authData)
      } else {
        const dataReq = {
          ...req.body,
          username: req.body.username || req.body.email,
          userAgent: req.headers['user-agent'],
          lastLoginTime: new Date()
        }
        if (dataReq.username && dataReq.token && !dataReq.password) {
          authData = await this._authService.register(dataReq)
        } else {
          authData = await this._authService.login(dataReq)
        }
      }
      if (!authData) {
        res.status(500).send({ message: 'get auth data failed!' })
      }
      res.status(200).send(authData)
    } catch (error) {
      res.status(500).send(error)
    }
  }

  signUp = async (req, res) => {
    try {
      const reqData = {
        ...req.body,
        userAgent: req.headers['user-agent']
      }
      const authData = await this._authService.register(reqData)
      res.status(200).send(authData)
    } catch (error) {
      res.status(500).send(error)
    }
  }

}

module.exports = new AuthenticateController(
  new AuthService(
    permissionService,
    roleService,
    userService,
    rolePermissionService,
    googleAccountService
  )
)