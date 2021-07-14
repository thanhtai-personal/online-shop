import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

const RoleField = (props) => {
  const { value, listRoles = [] } = props
  const [role, setRole] = useState('')

  useEffect(() => {
    const role = listRoles.find((_role) => (_role.id === value))
    setRole(role?.name || '')
  }, [value, listRoles])

  return (
    <span>{role}</span>
  )
}

const mapState = ({ roles }) => ({
  listRoles: roles?.listRoles
})

const mapProps = {}

export default connect(mapState, mapProps)(RoleField)