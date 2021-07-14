import React from 'react'

const ErrorCatcher = (ComposedComponent) => {
  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      console.error('catched error', error, errorInfo)
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children; 
    }
  }

  return (props) => {
    return (
      <ErrorBoundary>
       <ComposedComponent {...props}/> 
      </ErrorBoundary>
    )
  }
}

export default ErrorCatcher
