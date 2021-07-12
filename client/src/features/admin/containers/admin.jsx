import React, { Suspense, useEffect } from 'react'
import LoadingComponent from 'root/commonComponents/loading'
import '@coreui/coreui/scss/coreui.scss'

const AdminLayout = React.lazy(() => import('../components/layout'))

const AdminContainer = (props) => {
  const { setup, unset, ...nested } = props
  useEffect(() => {
    setup()
    return () => {
      unset()
    }
  }, [setup, unset])

  return (
    <Suspense fallback={<LoadingComponent />}>
      <AdminLayout {...nested} />
    </Suspense>
  )
}

export default React.memo(AdminContainer)