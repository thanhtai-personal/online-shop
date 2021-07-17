const text = {
  name: 'Name',
  formText: '',
  categotyNamePlaceholder: 'Enter name...'
}

const categoryModel = {
  name: {
    key: 'name',
    label: 'Name',
    isForm: true,
    text: {
      label: text.name,
      formText: text.formText
    },
    type: 'text',
    id: 'name-category',
    name: 'name-category',
    placeholder: text.categotyNamePlaceholder,
    autoComplete: 'name-category',
    htmlFor: 'name-category'
  },
  createdDate: {
    key: 'createdAt',
    label: 'Created date'
  }
}

export default categoryModel