const orderModel = {
  name: {
    key: 'name',
    label: 'Name'
  },
  createdBy: {
    key: 'createBy',
    label: 'Created by',
    render: (value) => {
      <span>{value}</span>
    }
  },
  createdDate: {
    key: 'createdAt',
    label: 'Created date'
  }
}

export default orderModel