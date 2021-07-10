const { DataTypes, Model } = require('sequelize');
const createModel = require('../../base.model')

class CategoryModel extends Model {}

const Category = createModel(CategoryModel, 'category', 'category', {
  'name': {
    type: DataTypes.TEXT,
  },
  'key': {
    type: DataTypes.TEXT,
  },
}, {})

module.exports =  Category