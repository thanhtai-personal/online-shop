import React from 'react'
import { CategoryViewStyled } from './styled'
import {
  CCard,
  CCardBody,
  CCardHeader,
} from '@coreui/react'
import categoryModel from '../models/category'
import Table from 'root/commonComponents/coreui/table'

const text = {
  categoryManagement: 'Categorys Management'
}

const CategorysView = (props) => {
  const { listCategorys, take = 10, skip = 0 } = props
  return (<CategoryViewStyled>
    <CCard>
      <CCardHeader align={'center'} tag={'div'}>{text.categoryManagement}</CCardHeader>
      <CCardBody>
        <Table model={categoryModel} data={listCategorys} options={{ pagination: true, take, skip }} />
      </CCardBody>
    </CCard>
  </CategoryViewStyled>)
}

export default React.memo(CategorysView)