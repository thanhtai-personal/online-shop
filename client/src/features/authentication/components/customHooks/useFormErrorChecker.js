import { useMemo } from "react"

const useFormErrorChecker = (formError = {}) => {
  return useMemo(() => {
    let isError = false
    for (let key of Object.keys(formError)) {
      if (formError[key]?.isError) {
        isError = true
        break
      }
    }
    return isError
  }, [formError])
}

export default useFormErrorChecker
