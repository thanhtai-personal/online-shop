import Utils from 'root/globalHelpingTools/utils'
import {
  takeLatest
  , all
  , put
} from 'redux-saga/effects'

import {
  GET_ROLES,
  GET_USERS,
  GET_CATEGORIES,
  GET_PRODUCTS,
  GET_ORDERS
} from '../actions/types'
import { adminApiNames, adminApis } from '../apis'
import apiExecutor from 'root/api'


function* getRoles(action = {}) {
  // let loginData = yield select((state) => state[FEATURE_AUTH_KEY].loginData)
  try {
    const { method, path } = adminApis[adminApiNames.getRoles]
    const paramsRequest = [path]
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
    const paramsRequest = [path, dataRequest]
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
    const paramsRequest = [path]
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
    const paramsRequest = [path, action.payload || {}]
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
    const paramsRequest = [path, action.payload || {}]
    const responseData = yield apiExecutor[method](...paramsRequest).then(response => response)
    const listOrders = responseData?.data || {}
    yield put({ type: Utils.makeSagasActionType(GET_ORDERS).SUCCESS, payload: listOrders })
  } catch (error) {
    yield put({ type: Utils.makeSagasActionType(GET_ORDERS).FAILED, payload: error || {} })
  }
}

export default function* adminWatchers() {
  yield all([
    takeLatest(GET_ROLES, getRoles),
    takeLatest(GET_PRODUCTS, getProducts),
    takeLatest(GET_USERS, getUsers),
    takeLatest(GET_CATEGORIES, getCategories),
    takeLatest(GET_ORDERS, getOrders)
  ])
}
