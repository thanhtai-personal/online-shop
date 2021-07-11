import {
} from '../actions/types'
import actionHelpers from 'root/globalHelpingTools/actionHelpers'
const {
  makeSagasActionType
} = actionHelpers

const initalState = {
}

const dashboardReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    default:
      return state
  }
}

export default dashboardReducer