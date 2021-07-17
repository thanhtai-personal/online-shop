import React from 'react'
import {
  CLabel,
  CTextarea,
  CFormText,
} from '@coreui/react'

const TextWithLabel = (props) => {
  const { style, htmlFor, type, id, name, placeholder, autoComplete, text = {}, rows = 15, ...nestedProps } = props
  return (
    <div style={style || { width: '50%' }}>
      <CLabel htmlFor={htmlFor}>{text.label}</CLabel>
      <CTextarea
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        rows={rows}
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