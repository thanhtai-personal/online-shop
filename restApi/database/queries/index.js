const pool = require('../dev/pool')
const userQuery = require('./users')
const roleQuery = require('./roles')
const categoryQuery = require('./categories')
const productQuery = require('./products')
const productCategoryQuery = require('./productCategories')
const orderQuery = require('./orders')
const orderProductQuery = require('./orderProduct')
const imageQuery = require('./images')
const referenceQuery = require('./references')

module.exports = {
  /**
   * DB Query
   * @param {object} req
   * @param {object} res
   * @returns {object} object
   */
  query(quertText, params) {
    return new Promise((resolve, reject) => {
      pool.query(quertText, params)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  queries: [userQuery, roleQuery, categoryQuery
    , productQuery, orderQuery, productCategoryQuery
    , orderProductQuery, imageQuery
  ],
  referenceQueries: [referenceQuery]
};