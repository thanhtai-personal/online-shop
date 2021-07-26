import fields from 'root/commonComponents/form/fields'

const {
  ImageUpload,
  VideoEmbed,
  TextAreaWithLabel,
  MultiSelectDropdown
} = fields

const text = {
  name: 'Name',
  description: 'Description',
  images: 'Images',
  video: 'Video',
  videos: 'Videos',
  namePlaceholder: 'Enter product name...',
  descriptionPlaceholder: 'Enter product description...',
  categories: 'Categories',
  category: 'Category',
  categoriesSelection: 'Select categories',
  createdBy: 'Created by',
  createdDate: 'Created date'
}

const productModel = {
  dataKey: 'PRODUCTS',
  name: {
    key: 'name',
    label: text.name,
    placeholder: text.namePlaceholder,
    isForm: true,
    dataKey: 'name',
    text: {
      label: text.name,
    },
  },
  category: {
    key: 'category',
    label: text.category,
    title: text.categoriesSelection,
    isForm: true,
    dataKey: 'category',
    text: {
      label: text.categories,
    },
    value: [],
    component: MultiSelectDropdown
  },
  description: {
    key: 'description',
    label: text.description,
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
    label: text.images,
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
    label: text.video,
    isForm: true,
    dataKey: 'video',
    text: {
      label: text.videos,
    },
    component: VideoEmbed //for custom field in form
  },
  createdBy: {
    key: 'createBy',
    label: text.createdBy,
    render: (value, users = []) => {
      // for custom field in table
      const user = users.find((u => u.id === value)) || {}
      return <span>{user.userName || user.email || user.name}</span>
    }
  },
  createdDate: {
    key: 'createdAt',
    label: text.createdDate
  },
}

export default productModel