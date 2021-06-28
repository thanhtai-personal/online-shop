import {
  LOGIN,
  UPDATE_LOGIN_INPUT,
} from '../actions/types'
import actionHelpers from 'root/globalHelpingTools/actionHelpers'
import loginModel from './../models/login.model'
const {
  makeSagasActionType
} = actionHelpers

const initalState = {
  loginData: loginModel,
  currentUser: {},
  loginErrorsNumber: 2,
  loading: false
}

const authReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
      }
    case makeSagasActionType(LOGIN).SUCCESS:
      return {
        ...state,
        currentUser: payload,
        loading: false,
      }
    case makeSagasActionType(LOGIN).FAILED:
      return {
        ...state,
        error: payload,
        loading: false,
      }
    case UPDATE_LOGIN_INPUT:
      return {
        ...state,
        loginData: {
          ...state.loginData,
          [payload.field.name]: {
            ...state.loginData[payload.field.name],
            value: payload.value,
            error: {
              message: payload.errorMessage,
              isError: !!payload.errorMessage
            }
          }
        },
        errorData: {
          ...state.errorData,
          [payload.field.name]: {
            
          }
        }
      }
    default:
      return state
  }
}

export default authReducer