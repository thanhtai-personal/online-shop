const { DataTypes, Model } = require('sequelize');
const bcrypt = require('bcryptjs')
const { saltPrefix } = require('../../../../env')
const { v4: uuidv4, validate: uuidValidate } = require('uuid')
const createModel = require('../../base.model')

class UserModel extends Model {}

const User = createModel(UserModel, 'user', 'user', {
  'name': {
    type: DataTypes.TEXT,
  },
  'email': {
    type: DataTypes.TEXT,
  },
  'userName': {
    type: DataTypes.TEXT,
  },
  'password': {
    type: DataTypes.TEXT,
  },
  'role': {
    type: DataTypes.UUID,
  },
  'socialId': {
    type: DataTypes.TEXT,
  },
}, {
  hooks: {
    beforeCreate: async (user, options) => {
      const salt = bcrypt.genSaltSync(saltPrefix);
      if (user.get('password')) {
        user.password = await bcrypt.hashSync(user.password, salt)
      } else {
        user.password = ''
      }
      if (!uuidValidate(user.id)) {
        user.id = uuidv4()
        if (!uuidValidate(user.createdBy)) {
          user.createdBy = user.id
        }
        if (!uuidValidate(user.updatedBy)) {
          user.updatedBy = user.id
        }
      }
    },
    beforeUpdate: async (user, options) => {
      if (uuidValidate(user.id)) {
        user.updatedBy = user.id
      }
    },
  }
})

module.exports = User 