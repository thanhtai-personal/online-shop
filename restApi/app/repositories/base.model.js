const { DataTypes } = require('sequelize');
const { sequelize } = require('./../sequelize');
const { v4: uuidv4, validate: uuidValidate } = require('uuid')

const createModel = (Model, modelName, tableName, extendsProperties = {}, option = {}) => {
  const { hooks, ...nestedOption } = option
  return Model.init({
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
          model.id = uuidv4()
        }
      },
      ...(hooks || {})
    },
    ...nestedOption,
    sequelize
  })
}

module.exports = createModel