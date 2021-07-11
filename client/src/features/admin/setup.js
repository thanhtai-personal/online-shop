import Store from 'root/store'
import dashboardReducer from './reducers/dashboard.reducer'
import adminSagas from './sagas'
import { FEATURE_ADMIN_KEY, DASHBOARD_KEY } from './constants'

const { store } = Store.getInstance()

const setupFeature = () => {
  let mapObject = store.sagasManager.getSagasMap()
  if (!Object.keys(mapObject).includes(FEATURE_ADMIN_KEY)) {
    store.reducerManager.add(DASHBOARD_KEY, dashboardReducer)
    store.sagasManager.add(FEATURE_ADMIN_KEY, adminSagas)
    store.updateReducer()
    store.updateSagas()
  }
  console.log('++++++++++++END SETUP ADMIN+++++++++++++', store?.getState())
}

export default setupFeature