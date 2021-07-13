import { CHECK_AUTHEN } from './types'

const checkAuthen = (cookiesData) => {
  return {
    type: CHECK_AUTHEN,
    data: cookiesData.token
  }
}

export default checkAuthen