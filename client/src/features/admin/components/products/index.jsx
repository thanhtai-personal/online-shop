import React, { useEffect } from 'react'
import { useCallback } from 'react'
import { connect } from 'react-redux'
import { getProducts, updateData, createProduct, getCategories } from './../../actions'
import ProductsView from './presentation'

const Products = (props) => {

  const { products, getProducts, updateData,
    model = {}, createProduct, getCategories
  } = props

  useEffect(() => {
    getProducts()
  }, [])

  const handleOption = useCallback((dataKey) => {
    dataKey === 'category' && getCategories && typeof(getCategories) && getCategories()
  }, [getCategories])

  return (<ProductsView
    listProducts={products}
    updateData={updateData}
    model={model}
    createProduct={createProduct}
    getOptions={handleOption}
  />)
}

const mapState = ({ products }) => ({
  products: products.listProducts,
  model: products.model
})

const mapDispatch = {
  getProducts,
  updateData,
  createProduct,
  getCategories
}

export default connect(mapState, mapDispatch)(React.memo(Products))