import AdminContainer from '../containers/admin'
import setUpFeature from '../setup'
import unsetFeature from '../unset'

const adminRoutes = [
  {
    key: 'admin',
    path: '/admin',
    isExact: true,
    component: AdminContainer,
    hocs: [],
    setUpStore: setUpFeature,
    unsetFeature: unsetFeature,
  },
  {
    key: 'dashboard',
    path: '/admin/dashboard',
    isExact: true,
    component: AdminContainer,
    hocs: [],
    setUpStore: setUpFeature,
    unsetFeature: unsetFeature,
  },
  {
    key: 'users',
    path: '/admin/users',
    isExact: true,
    component: AdminContainer,
    hocs: [],
    setUpStore: setUpFeature,
    unsetFeature: unsetFeature,
  },
  {
    key: 'roles',
    path: '/admin/roles',
    isExact: true,
    component: AdminContainer,
    hocs: [],
    setUpStore: setUpFeature,
    unsetFeature: unsetFeature,
  },
  {
    key: 'categories',
    path: '/admin/categories',
    isExact: true,
    component: AdminContainer,
    hocs: [],
    setUpStore: setUpFeature,
    unsetFeature: unsetFeature,
  },
  {
    key: 'products',
    path: '/admin/products',
    isExact: true,
    component: AdminContainer,
    hocs: [],
    setUpStore: setUpFeature,
    unsetFeature: unsetFeature,
  }
]

export default adminRoutes