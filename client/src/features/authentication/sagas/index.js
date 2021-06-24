import Utils from 'root/globalHelpingTools/utils'
import {
  takeLatest
  , all
  , put
  , select
} from 'redux-saga/effects'

import {
  LOGIN,
} from '../actions/types'
import { authenApiNames, authenApis } from '../apis'
import apiExecutor from 'root/api'
import { FEATURE_AUTH_KEY } from '../constants'

function* loginSagas(action = {}) {
  let loginData = yield select((state) => state[FEATURE_AUTH_KEY].loginData)
  const requestData = {
    userName: loginData.userName.value,
    password: loginData.password.value
  }
  try {
    const { method, path } = authenApis[authenApiNames.login]
    const responseData = yield apiExecutor[method](path, requestData).then(response => response)
    yield put({ type: Utils.makeSagasActionType(LOGIN).SUCCESS, payload: responseData?.data || {} })
  } catch (error) {
    yield put({ type: Utils.makeSagasActionType(LOGIN).FAILED, payload: error || {} })
  }
}

export default function* authWatchers() {
  yield all([
    takeLatest(LOGIN, loginSagas)
  ])
}
