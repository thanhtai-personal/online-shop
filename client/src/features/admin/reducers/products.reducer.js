import {
  GET_PRODUCTS
} from '../actions/types'
import actionHelpers from 'root/globalHelpingTools/actionHelpers'
const {
  makeSagasActionType
} = actionHelpers

const initalState = {
  listProducts: []
}

const productsReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case makeSagasActionType(GET_PRODUCTS).SUCCESS: 
      return {
        ...state,
        listProducts: payload
      }
    default:
      return state
  }
}

export default productsReducer