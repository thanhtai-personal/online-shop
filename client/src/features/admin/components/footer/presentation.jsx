import React from 'react'
import { CFooter } from '@coreui/react'

const FooterView = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://tttgalaxy.co.uk/profile" target="_blank" rel="noopener noreferrer">TTTGalaxy</a>
        <span className="ml-1">&copy; 2021.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="https://tttgalaxy.co.uk/profile" target="_blank" rel="noopener noreferrer">TTTGalaxy</a>
      </div>
    </CFooter>
  )
}

export default React.memo(FooterView)
