import React, { useCallback } from 'react'
import GoogleLogin from 'react-google-login'
import {
  LoginWrapper
} from './loginStyled'
import loginBgImage from 'assets/images/login_bg.jpg'
import leftPanelImage from 'assets/images/left_bg.jpg'
import loginModel from '../../models/login.model'
import Loading from 'root/commonComponents/loading'
import Tabs from 'root/commonComponents/tabs'
import customHooks from './../customHooks'

const { useFormErrorChecker } = customHooks

const text = {
  userName: 'User name',
  password: 'Password',
  googleLogin: 'Login via Google',
  login: 'Login',
}

const LoginView = (props) => {

  const { onLogin, onGoogleLogin, onUpdateField, loading, formError = {} } = props
  const { userName, password } = formError
  let isFormError = useFormErrorChecker(formError)


  const handleChangeUserName = useCallback((e, data) => {
    onUpdateField(loginModel.userName, e, data)
  }, [onUpdateField])

  const handleChangePassword = useCallback((e, data) => {
    onUpdateField(loginModel.password, e, data)
  }, [onUpdateField])

  const handleClickGoogleLogin = useCallback((e, data) => {
    // e.preventDefault()
  }, [])

  return (<LoginWrapper
    loginBackground={loginBgImage}
    leftPanelImage={leftPanelImage}
  >
    <div className={'left-panel'}></div>
    <div className={'right-panel'}>
      {loading ? <Loading /> :
        <div className={'form'}>
          <Tabs buttons={[
            <button>{text.login}</button>,
            <GoogleLogin
              clientId='404281480421-lbrm3qknrffqpndu06u4925047tt4ee3.apps.googleusercontent.com'
              buttonText={text.googleLogin}
              onSuccess={onGoogleLogin}
              // onFailure={onGGLoginFailure}
              cookiePolicy={'single_host_origin'}
              className={'google-login-btn'}
            />
          ]} />
          <form onSubmit={onLogin}>
            {/* <label><h1>{text.login}</h1></label> */}
            <label>
              <input className={userName?.isError ? 'error' : ''} type={'text'} onChange={handleChangeUserName} name='name' placeholder={text.userName} />
            </label>
            {<span className={'error-message'}>{userName?.message}</span>}
            <label>
              <input type={'password'} className={password?.isError ? 'error' : ''} onChange={handleChangePassword} name='password' placeholder={text.password} />
            </label>
            <span className={'error-message'}>{password?.message}</span>
            <div className='actions'>
              <input type='submit' className={isFormError > 0 ? 'disabled' : ''} disabled={isFormError} value='Login' />
            </div>
          </form>
        </div>
      }
    </div>
  </LoginWrapper >)
}

export default LoginView