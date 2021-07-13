import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useCookies } from 'react-cookie'
import { AUTHEN_STATUS } from 'root/enum'
import Loading from 'root/commonComponents/loading'
import checkAuthen from 'root/globalActions/checkAuthen'

const AuthenticateWrapper = (AuthenticatedComponent, accessableRoles = null) => {
  const Authen = (props) => {
    const { checkAuthen, authenStatus, role, token } = props
    const [cookies, setCookie] = useCookies(['token'])

    useEffect(() => {
      authenStatus !== AUTHEN_STATUS.SUCCESS && checkAuthen(cookies)
    }, [cookies])

    useEffect(() => {
      if (authenStatus === AUTHEN_STATUS.SUCCESS) {
        if (!cookies.token) {
          setCookie('token', token, { path: '/' });
        }
      }
    }, [authenStatus])

    if (authenStatus === AUTHEN_STATUS.SUCCESS && (accessableRoles.includes(role?.name) || accessableRoles === null)){
      return (
        <AuthenticatedComponent {...props} />
      )
    } else if (authenStatus === AUTHEN_STATUS.FAILED){
      window.location.replace('/login') 
    }
    return (<Loading />)
  }
  const mapState = ({ globalData = {} }) => ({
    authenStatus: globalData.authenStatus,
    role: globalData.authData?.role,
    token: globalData.authData?.token
  })
  const mapDispatch = {
    checkAuthen
  }
  return connect(mapState, mapDispatch)(React.memo(Authen))
}

export default AuthenticateWrapper
