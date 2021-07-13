import {
  GET_CATEGORIES
} from '../actions/types'
import actionHelpers from 'root/globalHelpingTools/actionHelpers'
const {
  makeSagasActionType
} = actionHelpers

const initalState = {
  listCategories: []
}

const categoriesReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case makeSagasActionType(GET_CATEGORIES).SUCCESS: 
      return {
        ...state,
        listRoles: payload
      }
    default:
      return state
  }
}

export default categoriesReducer