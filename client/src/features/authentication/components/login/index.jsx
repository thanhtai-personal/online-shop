import React from 'react'
import { useCallback } from 'react'
import { connect } from 'react-redux'
import LoginView from './presentation'
import {
  login,
  googleLogin,
  updateField,
  validateField
} from './../../actions'

const LoginComponent = (props) => {

  const { googleLogin = () => {}
    , login = () => {}
    , updateField = () => {}
    , validateField = () => {}
    , loading, formError
  } = props
  
  const handleLogin = useCallback((e) => {
    e.preventDefault()
    login()
  }, [login])

  const handleGoogleLogin = useCallback((e) => {
    googleLogin()
  }, [googleLogin])

  const handleUpdateField = useCallback((field, e) => {
    updateField(field, e?.target?.value)
    validateField(field, e?.target?.value)
  }, [updateField, validateField])
  return (<LoginView
    onLogin={handleLogin}
    onGoogleLogin={handleGoogleLogin}
    onUpdateField={handleUpdateField}
    loading={loading}
    formError={formError}
  />)
}

const mapState = ({ authentication = {} }) => ({
  loading: authentication.loading,
  formError: authentication.loginFormError
})

const mapDispatch = {
  login,
  googleLogin,
  updateField,
  validateField,
}

export default connect(mapState, mapDispatch)(LoginComponent)