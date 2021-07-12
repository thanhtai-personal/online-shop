import React from 'react'
import ReactDOM from 'react-dom'

import { ModalStyled } from './styled'

const useModal = ({ children }) => (
  ReactDOM.createPortal(
    <ModalStyled>
      {children}
    </ModalStyled>,
    document.getElementById('modal-root')
  )
)

export default useModal