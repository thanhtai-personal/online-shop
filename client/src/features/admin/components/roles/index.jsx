import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getRoles } from './../../actions'
import RolesView from './presentation'

const Roles = (props) => {
  const { getRoles, roles } = props

  useEffect(() => {
    getRoles()
  }, [getRoles])

  return (<RolesView listRoles={roles} />)
}

const mapState = ({ roles }) => ({
  roles: roles.listRoles
})

const mapDispatch = {
  getRoles
}

export default connect(mapState, mapDispatch)(React.memo(Roles))