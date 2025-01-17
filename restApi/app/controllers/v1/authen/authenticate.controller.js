const BaseController = require('./../base.controller')
const AuthService = require('./../../../applicationServices/authen/authen.service')

class AuthenticateController extends BaseController {
  constructor(authService) {
    super()
    this._authService = authService || new AuthService()
  }

  login = async (req, res) => {
    try {
      const dataReq = req.body
      let reponse = null
      if (dataReq.userName) {
        reponse = await this._authService.login(dataReq)
      } else if (dataReq.email) {
        reponse = await this._authService.loginByEmail(dataReq)
      }
      res.status(200).send(reponse)
    } catch (error) {
      res.status(500).send(error)
    }
  }

  signUp = async (req, res) => {
    try {
      const dataReq = req.body
      let reponse = await this._authService.register(dataReq)
      res.status(200).send(reponse)
    } catch (error) {
      res.status(500).send(error)
    }
  }

  getAuth = async (req, res) => {
    try {
      let reponse = await this._authService.getAuth(req.headers?.token)
      res.status(200).send(reponse)
    } catch (error) {
      res.status(500).send(error)
    }
  }

}

module.exports = AuthenticateController