import {
  GET_CATEGORIES,
  CREATE_CATEGORY,
  UPDATE_DATA_CATEGORIES
} from '../actions/types'
import actionHelpers from 'root/globalHelpingTools/actionHelpers'
import categoryModel from '../models/category'
const {
  makeSagasActionType
} = actionHelpers

const initalState = {
  listCategories: [],
  model: categoryModel,
  errorQueue: []
}

const categoriesReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case makeSagasActionType(GET_CATEGORIES).SUCCESS:
      return {
        ...state,
        listCategories: payload
      }
    case makeSagasActionType(CREATE_CATEGORY).SUCCESS:
      return {
        ...state,
      }
    case UPDATE_DATA_CATEGORIES: {
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
    case makeSagasActionType(GET_CATEGORIES).FAILED:
    case makeSagasActionType(CREATE_CATEGORY).FAILED:
      return {
        ...state,
        errorQueue: state.errorQueue.push(payload)
      }
    default:
      return state
  }
}

export default categoriesReducer