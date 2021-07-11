import DashboardContainer from '../containers/dashboard'
import setUpFeature from '../setup'
import unsetFeature from '../unset'

const adminRoutes = [
  {
    key: 'admin',
    path: '/admin',
    isExact: true,
    component: DashboardContainer,
    hocs: [],
    setUpStore: setUpFeature,
    unsetFeature: unsetFeature,
  },
  {
    key: 'dashboard',
    path: '/admin/dashboard',
    isExact: true,
    component: DashboardContainer,
    hocs: [],
    setUpStore: setUpFeature,
    unsetFeature: unsetFeature,
  }
]

export default adminRoutes