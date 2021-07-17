import React from 'react'
import {
  CLabel,
  CInput,
  CFormText,
} from '@coreui/react'

const TextWithLabel = (props) => {
  const { style, htmlFor, type, id, name, placeholder, autoComplete, text = {}, ...nestedProps } = props
  return (
    <div style={ style || { width: '50%' }}>
      <CLabel htmlFor={htmlFor}>{text.label}</CLabel>
      <CInput
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        style={{
          width: '100%'
        }}
        {...nestedProps}
      />
      {text.formText && <CFormText className='help-block'>{text.formText}</CFormText>}
    </div>
  )
}

export default TextWithLabel