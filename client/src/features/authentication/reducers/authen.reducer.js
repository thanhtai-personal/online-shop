import {
  LOGIN,
  UPDATE_LOGIN_INPUT,
  VALIDATE_FIELD
} from '../actions/types'
import actionHelpers from 'root/globalHelpingTools/actionHelpers'
import loginModel from './../models/login.model'
const {
  makeSagasActionType
} = actionHelpers

const initalState = {
  loginData: loginModel,
  currentUser: {},
  loading: false,
  loginFormError: {
    userName: {
      isError: true,
      message: ''
    },
    password: {
      isError: true,
      message: ''
    }
  }
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
          }
        }
      }
    case makeSagasActionType(VALIDATE_FIELD).SUCCESS:
      return {
        ...state,
        loginFormError: {
          ...state.loginFormError,
          [payload.field.name]: payload.error
        }
      }
    default:
      return state
  }
}

export default authReducer