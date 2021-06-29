export const authenApiNames = {
  login: 'login',
  signup: 'signup'
}

export const authenApis = {
  [authenApiNames.login]: {
    method: 'post',
    path: '/v1/authen/login',
  },
  [authenApiNames.signup]: {
    method: 'post',
    path: '/v1/authen/register',
  }
}