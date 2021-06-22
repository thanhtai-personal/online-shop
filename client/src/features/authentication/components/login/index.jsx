import React from 'react'
import { connect } from 'react-redux'



const LoginComponent = (props) => {
  
  return (<>
    login component  
  </>)
}

const mapState = (state) => ({
  // inputData: Util.get(state, `${FEATURE_AUTH}.${FORM_LOGIN}.data`),
})

const mapDispatch = () => {
  return ({
  })
}

export default connect(mapState, mapDispatch())(LoginComponent)