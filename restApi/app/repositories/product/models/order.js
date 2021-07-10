const { DataTypes, Model } = require('sequelize');
const createModel = require('../../base.model')

class ImageModel extends Model {}

const Order = createModel(ImageModel, 'order', 'order', {
  'status': {
    type: DataTypes.TEXT,
  }
}, {})

module.exports = Order