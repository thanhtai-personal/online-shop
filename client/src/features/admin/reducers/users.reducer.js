import {
  GET_USERS
} from '../actions/types'
import actionHelpers from 'root/globalHelpingTools/actionHelpers'
const {
  makeSagasActionType
} = actionHelpers

const initalState = {
  listUsers: []
}

const usersReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case makeSagasActionType(GET_USERS).SUCCESS: 
      return {
        ...state,
        listUsers: payload
      }
    default:
      return state
  }
}

export default usersReducer