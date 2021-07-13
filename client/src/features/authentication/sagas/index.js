import Utils from 'root/globalHelpingTools/utils'
import { adminRoles } from 'root/globalHelpingTools/constants'
import {
  takeLatest
  , all
  , put
  , select
  , throttle
} from 'redux-saga/effects'
import Validator from '../validator'

import {
  LOGIN,
  VALIDATE_FIELD
} from '../actions/types'
import { SET_AUTHEN_DATA } from 'root/globalActions/types'
import { authenApiNames, authenApis } from '../apis'
import apiExecutor from 'root/api'
import { FEATURE_AUTH_KEY } from '../constants'
import { AUTHEN_STATUS } from 'root/enum'

function* loginSagas(action = {}) {
  let loginData = yield select((state) => state[FEATURE_AUTH_KEY].loginData)
  const requestData = {
    userName: loginData.userName.value,
    password: loginData.password.value
  }
  try {
    const { method, path } = authenApis[authenApiNames.login]
    const responseData = yield apiExecutor[method](path, requestData).then(response => response)
    const authData = responseData?.data || {}
    yield put({ type: Utils.makeSagasActionType(LOGIN).SUCCESS, payload: authData })
    yield put({ type: SET_AUTHEN_DATA, payload: { authData, authenStatus: AUTHEN_STATUS.SUCCESS } })
    const { role } = authData
    if (adminRoles.includes(role)) {
      setTimeout(() => window.location.replace('/admin'))
    } else {
      setTimeout(() => window.location.replace('/home'))
    }
  } catch (error) {
    yield put({ type: Utils.makeSagasActionType(LOGIN).FAILED, payload: error || {} })
    yield put({ type: SET_AUTHEN_DATA, payload: { authenStatus: AUTHEN_STATUS.FAILED } })
  }
}

function* validateField (action = {}) {
  const { payload = {} } = action
  const { field, value } = payload
  const { validators = [] } = field
  let message = null, isError = false
  for (const validator of validators) {
    const checkValidateRes = Validator[validator.key](value, ...(validator.params || []))
    if (checkValidateRes !== true) {
      message = checkValidateRes
      isError = true
      break;
    }
  }
  yield put({ type: Utils.makeSagasActionType(VALIDATE_FIELD).SUCCESS, payload: { field, error: { isError, message } } || {} })
}

export default function* authWatchers() {
  yield all([
    takeLatest(LOGIN, loginSagas),
    throttle(1000, VALIDATE_FIELD, validateField)
  ])
}
