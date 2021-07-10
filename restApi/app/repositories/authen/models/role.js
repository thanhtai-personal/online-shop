const { DataTypes, Model } = require('sequelize');
const createModel = require('../../base.model')

class RoleModel extends Model {}

const Role = createModel(RoleModel, 'role', 'role', {
  'name': {
    type: DataTypes.TEXT,
  },
}, {
  hooks: {
    beforeCreate: async (role, options) => {
      if ((role.get('name') || '').toLowerCase() === 'superadmin') {
        sequelize.Promise.reject('Cannot create role supper admin')
        throw new Error('cannot register role super admin')
      }
      if (!uuidValidate(role.id)) {
        role.id = uuidv4()
      }
    },
    beforeUpdate: async (role, options) => {
      if ((role.get('name') || '').toLowerCase() === 'superadmin') {
        sequelize.Promise.reject('Cannot update role to be a supper admin')
        throw new Error('Cannot update role to be a super admin')
      }
    }
  }
})

module.exports = Role