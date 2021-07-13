import AdminContainer from '../containers/admin'
import setUpFeature from '../setup'
import unsetFeature from '../unset'
import AuthenticateWrapper from 'root/hocs/authen'
import { adminRoles } from 'root/globalHelpingTools/constants'

const AuthAdminContainer = AuthenticateWrapper(AdminContainer, adminRoles)

const adminRoutes = [
  {
    key: 'admin',
    path: '/admin',
    isExact: true,
    component: AuthAdminContainer,
    hocs: [],
    setUpStore: setUpFeature,
    unsetFeature: unsetFeature,
  },
  {
    key: 'dashboard',
    path: '/admin/dashboard',
    isExact: true,
    component: AuthAdminContainer,
    hocs: [],
    setUpStore: setUpFeature,
    unsetFeature: unsetFeature,
  },
  {
    key: 'users',
    path: '/admin/users',
    isExact: true,
    component: AuthAdminContainer,
    hocs: [],
    setUpStore: setUpFeature,
    unsetFeature: unsetFeature,
  },
  {
    key: 'roles',
    path: '/admin/roles',
    isExact: true,
    component: AuthAdminContainer,
    hocs: [],
    setUpStore: setUpFeature,
    unsetFeature: unsetFeature,
  },
  {
    key: 'categories',
    path: '/admin/categories',
    isExact: true,
    component: AuthAdminContainer,
    hocs: [],
    setUpStore: setUpFeature,
    unsetFeature: unsetFeature,
  },
  {
    key: 'products',
    path: '/admin/products',
    isExact: true,
    component: AuthAdminContainer,
    hocs: [],
    setUpStore: setUpFeature,
    unsetFeature: unsetFeature,
  },
  {
    key: 'orders',
    path: '/admin/orders',
    isExact: true,
    component: AuthAdminContainer,
    hocs: [],
    setUpStore: setUpFeature,
    unsetFeature: unsetFeature,
  }
]

export default adminRoutes