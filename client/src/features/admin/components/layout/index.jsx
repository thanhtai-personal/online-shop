import React from 'react'
import AdminLayoutView from './presentation'
import Dashboard from '../dashboard'
import Users from '../users'
import Categories from '../categories'
import Roles from '../roles'
import Products from '../products'


const AdminLayout = (props) => {
  const { routeKey } = props
  return (
    <AdminLayoutView
      render={(renderProps) => {
        switch (routeKey) {
          case 'users':
            return <Users {...renderProps}/>
          case 'dashboard':
            return <Dashboard {...renderProps}/>
          case 'roles':
            return <Roles {...renderProps}/>
          case 'categories':
            return <Categories {...renderProps}/>
          case 'product':
            return <Products {...renderProps}/>
          default:
            <Dashboard {...renderProps}/>
        }
      }}
    />
  )
}

export default React.memo(AdminLayout)
