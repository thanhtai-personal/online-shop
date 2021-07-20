import React, { useCallback } from 'react'
import {
  CLabel,
} from '@coreui/react'

import MultiSelect from 'root/commonComponents/coreui/multiSelect'

const MultiSelectDropdown = (props) => {
  const { value, onChange, options
    , dataKey, style, htmlFor, title, getOptions
    , type, id, name, placeholder, autoComplete, text = {}, ...nestedProps } = props

  const handleChange = useCallback((e) => {
    onChange && typeof onChange === 'function' && onChange(dataKey, e.target.value)
  }, [onChange, dataKey])

  return (
    <div style={style || { width: '50%' }}>
      <CLabel htmlFor={htmlFor}>{text.label}</CLabel>
      <MultiSelect
        options={options || []}
        title={title}
        value={value}
        onChange={handleChange}
        getOptions={getOptions}
        dataKey={dataKey}
        {...nestedProps}
      />
    </div>
  )
}

export default MultiSelectDropdown