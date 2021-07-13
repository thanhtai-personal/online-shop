import Utils from 'root/globalHelpingTools/utils'
import {
  takeLatest
  , all
  , put
} from 'redux-saga/effects'

import {
  CHECK_AUTHEN,
} from 'root/globalActions/types'
import { globalApisName, globalApis } from 'root/globalApis'
import apiExecutor from 'root/api'


function* checkAuthen(action = {}) {
  try {
    const { method, path } = globalApis[globalApisName.checkAuthen]
    const paramsRequest = [path, { headers: { token: action.data } }]
    const responseData = yield apiExecutor[method](...paramsRequest).then(response => response)
    if (responseData?.data?.isValidToken) {
      yield put({ type: Utils.makeSagasActionType(CHECK_AUTHEN).SUCCESS, payload: responseData.data })
    } else {
      yield put({ type: Utils.makeSagasActionType(CHECK_AUTHEN).FAILED, payload: {} })
    }
  } catch (error) {
    yield put({ type: Utils.makeSagasActionType(CHECK_AUTHEN).FAILED, payload: {} })
  }
}

export default function* adminWatchers() {
  yield all([
    takeLatest(CHECK_AUTHEN, checkAuthen)
  ])
}
