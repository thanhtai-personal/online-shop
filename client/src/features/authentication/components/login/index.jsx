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
    loading, loginData, errorsNumber
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
    loginData={loginData}
    errorsNumber={errorsNumber}
  />)
}

const mapState = ({ login = {} }) => ({
  loading: login.loading,
  loginData: login.loginData,
  errorsNumber: login.loginErrorsNumber
})

const mapDispatch = {
  login,
  googleLogin,
  updateField
}

export default connect(mapState, mapDispatch)(LoginComponent)