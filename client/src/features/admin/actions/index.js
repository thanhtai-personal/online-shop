import {
  GET_ROLES,
  GET_USERS,
  GET_CATEGORIES,
  GET_PRODUCTS,
  GET_ORDERS
} from './types'

export const getRoles = () => {
  return {
    type: GET_ROLES,
    payload: {}
  }
}

export const getUsers = (data) => {
  return {
    type: GET_USERS,
    payload: data
  }
}

export const getCategories = () => {
  return {
    type: GET_CATEGORIES,
    payload: {}
  }
}

export const getProducts = (data) => {
  return {
    type: GET_PRODUCTS,
    payload: data
  }
}

export const getOrders = (data) => {
  return {
    type: GET_ORDERS,
    payload: data
  }
}
