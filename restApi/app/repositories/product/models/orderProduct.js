const { DataTypes, Model } = require('sequelize');
const createModel = require('../../base.model')

class OrderProductModel extends Model {}

const OrderProduct = createModel(OrderProductModel, 'orderProduct', 'order_product', {
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