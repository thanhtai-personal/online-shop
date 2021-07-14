import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getRoles, getUsers } from './../../actions'
import UsersView from './presentation'

const Users = (props) => {
  const { getUsers, getRoles, users } = props

  useEffect(() => {
    getUsers()
    getRoles()
  }, [])

  return (<UsersView listUsers={users} />)
}

const mapState = ({ users }) => ({
  users: users.listUsers
})

const mapDispatch = {
  getUsers,
  getRoles
}

export default connect(mapState, mapDispatch)(React.memo(Users))