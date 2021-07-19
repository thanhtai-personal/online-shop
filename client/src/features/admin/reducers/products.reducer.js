import {
  CREATE_PRODUCT,
  GET_PRODUCTS,
  UPDATE_DATA_PRODUCTS,
  GET_CATEGORIES
} from '../actions/types'
import actionHelpers from 'root/globalHelpingTools/actionHelpers'
import productModel from './../models/product'

const {
  makeSagasActionType
} = actionHelpers

const initalState = {
  listProducts: [],
  model: productModel
}

const productsReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case makeSagasActionType(GET_PRODUCTS).SUCCESS:
      return {
        ...state,
        listProducts: payload
      }
    case makeSagasActionType(CREATE_PRODUCT).SUCCESS:
      return {
        ...state,
      }
    case makeSagasActionType(GET_CATEGORIES).SUCCESS:
      return {
        ...state,
        model: {
          ...state.model,
          category: {
            ...(state.model.category || {}),
            options: payload
          }
        }
      }
    case UPDATE_DATA_PRODUCTS: {
      return {
        ...state,
        model: {
          ...state.model,
          [payload.fieldName]: {
            ...state.model[payload.fieldName],
            value: payload.value
          }
        }
      }
    }
    default:
      return state
  }
}

export default productsReducer