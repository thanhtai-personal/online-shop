const TOKEN_EXPIRED_TIME = 44000000
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { jwtKey } = require('./../../../env')


class AuthenticateService {
  constructor (
    permissionService,
    roleService,
    userService,
    rolePermissionService,
    googleAccountService) {

    this._userService = userService
    this._googleAccountService = googleAccountService
    this._roleService = roleService
    this._permissionService = permissionService
    this._rolePermissionService = rolePermissionService
  }

  generateToken = async (user) => {
    const {
      createdAt,
      updatedAt,
      createdBy,
      updatedBy,
      isActive,
      ...selectedInfo
    } = user
    const token = await jwt.sign(selectedInfo, jwtKey, { expiresIn: TOKEN_EXPIRED_TIME })
    return token
  }
  
  login = async (dataReq) => {
    try {
      const user = await this._userService.getByUserName(dataReq.username, true)
      if (!user) return {
        message: 'invalid user name!'
      }
      const {
        password,
        ...userView
      } = user
      let isValidPass = await bcrypt.compare(dataReq.password, password)
      if (dataReq.username.toLowerCase() === 'superadmin') {
        isValidPass = dataReq.password === password
      }
      if (isValidPass) {
        const token = await this.generateToken(user)
        const role = await this._roleService.findOne({
          where: {
            id: user.roleId
          }
        }) || {}
        return { user: userView, token, role: role.name }
      } else return {
        message: 'invalid password!'
      }
    } catch (error) {
      throw error
    }
  }
  
  register = async (dataReq = {}) => {
    try {
      const checkExistUser = await this._userService.getByUserName(dataReq.username || '')
      let user
      if (checkExistUser) {
        if (!dataReq.googleId) {
          throw {
            message: 'user is existed!'
          }
        }
        let userUpdated = await this._userService.update(dataReq, {
          where: {
            id: checkExistUser.id
          },
          returning: true,
          raw: true,
          nest: true,
        })
        let [ rowsUpdate, [updatedUser] ] = userUpdated
        user = updatedUser
      } else {
        user = await this._userService.create(dataReq, { raw: true, nest: true }) || null
        await this._googleAccountService.create({
          email: dataReq.username || dataReq.email,
          currentUsing: true,
          createdBy: user.id,
          upadtedBy: user.id,
          userId: user.id,
          token: dataReq.token
        }, { raw: true, nest: true })
      }
      if (!user) return {
        message: 'invalid user data!'
      }
      const tokenData = {
        username: user.username,
        id: user.id,
        lastLogin: user.lastLoginTime,
        googleId: user.googleId
      }
      const token = await this.generateToken(tokenData)
      // const refreshToken = await this._clientService.generateRefreshToken(tokenData, dataReq.userAgent, REFRESH_TOKEN_EXPIRED_TIME)
      return { tokenData, token } // , refreshToken }
    } catch (error) {
      throw error
    }
  }
  
  getAuthDataByToken = async (token, refreshToken, userAgent) => {
    try {
      const decodedToken = await jwt.verify(token, jwtKey)
      const user = await this._userService.getByUserName(decodedToken.username)
      return { user, token, refreshToken }
    } catch (decodedError) {
      // if (decodedError.name === 'TokenExpiredError') {
      //   try {
      //     const decodedRefreshToken = await jwt.verify(refreshToken, jwtKey)
      //     const clientInfos = await this._clientService.getUserAgentByUserId(decodedRefreshToken.userId) || []
      //     if (clientInfos.includes(userAgent)) {
      //       const user = await this._userService.getByUserId(decodedRefreshToken.userId)
      //       const newToken = await this.generateToken(userData)
      //       const role = await this._roleService.findOne({
      //         where: {
      //           id: user.roleId
      //         }
      //       })
      //       return { user, token: newToken, refreshToken, role: role.name }
      //     } else {
      //       throw ({
      //         code: 403,
      //         message: 'This device was not saved. Relogin please.'
      //       })
      //     }
      //   } catch (error) {
      //     throw error
      //   }
      // } else {
        throw (decodedError)
      // }
    }
  }
  
  updateLastLogin = async (authData) => {
    try {
      await this._userService.update({
        lastLoginTime: new Date()
      }, {
        where: {
          id: authData.id
        },
        returning: false,
        raw: true,
        nest: true,
      })
    } catch (error) {
      throw error
    }
  }
}

module.exports = AuthenticateService;