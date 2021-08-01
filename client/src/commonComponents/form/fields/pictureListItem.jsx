import React from 'react'
import { useCallback } from 'react'

const PictureListItem = (props) => {
  const { image, index, onClickItem } = props

  const handleImageClick = useCallback(() => {
    onClickItem && typeof onClickItem === 'function' && onClickItem(index)
  }, [onClickItem, index])

  return (<picture onClick={handleImageClick}
    key={`image-${image.name}-${index}`}>
    <img src={image.src || window.URL.createObjectURL(image)} alt={image.name} />
  </picture>)
}

export default PictureListItem