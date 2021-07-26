import React from 'react'
import {
  CButton,
  CForm,
  CFormGroup,
  CFormText
} from '@coreui/react'
import fields from './fields'
import { useCallback } from 'react'
import { FormGroupStyled } from './styled'
const { TextWithLabel } = fields

const text = {
  create: 'Create'
}

const CoreUIForm = (props) => {
  const { render, model, className
    , onSubmit, onUpdateData, title
    , getOptions, isFormValidated, onValidateField, ...nestedProps } = props

  const handleClickSubmit = useCallback(() => {
    onSubmit && typeof onSubmit === 'function' && onSubmit()
  }, [onSubmit])

  const handleOptions = useCallback((dataKey) => {
    getOptions && typeof getOptions === 'function' && getOptions(dataKey)
  }, [getOptions])

  const onChangeField = useCallback((dataKey, value, option) => {
    onUpdateData && typeof onUpdateData === 'function' && onUpdateData(model.dataKey, dataKey, value, option)
    onValidateField && typeof onValidateField === 'function' && onValidateField(model.dataKey, dataKey, value, option)
  }, [onUpdateData, model])

  return (<>
    <CForm wasValidated={isFormValidated} className={`form ${className || 'mb-3'}`} {...nestedProps}>
      <CFormText className={'title'}>{title}</CFormText>
      {Object.keys(model).filter((key1) => (model[key1].isForm)).map((key2, index) => {
        const { component, key, isForm, ...nestedProperties } = model[key2]
        return <FormGroupStyled>
          <CFormGroup class='form-group' key={`field-${key2}-${index}`}>
            {index !== 0 && <div className='top-line'></div>}
            {component ? component({ ...nestedProperties, onChange: onChangeField, getOptions: handleOptions })
              : <TextWithLabel
                onChange={onChangeField}
                {...nestedProperties} />}
          </CFormGroup>
        </FormGroupStyled>
      }
      )}
    </CForm>
    <div className='actions'>
      <CButton onClick={handleClickSubmit} color='info' >{text.create}</CButton>
    </div>
  </>)
}

export default CoreUIForm