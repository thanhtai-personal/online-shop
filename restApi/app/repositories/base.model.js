const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../../sequelize')

class BaseModel extends Model { }

const createModel = (modelName, tableName, extendsProperties = {}, option = {}) => {
  const { hooks, ...nestedOption } = option
  return BaseModel.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    'createdAt': {
      type: DataTypes.TIME
    },
    'updatedAt': {
      type: DataTypes.TIME
    },
    'isActive': {
      type: DataTypes.BOOLEAN
    },
    'createdBy': {
      type: DataTypes.UUID
    },
    'updatedBy': {
      type: DataTypes.UUID
    },
    ...extendsProperties
  }, {
    modelName,
    tableName,
    hooks: {
      beforeCreate: async (model, options) => {
        if (!uuidValidate(model.id)) {
          category.id = uuidv4()
        }
      },
      ...(hooks || {})
    },
    ...nestedOption,
    sequelize
  })
}

module.exports = createModel