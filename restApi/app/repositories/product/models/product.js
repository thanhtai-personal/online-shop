const { DataTypes, Model } = require('sequelize');
const createModel = require('../../base.model')

class OrderProductModel extends Model {}

const Product = createModel(OrderProductModel, 'product', 'product', {
  'name': {
    type: DataTypes.TEXT,
  },
  'priceUnit': {
    type: DataTypes.TEXT,
  },
  'price': {
    type: DataTypes.NUMBER,
  },
  'quantity': {
    type: DataTypes.NUMBER,
  }
}, {})

module.exports = Product