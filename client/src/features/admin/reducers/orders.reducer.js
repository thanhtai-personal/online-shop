import {
  GET_ORDERS
} from '../actions/types'
import actionHelpers from 'root/globalHelpingTools/actionHelpers'
const {
  makeSagasActionType
} = actionHelpers

const initalState = {
  listOrders: []
}

const ordersReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case makeSagasActionType(GET_ORDERS).SUCCESS: 
      return {
        ...state,
        listOrders: payload
      }
    default:
      return state
  }
}

export default ordersReducer