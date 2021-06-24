import React from 'react'
import { useCallback } from 'react'
import { connect } from 'react-redux'
import LoginView from './presentation'
import {
  login,
  googleLogin,
  updateField
} from './../../actions'

const LoginComponent = (props) => {

  const { googleLogin = () => {}
    , login = () => {}
    , updateField = () => {},
    loading
  } = props
  
  const handleLogin = useCallback((e) => {
    login()
  }, [login])

  const handleGoogleLogin = useCallback((e) => {
    googleLogin()
  }, [googleLogin])

  const handleUpdateField = useCallback((field, e) => {
    updateField(field, e?.target?.value)
  }, [updateField])

  return (<LoginView
    onLogin={handleLogin}
    onGoogleLogin={handleGoogleLogin}
    onUpdateField={handleUpdateField}
    loading={loading}
  />)
}

const mapState = (state) => ({
  loading: state['login']?.loading
})

const mapDispatch = {
  login,
  googleLogin,
  updateField
}

export default connect(mapState, mapDispatch)(LoginComponent)