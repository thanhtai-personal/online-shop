import React, { Suspense, useEffect } from 'react'
import LoadingComponent from 'root/commonComponents/loading'

const DashboardComponent = React.lazy(() => import('../components/dashboard'))

const DashboardContainer = (props) => {
  const { setup, unset, ...nested } = props
  useEffect(() => {
    setup()
    return () => {
      unset()
    }
  }, [setup, unset])

  return (
    <Suspense fallback={<LoadingComponent />}>
      <DashboardComponent {...nested} />
    </Suspense>
  )
}

export default DashboardContainer