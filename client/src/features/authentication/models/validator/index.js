const text = {
  noSpecialChar: 'No space, no special character.',
  minLength: 'Require minimum %s characters',
  maxLength: 'Require maximum %s characters',
  required: 'this field is required'
}

const regex = {
  noSpaceNoSpecial: /[^a-zA-Z0-9]/g
}

const validator = {
  noSpaceNoSpecial: (value, message) => {
    if (!regex.noSpaceNoSpecial.test(value)) {
      return message || text.noSpecialChar
    } else {
      return true
    }
  },
  minLength: (value = '', message, option) => {
    console.log('option', option)
    const { lengthNumber } = option
    if (value.length < lengthNumber) return message || text.minLength.replace('%s', lengthNumber?.toString())
    else return true
  },
  maxLength: (value, message, option) => {
    const { lengthNumber } = option
    if (value.length > lengthNumber) return message || text.maxLength.replace('%s', lengthNumber?.toString())
    else return true
  },
  required: (value = '', message) => {
    if (value.value.trim().length === 0) return message || text.required
    else return true
  }
}

export const validatorKey = {
  noSpaceNoSpecial: 'noSpaceNoSpecial',
  maxLength: 'maxLength',
  minLength: 'minLength',
  required: 'required'
}

export default validator