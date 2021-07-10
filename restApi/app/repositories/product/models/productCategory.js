const { DataTypes, Model } = require('sequelize');
const createModel = require('../../base.model')

class ProductCategoryModel extends Model {}

const ProductCategory = createModel(ProductCategoryModel, 'productCategory', 'product_category', {
  'productId': {
    type: DataTypes.UUID,
  },
  'categoryId': {
    type: DataTypes.UUID,
  }
}, {})

module.exports = ProductCategory