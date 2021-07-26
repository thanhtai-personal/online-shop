const text = {
  noSpecialChar: 'No space, no special character.',
  minLength: 'Require minimum %s characters',
  maxLength: 'Require maximum %s characters',
  required: 'this field is required'
}

export const validatorKey = {
  noSpaceNoSpecial: 'noSpaceNoSpecial',
  maxLength: 'maxLength',
  minLength: 'minLength',
  required: 'required'
}

const regex = {
  noSpaceNoSpecial: /[^a-zA-Z0-9]/g
}

const validator = {
  [validatorKey.noSpaceNoSpecial]: (value, message) => {
    if (regex.noSpaceNoSpecial.test(value)) {
      return message || text.noSpecialChar
    } else {
      return true
    }
  },
  [validatorKey.minLength]: (value = '', message, option) => {
    const { lengthNumber } = option
    if (value.length < lengthNumber) return message || text.minLength.replace('%s', lengthNumber?.toString())
    else return true
  },
  [validatorKey.maxLength]: (value, message, option) => {
    const { lengthNumber } = option
    if (value.length > lengthNumber) return message || text.maxLength.replace('%s', lengthNumber?.toString())
    else return true
  },
  [validatorKey.required]: (value = '', message) => {
    if (value.trim().length === 0) return message || text.required
    else return true
  }
}

export default validator