import React, { useEffect } from 'react'
import { useCallback } from 'react'
import { connect } from 'react-redux'
import { getCategories, updateData, createCategory } from './../../actions'
import CategoriesView from './presentation'

const Categories = (props) => {

  const { categories, getCategories,
    model, updateData, createCategory
  } = props

  useEffect(() => {
    getCategories()
  }, [])

  const handleCreateCategory = useCallback(() => {
    createCategory && typeof createCategory === 'function' && createCategory()
  }, [createCategory])

  return (<CategoriesView
    listCategories={categories}
    model={model}
    createCategory={handleCreateCategory}
    updateData={updateData}
  />)
}

const mapState = ({ categories }) => ({
  categories: categories.listCategories,
  model: categories.model
})

const mapDispatch = {
  getCategories,
  updateData,
  createCategory
}

export default connect(mapState, mapDispatch)(React.memo(Categories))