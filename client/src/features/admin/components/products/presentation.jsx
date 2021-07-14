import React from 'react'
import { ProductViewStyled } from './styled'
import {
  CCard,
  CCardBody,
  CCardHeader,
} from '@coreui/react'
import productModel from '../models/product'
import Table from 'root/commonComponents/table'

const text = {
  productManagement: 'Products Management'
}

const ProductsView = (props) => {
  const { listProducts, take = 10, skip = 0 } = props
  return (<ProductViewStyled>
    <CCard>
      <CCardHeader align={'center'} tag={'div'}>{text.productManagement}</CCardHeader>
      <CCardBody>
        <Table model={productModel} data={listProducts} options={{ pagination: true, take, skip }} />
      </CCardBody>
    </CCard>
  </ProductViewStyled>)
}

export default React.memo(ProductsView)