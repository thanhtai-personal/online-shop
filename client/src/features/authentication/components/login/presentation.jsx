import React from 'react'
import {
  LoginWrapper
} from './loginStyled'
import loginBgImage from 'assets/images/login_bg.jpg'
import leftPanelImage from 'assets/images/left_bg.jpg'

const text = {
  userName: 'User name',
  password: 'Password',
  googleLogin: 'Login via Google',
  login: 'Login',
}

const LoginView = (props) => {

  return (<LoginWrapper
    loginBackground={loginBgImage}
    leftPanelImage={leftPanelImage}
  >
    <div className={'left-panel'}>
    </div>
    <div className={'right-panel'}>
      <form>
        <label><h1>{text.login}</h1></label>
        <label>
          <input type='text' name='name' placeholder={text.userName} />
        </label>
        <label>
        <input type='text' name='password' placeholder={text.password} />
        </label>
        <div className='actions'>
          <input type='submit' value='Login' />
          <button>{text.googleLogin}</button>
        </div>
      </form>
    </div>
  </LoginWrapper>)
}

export default LoginView