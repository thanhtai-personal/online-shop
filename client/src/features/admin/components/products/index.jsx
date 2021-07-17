import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getProducts, updateData } from './../../actions'
import ProductsView from './presentation'

const Products = (props) => {

  const { products, getProducts, updateData, model = {} } = props

  useEffect(() => {
    getProducts()
  }, [])

  return (<ProductsView
    listProducts={products}
    updateData={updateData}
    model={model}
  />)
}

const mapState = ({ products }) => ({
  products: products.listProducts,
  model: products.model
})

const mapDispatch = {
  getProducts,
  updateData
}

export default connect(mapState, mapDispatch)(React.memo(Products))