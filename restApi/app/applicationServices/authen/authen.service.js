const BaseService = require('../base.service')
const Config = require('./configData.json')
const jwt = require('jsonwebtoken')
const { jwtKey } = require('./../../../env')
const bcrypt = require('bcryptjs')

class AuthenticateService extends BaseService {
  constructor (
    roleService,
    userService,
  ) {
    super(userService, roleService)
  }

  login = async (dataReq) => {
    const user = await this._userService.findOne({
      raw: true,
      attributes: ['id', 'name', 'userName', 'password', 'role'],
      where: {
        userName: dataReq.userName,
        isActive: true
      }
    })
    if (!user) return {
      message: 'invalid user name!'
    }
    const {
      password,
      ...userView
    } = user
    let isValidPass = await bcrypt.compare(dataReq.password, password)
    if (dataReq.userName.toLowerCase() === 'superadmin') {
      isValidPass = dataReq.password === password
    }
    if (isValidPass) {
      const role = await this._roleService.findOne({
        raw: true,
        where: {
          id: user.role,
          isActive: true
        }
      }) || {}
      const token = await jwt.sign({ user: userView, role }, jwtKey, { expiresIn: Config.tokenExpiredTime })
      return { user: userView, token, role: role.name }
    } else return {
      message: 'invalid password!'
    }
  }

  loginByEmail = async (dataReq) => {
    const user = await this._userService.findOne({
      raw: true,
      attributes: ['id', 'name', 'email', 'role', 'socialId'],
      where: {
        email: dataReq.email,
        isActive: true
      }
    })
    if (!user) return await this.register(dataReq)
    const role = await this._roleService.findOne({
      raw: true,
      where: {
        id: user.role,
        isActive: true
      }
    }) || {}
    const token = await jwt.sign({ user, role }, jwtKey, { expiresIn: Config.tokenExpiredTime })
    return { user, token, role }
  }

  register = async (dataReq) => {
    const roleClient = await this._roleService.findOne({
      raw: true,
      where: {
        isActive: true,
        name: 'client'
      }
    })
    const user = await this._userService.create({
      ...dataReq,
      role: roleClient.id
    })
    const token = await jwt.sign({ user, role: roleClient }, jwtKey, { expiresIn: Config.tokenExpiredTime })
    return { user, token, role }
  }
  
  getAuth = async (token) => {
    const decodedToken = jwt.verify(token || '', jwtKey)
    return {
      ...decodedToken,
      isValidToken: true
    }
  }
}

module.exports = AuthenticateService;