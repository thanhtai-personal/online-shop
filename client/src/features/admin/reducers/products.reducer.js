import {
  GET_PRODUCTS,
  UPDATE_DATA_PRODUCTS
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
    case UPDATE_DATA_PRODUCTS: {
      console.log('payload', payload)
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