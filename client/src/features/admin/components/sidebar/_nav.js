import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/admin/dashboard',
    icon: <CIcon name='cil-speedometer' customClasses='c-sidebar-nav-icon'/>
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Manage']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'User',
    to: '/admin/users',
    icon: 'cil-puzzle'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Role',
    to: '/admin/roles',
    icon: 'cil-puzzle'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Categories',
    to: '/admin/categories',
    icon: 'cil-puzzle'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Products',
    to: '/admin/products',
    icon: 'cil-puzzle'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Orders',
    to: '/admin/orders',
    icon: 'cil-puzzle'
  },
]

export default _nav
