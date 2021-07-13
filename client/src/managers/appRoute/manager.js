import React from 'react'
import { Route } from 'react-router'
import HOCManager from './../hocs/instant'

const hocManager = HOCManager()

const combineRoute = (appRoutes) => {
  let routesList = []
  Object.keys(appRoutes).forEach((key) => {
    if (Array.isArray(appRoutes[key])) {
      routesList = routesList.concat(appRoutes[key])
    }
  })
  return routesList.map((route = {}) => {
    let resultComponent = route.component
    if (route.setUpStore && typeof route.setUpStore === 'function' && route.unsetFeature && typeof route.unsetFeature === 'function'){ 
      resultComponent = (props) => (<route.component {...props} routeKey={route.key} setup={route.setUpStore} unset={route.unsetFeature} />)
    }
    if (Array.isArray(route.hocs)) {
      route.hocs.forEach((hoc) => {
        if (typeof hoc === 'string') resultComponent = hocManager.call(hoc, resultComponent)
        else if (hoc.componentHoc) {
          resultComponent = hoc.componentHoc(resultComponent)
        }
      })
    }
    return <Route key={route.key} path={route.path} exact={route.isExact} component={resultComponent} />
  })
}

function AppRouteManager() {
  // Create an object which maps keys to App routes
  const appRoutes = {}
  // Create the initial combinedapp route
  let combinedAppRoute = combineRoute(appRoutes)

  return {
    getAppRouteMap: () => appRoutes,

    // The root app route function exposed by this object
    // This will be passed to the store
    reduce: () => {
      return combinedAppRoute
    },

    // Adds a new app route with the specified key
    add: (key, featureRoute) => {
      if (!key || appRoutes[key]) {
        return
      }

      // Add the app route to the app route mapping
      appRoutes[key] = featureRoute

      // Generate a new combined app route
      combinedAppRoute = combineRoute(appRoutes)
    },

    // Removes a app route with the specified key
    remove: key => {
      if (!key || !appRoutes[key]) {
        return
      }

      // Remove it from the app route mapping
      delete appRoutes[key]

      // Generate a new combined app route
      combinedAppRoute = combineRoute(appRoutes)
    }
  }
}

export default AppRouteManager