import React from 'react'
import { UsersViewStyled } from './styled'
import {
  CCard,
  CCardBody,
  CCardHeader,
} from '@coreui/react'
import userModel from '../models/user'
import Table from 'root/commonComponents/table'

const text = {
  userManagement: 'Users Management'
}

const UsersView = (props) => {
  const { listUsers, take = 10, skip = 0 } = props
  return (<UsersViewStyled>
    <CCard>
      <CCardHeader align={'center'} tag={'div'}>{text.userManagement}</CCardHeader>
      <CCardBody>
        <Table model={userModel} data={listUsers} options={{ pagination: true, take, skip }} />
      </CCardBody>
    </CCard>
  </UsersViewStyled>)
}

export default React.memo(UsersView)