import React from 'react'
import { connect } from 'react-redux'



const RegisterComponent = (props) => {
  
  return (<>
    register component  
  </>)
}

const mapState = (state) => ({
  // inputData: Util.get(state, `${FEATURE_AUTH}.${FORM_LOGIN}.data`),
})

const mapDispatch = () => {
  return ({
  })
}

export default connect(mapState, mapDispatch())(RegisterComponent)