import { validatorKey } from './validator'

const text = {
  userNameMinLength: 'User name is required more than %s chracters',
  userNameMaxLength: 'User name is required less than %s chracters',
  passwordMinLength: 'Password is required more than %s chracters',
  passwordMaxLength: 'Password is required less than %s chracters',
  userNameNoSpecialNoSpace: 'User name is required without special keys or spaces',
  passwordRequired: 'Password is required',
  userNameRequired: 'UserName is required'
}

const LoginModel = {
  userName: {
    name: 'userName',
    value: '',
    validators: [
      {
        key: validatorKey.required,
        params: [text.userNameRequired]
      },
      {
        key: validatorKey.noSpaceNoSpecial,
        params: [text.userNameNoSpecialNoSpace]
      },
      {
        key: validatorKey.minLength,
        params: [text.userNameMinLength, 6]
      },
      {
        key: validatorKey.maxLength,
        params: [text.userNameMaxLength, 100]
      }
    ],
    error: {}
  },
  password: {
    name: 'password',
    value: '',
    validators: [
      {
        key: validatorKey.minLength,
        params: [text.passwordMinLength, { lengthNumber: 8 }]
      }, {
        key: validatorKey.required,
        params: [text.passwordRequired]
      }, {
        key: validatorKey.maxLength,
        params: [text.passwordMaxLength, { lengthNumber: 50 }]
      }
    ],
    error: {}
  }
}

export default LoginModel