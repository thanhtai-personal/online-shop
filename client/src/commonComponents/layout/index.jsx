import React from 'react'

const Layout = ({ children, ...props }) => {
  return (<div {...props}>{children}</div>)
}

Layout.Header = ({ children, ...props }) => {
  return <React.Fragment {...props}>
    {children}
  </React.Fragment>
}

Layout.Sidebar = ({ children, ...props }) => {
  return <React.Fragment {...props}>
    {children}
  </React.Fragment>
}

Layout.Content = ({ children, ...props }) => {
  return <React.Fragment {...props}>
    {children}
  </React.Fragment>
}

Layout.Footer = ({ children, ...props }) => {
  return <React.Fragment {...props}>
    {children}
  </React.Fragment>
}

export default Layout