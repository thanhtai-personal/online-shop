const { DataTypes, Model } = require('sequelize');
const createModel = require('../../base.model')

class ImageModel extends Model {}

const Image = createModel(ImageModel, 'image', 'image', {
  'altName': {
    type: DataTypes.TEXT,
  },
  'url': {
    type: DataTypes.TEXT,
  },
  'productId': {
    type: DataTypes.UUID,
  },
}, {})

module.exports = Image