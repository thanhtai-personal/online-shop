import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { ModalStyled } from './styled'
import CoreuiModal from './coreuiModal'
import modalTypes from './type'

const Modal = ({ type, children, ...nestedProps }) => {
  const [ModalWrapper, setModalWrapper] = useState(ModalStyled)

  useEffect(() => {
    switch (type) {
      case modalTypes.styledModal:
        setModalWrapper(ModalStyled)
        break;
      case modalTypes.coreuiModal:
        setModalWrapper(CoreuiModal)
        break;
      default:
        break;
    }
  }, [type])

  return (
    ReactDOM.createPortal(
      <ModalWrapper {...nestedProps}>
        {children}
      </ModalWrapper>,
      document.getElementById('modal-root')
    ))
}

export default Modal