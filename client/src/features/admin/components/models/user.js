import RoleField from '../customFields/roleField'

const userModel = {
  userName: {
    key: 'userName',
    label: 'User Name'
  },
  name: {
    key: 'name',
    label: 'Name'
  },
  email: {
    key: 'email',
    label: 'Email',
  },
  role: {
    key: 'role',
    label: 'Role',
    render: (value) => (<RoleField value={value}/>)
  },
  createdDate: {
    key: 'createdAt',
    label: 'Created date'
  }
}

export default userModel