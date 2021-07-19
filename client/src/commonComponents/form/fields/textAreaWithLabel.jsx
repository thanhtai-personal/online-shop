import React, { useCallback } from 'react'
import {
  CLabel,
  CTextarea,
  CFormText,
} from '@coreui/react'

const TextWithLabel = (props) => {
  const { value, onChange, style
    , htmlFor, type, id, dataKey
    , name, placeholder, autoComplete
    , text = {}, rows = 15, ...nestedProps
  } = props

  const handleChange = useCallback((e) => {
    onChange && typeof onChange === 'function' && onChange(dataKey, e.target.value)
  }, [onChange, dataKey])

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
        onChange={handleChange}
        {...nestedProps}
      />
      {text.formText && <CFormText className='help-block'>{text.formText}</CFormText>}
    </div>
  )
}

export default TextWithLabel