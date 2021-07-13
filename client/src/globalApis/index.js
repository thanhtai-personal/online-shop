export const globalApisName = {
  checkAuthen: 'checkAuthen',
}

export const globalApis = {
  [globalApisName.checkAuthen]: {
    method: 'get',
    path: '/v1/authen/getAuth',
  }
}