import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getProducts } from './../../actions'
import ProductsView from './presentation'

const Products = (props) => {

  const { products, getProducts } = props

  useEffect(() => {
    getProducts()
  }, [])

  return (<ProductsView listProducts={products} />)
}

const mapState = ({ products }) => ({
  products: products.listProducts
})

const mapDispatch = {
  getProducts,
}

export default connect(mapState, mapDispatch)(React.memo(Products))