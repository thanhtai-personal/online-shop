import React from 'react'
import { RolesViewStyled } from './styled'
import {
  CCard,
  CCardBody,
  CCardHeader,
} from '@coreui/react'
import roleModel from '../models/role'
import Table from 'root/commonComponents/coreui/table'

const text = {
  roleManagement: 'Roles Management'
}

const RolesView = (props) => {
  const { listRoles, take = 10, skip = 0 } = props
  return (<RolesViewStyled>
    <CCard>
      <CCardHeader align={'center'} tag={'div'}>{text.roleManagement}</CCardHeader>
      <CCardBody>
        <Table model={roleModel} data={listRoles} options={{ pagination: true, take, skip }} />
      </CCardBody>
    </CCard>
  </RolesViewStyled>)
}

export default React.memo(RolesView)