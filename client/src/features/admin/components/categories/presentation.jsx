import React, { useState, useCallback } from 'react'
import { CategoryViewStyled, CardActionStyled } from './styled'
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CButton,
  CCardTitle
} from '@coreui/react'
import categoryModel from '../models/category'
import Table from 'root/commonComponents/coreui/table'
import Modal from 'root/commonComponents/modal'
import modalTypes from 'root/commonComponents/modal/type'

const text = {
  categoryManagement: 'Categories Management',
  createCategory: 'Add new category',
  createCategoryText: {
    title: 'Create category'
  }
}

const CategoriesView = (props) => {
  const { listCategories, take = 10, skip = 0 } = props

  const [isOpenModalCreate, setIsOpenModalCreate] = useState(false)

  const toggleModal = useCallback(() => {
    setIsOpenModalCreate(!isOpenModalCreate)
  }, [isOpenModalCreate, setIsOpenModalCreate])

  return (<CategoryViewStyled>
    <CCard>
      <CCardHeader align={'center'} tag={'div'}>
        <CCardTitle>{text.categoryManagement}</CCardTitle>
        <CardActionStyled>
          <CButton
            onClick={toggleModal}
            className='mr-1 action-btn'
            color={'info'}
            shape={'outline'}
          >{text.createCategory}</CButton>
        </CardActionStyled>
      </CCardHeader>
      <CCardBody>
        <Table model={categoryModel} data={listCategories} options={{ pagination: true, take, skip }} />
      </CCardBody>
      <CCardFooter>
      </CCardFooter>
    </CCard>
    <Modal type={modalTypes.coreuiModal}
      show={isOpenModalCreate}
      onClose={toggleModal}
      text={text.createCategoryText}
    >
    </Modal>
  </CategoryViewStyled>)
}

export default React.memo(CategoriesView)