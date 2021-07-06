const { DataTypes } = require('sequelize');
const createModel = require('../../base.model')

const OrderProduct = createModel('orderProduct', 'order_product', {
  'productId': {
    type: DataTypes.UUID,
  },
  'orderId': {
    type: DataTypes.UUID,
  },
  'quantity': {
    type: DataTypes.NUMBER,
  }
}, {})

module.exports = OrderProduct