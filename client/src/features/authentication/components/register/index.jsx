import React from 'react'
import { connect } from 'react-redux'
import SignupView from './presentation'


const RegisterComponent = (props) => {
  return (<SignupView />)
}

const mapState = (state) => ({
})

const mapDispatch = () => {
  return ({
  })
}

export default connect(mapState, mapDispatch())(RegisterComponent)