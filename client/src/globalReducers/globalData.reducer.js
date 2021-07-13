import {
  CHECK_AUTHEN,
  SET_AUTHEN_DATA
} from 'root/globalActions/types'
import { AUTHEN_STATUS } from 'root/enum'
import actionHelpers from 'root/globalHelpingTools/actionHelpers'
const {
  makeSagasActionType
} = actionHelpers

const initalState = {
  authenStatus: AUTHEN_STATUS.PENDING,
  authData: {}
}

const globalDataReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case CHECK_AUTHEN:
      return {
        ...state,
        authenStatus: AUTHEN_STATUS.PENDING
      }
    case makeSagasActionType(CHECK_AUTHEN).FAILED:
      return {
        ...state,
        authenStatus: AUTHEN_STATUS.FAILED
      }
    case makeSagasActionType(CHECK_AUTHEN).SUCCESS:
      return {
        ...state,
        authenStatus: AUTHEN_STATUS.SUCCESS,
        authData: payload
      }
    case SET_AUTHEN_DATA:
      return {
        ...state,
        ...payload
      }
    default:
      return state
  }
}

export default globalDataReducer