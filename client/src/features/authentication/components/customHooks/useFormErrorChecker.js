import { useState, useEffect } from 'react'

const useFormErrorChecker = ({ ...formError }) => {
  const formErrorObj = { ...formError }
  const [isFormError, setIsFormError] = useState(false)

  useEffect(() => {
    let isError = false
    for (let key of Object.keys(formError)) {
      if (formError[key]?.isError) {
        isError = true
        break
      }
    }
    setIsFormError(isError)
  }, [formErrorObj])
  return isFormError
}

export default useFormErrorChecker
