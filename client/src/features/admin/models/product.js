import fields from 'root/commonComponents/form/fields'

const {
  ImageUpload,
  VideoEmbed,
  TextAreaWithLabel
} = fields

const text = {
  name: 'Name',
  description: 'Description',
  images: 'Images',
  video: 'Video',
  namePlaceholder: 'Enter product name...',
  descriptionPlaceholder: 'Enter product description...'
}

const productModel = {
  dataKey: 'PRODUCTS',
  name: {
    key: 'name',
    label: 'Name',
    placeholder: text.namePlaceholder,
    isForm: true,
    dataKey: 'name',
    text: {
      label: text.name,
    },
  },
  description: {
    key: 'description',
    label: 'Description',
    isForm: true,
    placeholder: text.descriptionPlaceholder,
    text: {
      label: text.description,
    },
    dataKey: 'description',
    component: TextAreaWithLabel
  },
  images: {
    key: 'images',
    label: 'Images',
    isForm: true,
    text: {
      label: text.images,
    },
    dataKey: 'images',
    component: ImageUpload,
    value: []
  },
  video: {
    key: 'video',
    label: 'Video',
    isForm: true,
    dataKey: 'video',
    text: {
      label: text.videos,
    },
    component: VideoEmbed //for custom field in form
  },
  createdBy: {
    key: 'createBy',
    label: 'Created by',
    render: (value, users) => {
      // for custom field in table
      const user = users.find((u => u.id === value)) || {}
      return <span>{user.userName || user.email || user.name}</span>
    }
  },
  createdDate: {
    key: 'createdAt',
    label: 'Created date'
  },
}

export default productModel