import React from 'react'
import { FormStyled, CustomStyledCoreUI } from './styled'
import CoreUIForm from './coreuiForm'
import formTypes from './types'

const Form = ({ type, ...nestedProps }) => {
  switch (type) {
    case formTypes.formStyled:
      return (<FormStyled {...nestedProps}>
      </FormStyled>)
    case formTypes.coreuiForm:
      return (<CustomStyledCoreUI>
        <CoreUIForm {...nestedProps} />
      </CustomStyledCoreUI>)
    default:
      return (<FormStyled {...nestedProps}>
      </FormStyled>)
  }
}

export default Form