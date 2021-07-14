import LoginContainer from '../containers/login'
import setUpFeature from '../setup'
import unsetFeature from '../unset'
import ErrorCatcher from 'root/hocs/errorCatcher'

const defaultRoutes = [
  /**
   * when add setUpFeature property to route, this route will not lazy load store data.
   * Mean is data of route(reducer, api, sagas) in store will be loaded from building time.
   */
  {
    key: 'admin',
    path: '/dashboard',
    isExact: true,
    component: LoginContainer,
    hocs: [ErrorCatcher],
    setUpStore: setUpFeature,
    unsetFeature: unsetFeature,
  },
  {
    key: 'login',
    path: '/login',
    isExact: true,
    component: LoginContainer,
    hocs: [ErrorCatcher],
    setUpStore: setUpFeature,
    unsetFeature: unsetFeature,
  },
  {
    key: 'home',
    path: '/',
    isExact: true,
    component: LoginContainer,
    hocs: [ErrorCatcher],
    setUpStore: setUpFeature,
    unsetFeature: unsetFeature,
  }
]

export default defaultRoutes