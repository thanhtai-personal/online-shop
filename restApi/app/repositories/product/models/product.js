const { DataTypes } = require('sequelize');
const createModel = require('../../base.model')

const Product = createModel('product', 'product', {
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