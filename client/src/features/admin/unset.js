import Store from 'root/store'
import adminSagas from './sagas'
import { FEATURE_ADMIN_KEY, DASHBOARD_KEY } from './constants'
import dashboardReducer from './reducers/dashboard.reducer'

const { store } = Store.getInstance()

const unsetFeature = () => {
  let mapObject = store.sagasManager.getSagasMap()
  if (!Object.keys(mapObject).includes(FEATURE_ADMIN_KEY)) {
    store.reducerManager.remove(DASHBOARD_KEY, dashboardReducer)
    store.sagasManager.remove(FEATURE_ADMIN_KEY, adminSagas)
    store.updateReducer()
    store.updateSagas()
  }
}

export default unsetFeature