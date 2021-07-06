const { DataTypes } = require('sequelize');
const createModel = require('../../base.model')

const ProductCategory = createModel('productCategory', 'product_category', {
  'productId': {
    type: DataTypes.UUID,
  },
  'categoryId': {
    type: DataTypes.UUID,
  }
}, {})

module.exports = ProductCategory