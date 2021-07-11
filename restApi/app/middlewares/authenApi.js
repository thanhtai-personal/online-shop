
const JWT = require('jsonwebtoken')
const { Op } = require('sequelize')
const {
  publicRoutes,
  adminRoutes,
} = require('./../config/routePaths')
const userService = require('./../repositories/authen/services/user.service')
const roleService = require('./../repositories/authen/services/role.service')
const { jwtKey } = require('./../../env')

const useAuth = async (req, res, next) => {
  try {
    if (publicRoutes.includes(req.url)) return next() //validate token info
    else {
      const decodedToken = JWT.verify(req.token, jwtKey)
      const user = await userService.findOne({
        raw: true,
        where: {
          [Op.or]: [{ userName: decodedToken.username }
            , { email: decodedToken.email }]
        }
      })
      const role = await roleService.findOne({
        raw: true,
        where: {
          id: user?.role
        }
      })
      if (user && role) {
        if (adminRoutes.includes(req.url) && !(role?.name || '').includes('admin')) {
          return res.status(403).send({
            message: 'you need another role to do something here'
          })
        }
        req.authData = { ...user, roleName: role?.name }
        return next()
      } else {
        return res.status(403).send({
          message: 'you have not permission to do something here'
        })
      }
    }
  } catch (error) {
    return res.status(403).send({
      message: 'you have not permission to do something here'
    })
  }
}

module.exports = useAuth