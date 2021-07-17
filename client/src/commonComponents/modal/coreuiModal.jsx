import React from 'react'
import {
  CModal,
  CModalBody,
  CModalHeader,
  CModalFooter,
  CModalTitle,
} from '@coreui/react'

const CoreUIModal = (props) => {
  const { text = {}, children, size, modalHeader, modalFooter, color, ...nestedProps } = props

  return (<CModal color={color || 'warning'} size={size || 'xl'} {...nestedProps}>
    <CModalHeader style={{ justifyContent: 'center', alignItems: 'center'}}>
      <CModalTitle>
        <span style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>{text.title}</span>
      </CModalTitle>
      {modalHeader && typeof modalHeader === 'function' && modalHeader()}
    </CModalHeader>
    <CModalBody>
      {children}
    </CModalBody>
    <CModalFooter >
      {modalFooter && typeof modalFooter === 'function' && modalFooter()}
    </CModalFooter>
  </CModal >)
}

export default React.memo(CoreUIModal)