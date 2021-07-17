import React, { useState, useCallback } from 'react'
import { ProductViewStyled, CardActionStyled } from './styled'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CButton
} from '@coreui/react'
import Table from 'root/commonComponents/table'
import Modal from 'root/commonComponents/modal'
import modalTypes from 'root/commonComponents/modal/type'
import formTypes from 'root/commonComponents/form/types'
import Form from 'root/commonComponents/form'

const text = {
  productManagement: 'Products Management',
  createProduct: 'Add new Product'
}

const ProductsView = (props) => {
  const { listProducts, take = 10, skip = 0
    , updateData, model
  } = props

  const [isOpenModalCreate, setIsOpenModalCreate] = useState(false)

  const toggleModal = useCallback(() => {
    setIsOpenModalCreate(!isOpenModalCreate)
  }, [isOpenModalCreate, setIsOpenModalCreate])

  return (<ProductViewStyled>
    <CCard>
      <CCardHeader align={'center'} tag={'div'}>
        <CCardTitle>{text.productManagement}</CCardTitle>
        <CardActionStyled>
          <CButton
            onClick={toggleModal}
            className='mr-1 action-btn'
            color={'info'}
            shape={'outline'}
          >{text.createProduct}</CButton>
        </CardActionStyled>
      </CCardHeader>
      <CCardBody>
        <Table model={model} data={listProducts} options={{ pagination: true, take, skip }} />
      </CCardBody>
    </CCard>
    <Modal type={modalTypes.coreuiModal}
      show={isOpenModalCreate}
      onClose={toggleModal}
      text={text.createCategoryText}
    >
      <Form type={formTypes.coreuiForm}
        model={model}
        onUpdateData={updateData}
      />
    </Modal>
  </ProductViewStyled>)
}

export default React.memo(ProductsView)