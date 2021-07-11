import Utils from 'root/globalHelpingTools/utils'
import {
  takeLatest
  , all
  , put
  , select
  , throttle
} from 'redux-saga/effects'

import {
} from '../actions/types'
import { adminApiNames, adminApis } from '../apis'
import apiExecutor from 'root/api'
import { FEATURE_ADMIN_KEY } from '../constants'

export default function* adminWatchers() {
  yield all([
    
  ])
}
