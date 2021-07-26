import Utils from 'root/globalHelpingTools/utils'
import {
  takeLatest
  , all
  , put
  , throttle
  , select
} from 'redux-saga/effects'

import {
  GET_ROLES,
  GET_USERS,
  GET_CATEGORIES,
  GET_PRODUCTS,
  GET_ORDERS,
  UPDATE_DATA,
  CREATE_PRODUCT,
  CREATE_CATEGORY
} from '../actions/types'
import { adminApiNames, adminApis } from '../apis'
import apiExecutor from 'root/api'
import { CATEGORIES_KEY, PRODUCTS_KEY } from '../constants'


function* getRoles(action = {}) {
  // let loginData = yield select((state) => state[FEATURE_AUTH_KEY].loginData)
  try {
    const { method, path } = adminApis[adminApiNames.getRoles]
    const token = yield window.cookieStore.get('token')
    const paramsRequest = [path, { headers: { token: token?.value } }]
    const responseData = yield apiExecutor[method](...paramsRequest).then(response => response)
    const listRoles = responseData?.data || {}
    yield put({ type: Utils.makeSagasActionType(GET_ROLES).SUCCESS, payload: listRoles })
  } catch (error) {
    yield put({ type: Utils.makeSagasActionType(GET_ROLES).FAILED, payload: error || {} })
  }
}

function* getProducts(action = {}) {
  // let loginData = yield select((state) => state[FEATURE_AUTH_KEY].loginData)
  try {
    const { method, path } = adminApis[adminApiNames.getProducts]
    const dataRequest = action.payload || {}
    const token = yield window.cookieStore.get('token')
    const paramsRequest = [path, dataRequest, { headers: { token: token?.value } }]
    const responseData = yield apiExecutor[method](...paramsRequest).then(response => response)
    const products = responseData?.data || {}
    yield put({ type: Utils.makeSagasActionType(GET_PRODUCTS).SUCCESS, payload: products })
  } catch (error) {
    yield put({ type: Utils.makeSagasActionType(GET_PRODUCTS).FAILED, payload: error || {} })
  }
}

function* getCategories(action = {}) {
  // let loginData = yield select((state) => state[FEATURE_AUTH_KEY].loginData)
  try {
    const { method, path } = adminApis[adminApiNames.getCategories]
    const token = yield window.cookieStore.get('token')
    const paramsRequest = [path, { headers: { token: token?.value } }]
    const responseData = yield apiExecutor[method](...paramsRequest).then(response => response)
    const listCategories = responseData?.data || {}
    yield put({ type: Utils.makeSagasActionType(GET_CATEGORIES).SUCCESS, payload: listCategories })
  } catch (error) {
    yield put({ type: Utils.makeSagasActionType(GET_CATEGORIES).FAILED, payload: error || {} })
  }
}

function* getUsers(action = {}) {
  // let loginData = yield select((state) => state[FEATURE_AUTH_KEY].loginData)
  try {
    const { method, path } = adminApis[adminApiNames.getUsers]
    const token = yield window.cookieStore.get('token')
    const paramsRequest = [path, action.data, { headers: { token: token?.value } }]
    const responseData = yield apiExecutor[method](...paramsRequest).then(response => response)
    const listUsers = responseData?.data || {}
    yield put({ type: Utils.makeSagasActionType(GET_USERS).SUCCESS, payload: listUsers })
  } catch (error) {
    yield put({ type: Utils.makeSagasActionType(GET_USERS).FAILED, payload: error || {} })
  }
}

function* getOrders(action = {}) {
  // let loginData = yield select((state) => state[FEATURE_AUTH_KEY].loginData)
  try {
    const { method, path } = adminApis[adminApiNames.getOrders]
    const token = yield window.cookieStore.get('token')
    const paramsRequest = [path, action.payload, { headers: { token: token?.value } }]
    const responseData = yield apiExecutor[method](...paramsRequest).then(response => response)
    const listOrders = responseData?.data || {}
    yield put({ type: Utils.makeSagasActionType(GET_ORDERS).SUCCESS, payload: listOrders })
  } catch (error) {
    yield put({ type: Utils.makeSagasActionType(GET_ORDERS).FAILED, payload: error || {} })
  }
}

function* updateData({ type, payload }) {
  const { modelName, fieldName, value, option } = payload
  yield put({ type: `UPDATE_DATA_${modelName}`, payload: { fieldName, value, option } })
}

function* createProduct(action = {}) {
  const productData = yield select((state) => state[PRODUCTS_KEY].model)
  try {
    const images = (productData.images?.value || []).map((img) => {
      let imageSrc = img.src || img.url || null
      if (!imageSrc) {
        //process with a file data
        const fileReader = new FileReader()
        imageSrc = fileReader.readAsDataURL(img)
      }
      let serverImage = {
        name: img.name,
        size: img.size,
        type: img.type,
        src: imageSrc
      }
      return serverImage
    })
    const submitData = {
      name: productData.name?.value,
      images: images,
      video: productData.video?.value,
      description: productData.description?.value
    }
    const { method, path } = adminApis[adminApiNames.createProduct]
    const token = yield window.cookieStore.get('token')
    const paramsRequest = [path, submitData, { headers: { token: token?.value } }]
    const responseData = yield apiExecutor[method](...paramsRequest).then(response => response)
    const listOrders = responseData?.data || {}
    yield put({ type: Utils.makeSagasActionType(CREATE_PRODUCT).SUCCESS, payload: listOrders })
  } catch (error) {
    yield put({ type: Utils.makeSagasActionType(CREATE_PRODUCT).FAILED, payload: error || {} })
  }
}


function* createCategory(action = {}) {
  const categoryData = yield select((state) => state[CATEGORIES_KEY].model)
  try {
    const submitData = {
      name: categoryData.name?.value,
    }
    const { method, path } = adminApis[adminApiNames.createCategory]
    const token = yield window.cookieStore.get('token')
    const paramsRequest = [path, submitData, { headers: { token: token?.value } }]
    const responseData = yield apiExecutor[method](...paramsRequest).then(response => response)
    const listOrders = responseData?.data || {}
    yield put({ type: Utils.makeSagasActionType(CREATE_CATEGORY).SUCCESS, payload: listOrders })
  } catch (error) {
    yield put({ type: Utils.makeSagasActionType(CREATE_CATEGORY).FAILED, payload: error || {} })
  }
}

export default function* adminWatchers() {
  yield all([
    takeLatest(GET_ROLES, getRoles),
    takeLatest(GET_PRODUCTS, getProducts),
    takeLatest(GET_USERS, getUsers),
    takeLatest(GET_CATEGORIES, getCategories),
    takeLatest(GET_ORDERS, getOrders),
    takeLatest(CREATE_PRODUCT, createProduct),
    takeLatest(CREATE_CATEGORY, createCategory),
    throttle(1000, UPDATE_DATA, updateData)
  ])
}
