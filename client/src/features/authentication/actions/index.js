import {
  LOGIN,
  SIGNUP,
  UPDATE_LOGIN_INPUT,
} from './types'

import Validator from '../models/validator'
import validator from '../models/validator'

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
  const { validators = [] } = field
  let errorMessage = null
  for (const validator of validators) {
    const checkValidateRes = Validator[validator.key](field, ...(validator.params || []))
    if (checkValidateRes !== true) {
      errorMessage = checkValidateRes
      break;
    }
  }
  return {
    type: UPDATE_LOGIN_INPUT,
    payload: { field, value, errorMessage }
  }
}
