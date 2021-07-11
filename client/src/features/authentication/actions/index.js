import {
  LOGIN,
  SIGNUP,
  UPDATE_LOGIN_INPUT,
  VALIDATE_FIELD
} from './types'

export const login = () => {
  return {
    type: LOGIN
  }
}

export const googleLogin = (data) => {
  return {
    type: LOGIN,
    payload: data
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

export const validateField = (field, value) => {
  return {
    type: VALIDATE_FIELD,
    payload: { field, value }
  }
}
