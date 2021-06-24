import {
  LOGIN,
  SIGNUP,
  UPDATE_LOGIN_INPUT,
} from './types'

export const login = () => {
  return {
    type: LOGIN
  }
}

export const googleLogin = () => {
  return {
    type: LOGIN
  }
}

export const register = (data) => {
  return {
    type: SIGNUP,
    payload: data
  }
}

export const updateField = (field, value) => {
  return {
    type: UPDATE_LOGIN_INPUT,
    payload: { field, value }
  }
}
