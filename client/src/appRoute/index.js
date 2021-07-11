import React from 'react'
import { Route, Switch } from 'react-router'
import AppRouteManager from 'root/managers/appRoute/instant'
import authenRoutes from 'root/features/authentication/routes'
import adminRoutes from 'root/features/admin/routes'
import './_reset.css'

const appRouteManager = AppRouteManager()

function AppRoute () {
  appRouteManager.add('authentication', authenRoutes)
  appRouteManager.add('admin', adminRoutes)

  return (
    <> { /* your usual react-router v4/v5 routing */}
      <Switch>
        {appRouteManager.reduce()}
        <Route render={() => (<div>Route not found!</div>)} />
      </Switch>
    </>
  );
}

export default AppRoute