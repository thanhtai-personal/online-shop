import React, { useCallback } from 'react'
import {
  CLabel,
  CInput,
  CFormText,
} from '@coreui/react'

const TextWithLabel = (props) => {
  const { value, onChange, dataKey, style, htmlFor, type, id, name, placeholder, autoComplete, text = {}, ...nestedProps } = props

  const handleChange = useCallback((e) => {
    onChange && typeof onChange === 'function' && onChange(dataKey, e.target.value)
  }, [onChange, dataKey])

  return (
    <div key={`text-with-label-${id}`} style={style || { width: '50%' }}>
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
        onChange={handleChange}
        {...nestedProps}
      />
      {text.formText && <CFormText className='help-block'>{text.formText}</CFormText>}
    </div>
  )
}

export default TextWithLabel