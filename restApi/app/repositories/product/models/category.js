const { DataTypes } = require('sequelize');
const createModel = require('../../base.model')

const Category = createModel('category', 'category', {
  'name': {
    type: DataTypes.TEXT,
  },
  'key': {
    type: DataTypes.TEXT,
  },
}, {})

module.exports =  Category