const BaseController = require('./../base.controller')
const AuthService = require('./../../../applicationServices/authen/authen.service')

class AuthenticateController extends BaseController {
  constructor(authService) {
    super()
    this._authService = authService || AuthService
  }

  login = async (req, res) => {
    const dataReq = req.body
    let reponse = null
    if (dataReq.userName) {
      reponse = await this._authService.login()
    } else if (dataReq.email) {
      reponse = await this._authService.loginByEmail()
    }
    res.status(200).send(reponse)
  }

  signUp = async (req, res) => {
    const dataReq = req.body
    let reponse = await this._authService.register()
    res.status(200).send(reponse)
  }

}

module.exports = AuthenticateController