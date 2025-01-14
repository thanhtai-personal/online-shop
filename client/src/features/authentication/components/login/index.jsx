import React, { useCallback, useEffect } from 'react'
import { connect } from 'react-redux'
import { withCookies } from 'react-cookie'
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
    , loading, formError, cookies, token
  } = props

  useEffect(() => {
    cookies.set('token', token, { path: '/' })
  }, [token])
  
  const handleLogin = useCallback((e) => {
    e.preventDefault()
    login()
  }, [login])

  const onGGLoginSuccess = useCallback((googleUser) => {
    const googleProfile = googleUser.getBasicProfile()
    const profile = {
      name: googleProfile.getName(),
      email: googleProfile.getEmail(),
      // image: googleProfile.getImageUrl(),
      socialId: googleProfile.getId(),
      // firstName: googleProfile.getFamilyName(),
      // lastName: googleProfile.getGivenName(),
      token: googleUser.getAuthResponse().id_token
    }
    googleLogin(profile)
  }, [googleLogin])

  const handleUpdateField = useCallback((field, e) => {
    updateField(field, e?.target?.value)
    validateField(field, e?.target?.value)
  }, [updateField, validateField])
  
  return (<LoginView
    onLogin={handleLogin}
    onGoogleLogin={onGGLoginSuccess}
    onUpdateField={handleUpdateField}
    loading={loading}
    formError={formError}
  />)
}

const mapState = ({ authentication = {}, globalData }) => ({
  loading: authentication.loading,
  formError: authentication.loginFormError,
  token: globalData.authData?.token
})

const mapDispatch = {
  login,
  googleLogin,
  updateField,
  validateField,
}

export default connect(mapState, mapDispatch)(withCookies(LoginComponent))
// export default connect(mapState, mapDispatch)(React.memo(LoginComponent))
//React.memo or React.PureComponent make component use shalow compare. (mean is address compare)
//Normal component use deep compare (mean is property compare)