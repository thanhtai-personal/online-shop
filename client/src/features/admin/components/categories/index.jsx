import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCategories } from './../../actions'
import CategoriesView from './presentation'

const Categories = (props) => {

  const { Categories, getCategories } = props

  useEffect(() => {
    getCategories()
  }, [])

  return (<CategoriesView listCategories={Categories} />)
}

const mapState = ({ categories }) => ({
  categories: categories.listCategories
})

const mapDispatch = {
  getCategories,
}

export default connect(mapState, mapDispatch)(React.memo(Categories))