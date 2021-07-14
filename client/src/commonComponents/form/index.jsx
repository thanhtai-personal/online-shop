import React from 'react'
import { FormStyled } from './styled'
import CoreUIForm from './coreuiForm'
import formTypes from './types'

const Form = ({ type, ...nestedProps }) => {
  switch (type) {
    case formTypes.formStyled:
      return (<FormStyled {...nestedProps}>
      </FormStyled>)
    case formTypes.coreuiForm:
      return (<CoreUIForm {...nestedProps}>
      </CoreUIForm>)
    default:
      return (<FormStyled {...nestedProps}>
      </FormStyled>)
  }
}

export default Form