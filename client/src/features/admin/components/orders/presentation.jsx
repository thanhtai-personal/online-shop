import React from 'react'
import { OrderViewStyled } from './styled'
import {
  CCard,
  CCardBody,
  CCardHeader,
} from '@coreui/react'
import orderModel from '../../models/order'
import Table from 'root/commonComponents/table'

const text = {
  orderManagement: 'Orders Management'
}

const OrdersView = (props) => {
  const { listOrders, take = 10, skip = 0 } = props
  return (<OrderViewStyled>
    <CCard>
      <CCardHeader align={'center'} tag={'div'}>{text.orderManagement}</CCardHeader>
      <CCardBody>
        <Table model={orderModel} data={listOrders} options={{ pagination: true, take, skip }} />
      </CCardBody>
    </CCard>
  </OrderViewStyled>)
}

export default React.memo(OrdersView)