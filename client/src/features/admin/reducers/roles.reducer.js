import {
  GET_ROLES
} from '../actions/types'
import actionHelpers from 'root/globalHelpingTools/actionHelpers'
const {
  makeSagasActionType
} = actionHelpers

const initalState = {
  listRoles: []
}

const rolesReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case makeSagasActionType(GET_ROLES).SUCCESS: 
      return {
        ...state,
        listRoles: payload
      }
    default:
      return state
  }
}

export default rolesReducer