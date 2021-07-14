import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUsers } from './../../actions'
import UsersView from './presentation'

const Users = (props) => {
  const { getUsers, users } = props

  useEffect(() => {
    getUsers()
  }, [getUsers])

  return (<UsersView listUsers={users} />)
}

const mapState = ({ users }) => ({
  users: users.listUsers
})

const mapDispatch = {
  getUsers
}

export default connect(mapState, mapDispatch)(React.memo(Users))