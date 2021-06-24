import Store from 'root/store'
import authenReducer from './reducers/authen.reducer'
import authenSagas from './sagas'
import { FEATURE_AUTH_KEY } from './constants'

const { store } = Store.getInstance()

const setupFeature = () => {
  let mapObject = store.sagasManager.getSagasMap()
  if (!Object.keys(mapObject).includes(FEATURE_AUTH_KEY)) {
    store.reducerManager.add(FEATURE_AUTH_KEY, authenReducer)
    store.sagasManager.add(FEATURE_AUTH_KEY, authenSagas)
    store.updateReducer()
    store.updateSagas()
  }
  console.log('++++++++++++END SETUP AUTHENTICATION+++++++++++++', store?.getState())
}

export default setupFeature