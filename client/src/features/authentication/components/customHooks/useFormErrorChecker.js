import { useState, useMemo } from "react"

const useFormErrorChecker = (formError = {}) => {

  const { userName, password } = formError

  const [isFormError, setIsFormError] = useState(true)

  useMemo(() => {
    let isError = userName.isError || password.isError
    // for (let key of Object.keys(formError)) {
    //   if (formError[key]) {
    //     isError = true
    //     break;
    //   }
    // }
    setIsFormError(isError)
  }, [userName.isError, password.isError])

  return isFormError
}

export default useFormErrorChecker