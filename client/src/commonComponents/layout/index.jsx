import React from 'react'

const Layout = ({ children, ...props }) => {
  return (<div {...props}>{children}</div>)
}

Layout.Header = ({ children, className, ...props }) => {
  return <React.Fragment className={`layout-header ${className}`} {...props}>
    {children}
  </React.Fragment>
}

Layout.Sidebar = ({ children, className, ...props }) => {
  return <React.Fragment className={`layout-sidebar ${className}`} {...props}>
    {children}
  </React.Fragment>
}

Layout.Content = ({ children, className, ...props }) => {
  return <React.Fragment className={`layout-content ${className}`} {...props}>
    {children}
  </React.Fragment>
}

Layout.Footer = ({ children, className, ...props }) => {
  return <React.Fragment className={`layout-footer ${className}`} {...props}>
    {children}
  </React.Fragment>
}

export default Layout