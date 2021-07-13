import React from 'react'
import Layout from 'root/commonComponents/layout'
import Sidebar from '../sidebar'
import Footer from '../footer'


const AdminLayoutView = (props) => {
  return (
    <Layout className='c-app c-default-layout'>
      <Layout.Sidebar>
        <Sidebar />
      </Layout.Sidebar>
      <div className='c-wrapper'>
        <div className='c-body'>
          <Layout.Content>
            {props.render({})}
          </Layout.Content>
        </div>
        <Footer />
      </div>
    </Layout>
  )
}

export default React.memo(AdminLayoutView)
