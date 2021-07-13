import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { CookiesProvider } from 'react-cookie'

import AppRoute from './appRoute'
import Store from './store'
import reportWebVitals from './reportWebVitals'

const { store, history } = Store.getInstance()

const NODE_MOUNT = document.getElementById('root')

const renderApp = () =>
  render(
    <React.StrictMode>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <CookiesProvider>
            <AppRoute />
          </CookiesProvider>
        </ConnectedRouter>
      </Provider>
    </React.StrictMode>,
    NODE_MOUNT
  )

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./appRoute', renderApp)
}

renderApp()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
