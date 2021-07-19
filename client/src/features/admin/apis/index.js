export const adminApiNames = {
  getRoles: 'getRoles',
  getProducts: 'getProducts',
  getOrders: 'getOrders',
  getCategories: 'getCategories',
  getUsers: 'getUsers',
  createProduct: 'createProduct'
}

export const adminApis = {
  [adminApiNames.getRoles]: {
    method: 'get',
    path: '/v1/product/get-roles',
  },
  [adminApiNames.getProducts]: {
    method: 'post',
    path: '/v1/product/search',
  },
  [adminApiNames.getOrders]: {
    method: 'post',
    path: '/v1/product/get-orders',
  },
  [adminApiNames.getUsers]: {
    method: 'post',
    path: '/v1/product/get-users',
  },
  [adminApiNames.getCategories]: {
    method: 'get',
    path: '/v1/product/get-categories',
  },
  [adminApiNames.createProduct]: {
    method: 'post',
    path: '/v1/product/create',
  }
}