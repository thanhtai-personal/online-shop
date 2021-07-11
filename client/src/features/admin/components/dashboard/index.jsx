import React from 'react'
import { connect } from 'react-redux'
import DashboardView from './presentation'
import {
} from '../../actions'

const LoginComponent = (props) => {
  return (<DashboardView
  />)
}

const mapState = ({ dashboard = {} }) => ({
})

const mapDispatch = {
}

export default connect(mapState, mapDispatch)(LoginComponent)
// export default connect(mapState, mapDispatch)(React.memo(LoginComponent))
//React.memo or React.PureComponent make component use shalow compare. (mean is address compare)
//Normal component use deep compare (mean is property compare)