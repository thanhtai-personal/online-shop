const { DataTypes } = require('sequelize');
const createModel = require('../../base.model')

const Image = createModel('image', 'image', {
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