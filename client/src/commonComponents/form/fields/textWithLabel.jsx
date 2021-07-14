import React from 'react'
import {
  CLabel,
  CInput,
  CFormText,
} from '@coreui/react'

const TextWithLabel = (props) => {
  const { htmlFor, type, id, name, placeholder, autoComplete, text = {} } = props
  return (
    <>
      <CLabel htmlFor={htmlFor}>{text.label}</CLabel>
      <CInput
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
      <CFormText className='help-block'>{text.formText}</CFormText>
    </>
  )
}

export default TextWithLabel