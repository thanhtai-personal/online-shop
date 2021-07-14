import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getOrders } from './../../actions'
import OrdersView from './presentation'

const Orders = (props) => {

  const { orders, getOrders } = props

  useEffect(() => {
    getOrders()
  }, [])

  return (<OrdersView listOrders={orders} />)
}

const mapState = ({ orders }) => ({
  orders: orders.listOrders
})

const mapDispatch = {
  getOrders,
}

export default connect(mapState, mapDispatch)(React.memo(Orders))