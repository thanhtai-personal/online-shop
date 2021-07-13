import Store from 'root/store'
import dashboardReducer from './reducers/dashboard.reducer'
import rolesReducer from './reducers/roles.reducer'
import ordersReducer from './reducers/orders.reducer'
import usersReducer from './reducers/users.reducer'
import productsReducer from './reducers/products.reducer'
import categoriesReducer from './reducers/categories.reducer'
import adminSagas from './sagas'
import { FEATURE_ADMIN_KEY, DASHBOARD_KEY, ROLES_KEY,
  USERS_KEY, PRODUCTS_KEY, ORDERS_KEY, CATEGORIES_KEY
} from './constants'

const { store } = Store.getInstance()

const setupFeature = () => {
  let mapObject = store.sagasManager.getSagasMap()
  if (!Object.keys(mapObject).includes(FEATURE_ADMIN_KEY)) {
    store.reducerManager.add(DASHBOARD_KEY, dashboardReducer)
    store.reducerManager.add(ROLES_KEY, rolesReducer)
    store.reducerManager.add(USERS_KEY, usersReducer)
    store.reducerManager.add(PRODUCTS_KEY, productsReducer)
    store.reducerManager.add(ORDERS_KEY, ordersReducer)
    store.reducerManager.add(CATEGORIES_KEY, categoriesReducer)
    store.sagasManager.add(FEATURE_ADMIN_KEY, adminSagas)
    store.updateReducer()
    store.updateSagas()
  }
  console.log('++++++++++++END SETUP ADMIN+++++++++++++', store?.getState())
}

export default setupFeature