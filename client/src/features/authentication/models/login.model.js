import { validatorKey } from '../validator'

let text = {
  userNameMinLength: 'User name is required more than %s characters',
  userNameMaxLength: 'User name is required less than %s characters',
  passwordMinLength: 'Password is required more than %s characters',
  passwordMaxLength: 'Password is required less than %s characters',
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
        params: [text.userNameMinLength.replace('%s', '8'), { lengthNumber: 8 }]
      },
      {
        key: validatorKey.maxLength,
        params: [text.userNameMaxLength.replace('%s', '100'), { lengthNumber: 50 }]
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
        params: [text.passwordMinLength.replace('%s', '8'), { lengthNumber: 8 }]
      }, {
        key: validatorKey.required,
        params: [text.passwordRequired]
      }, {
        key: validatorKey.maxLength,
        params: [text.passwordMaxLength.replace('%s', '50'), { lengthNumber: 50 }]
      }
    ],
    error: {}
  }
}

export default LoginModel