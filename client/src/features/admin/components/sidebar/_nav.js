import React from 'react'
import CIcon from '@coreui/icons-react'

const text = {
  dashboard: 'Dashboard',
  users: 'Users',
  roles: 'Roles',
  categories: 'Categories',
  products: 'Products',
  orders: 'Orders'
}

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: text.dashboard,
    to: '/admin/dashboard',
    icon: <CIcon name='cil-speedometer' customClasses='c-sidebar-nav-icon'/>
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Manage']
  },
  {
    _tag: 'CSidebarNavItem',
    name: text.users,
    to: '/admin/users',
    icon: 'cil-puzzle'
  },
  {
    _tag: 'CSidebarNavItem',
    name: text.roles,
    to: '/admin/roles',
    icon: 'cil-puzzle'
  },
  {
    _tag: 'CSidebarNavItem',
    name: text.categories,
    to: '/admin/categories',
    icon: 'cil-puzzle'
  },
  {
    _tag: 'CSidebarNavItem',
    name: text.products,
    to: '/admin/products',
    icon: 'cil-puzzle'
  },
  {
    _tag: 'CSidebarNavItem',
    name: text.orders,
    to: '/admin/orders',
    icon: 'cil-puzzle'
  },
]

export default _nav
