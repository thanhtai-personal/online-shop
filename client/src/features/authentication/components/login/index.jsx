import React from 'react'
import { connect } from 'react-redux'
import LoginView from './presentation'

const LoginComponent = (props) => {
  
  return (<LoginView />)
}

const mapState = (state) => ({
})

const mapDispatch = () => {
  return ({
  })
}

export default connect(mapState, mapDispatch())(LoginComponent)