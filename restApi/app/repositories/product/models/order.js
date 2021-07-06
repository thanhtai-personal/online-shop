const { DataTypes } = require('sequelize');
const createModel = require('../../base.model')

const Order = createModel('order', 'order', {
  'status': {
    type: DataTypes.TEXT,
  }
}, {})

module.exports = Order