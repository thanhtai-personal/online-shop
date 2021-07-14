import React from 'react'
import {
  CForm,
  CLabel,
  CInput,
  CFormText,
  CFormGroup
} from '@coreui/react'
import fields from './fields'
const { TextWithLabel } = fields

const CoreUIForm = (props) => {
  const { render, model, ...nestedProps } = props

  return (<CForm action='' method='post' {...nestedProps}>
    <CFormGroup>
      <TextWithLabel
        htmlFor='nf-email'
        type='email'
        id='nf-email'
        name='nf-email'
        placeholder='Enter Email..'
        autoComplete='email'
        text={{
          label: 'test',
          formText: 'test form'
        }}
      />
    </CFormGroup>
    <CFormGroup>
      <CLabel htmlFor='nf-password'>Password</CLabel>
      <CInput
        type='password'
        id='nf-password'
        name='nf-password'
        placeholder='Enter Password..'
        autoComplete='current-password'
      />
      <CFormText className='help-block'>Please enter your password</CFormText>
    </CFormGroup>
  </CForm>
  )
}

export default CoreUIForm