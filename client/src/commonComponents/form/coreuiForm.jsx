import React from 'react'
import {
  CButton,
  CForm,
  CFormGroup,
  CFormText
} from '@coreui/react'
import fields from './fields'
import { useCallback } from 'react'
const { TextWithLabel } = fields

const text = {
  create: 'Create'
}

const CoreUIForm = (props) => {
  const { render, model, className, onSubmit, onUpdateData, title, getOptions, ...nestedProps } = props

  const handleClickSubmit = useCallback(() => {
    onSubmit && typeof onSubmit === 'function' && onSubmit()
  }, [onSubmit])

  const handleOptions = useCallback((dataKey) => {
    getOptions && typeof getOptions === 'function' && getOptions(dataKey)
  }, [getOptions])

  const onChangeField = useCallback((dataKey, value, option) => {
    onUpdateData && typeof onUpdateData === 'function' && onUpdateData(model.dataKey, dataKey, value, option)
  }, [onUpdateData, model])

  return (<>
  <CForm action='' method='post' className={className || 'mb-3'} {...nestedProps}>
    <CFormText style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>{title}</CFormText>
    {Object.keys(model).filter((key1) => (model[key1].isForm)).map((key2, index) => {
      const { component, key, isForm, ...nestedProperties } = model[key2]
      return <CFormGroup key={`field-${key2}-${index}`} style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margitTop: '2em',
        paddingTop: '2em',
        paddingBottom: '1em'
      }}>
        {index !== 0 && <div style={{
          width: '60%',
          border: 'solid black 1px',
          height: '1px',
          marginBottom: '1em',
          opacity: 0.7
        }} ></div>}
        {component ? component({ ...nestedProperties, onChange: onChangeField, getOptions: handleOptions })
          : <TextWithLabel
            onChange={onChangeField}
            {...nestedProperties} />}
      </CFormGroup>
    }
    )}
  </CForm>
    <div className='actions'>
      <CButton onClick={handleClickSubmit} color='info' >{text.create}</CButton>
    </div>
  </>)
}

export default CoreUIForm