import React, { useCallback, useState, useEffect, useMemo } from 'react'
import {
  CLabel,
  CInputFile,
  CTextarea
} from '@coreui/react'
import defaultUploadImage from 'root/assets/images/defaultUpload.png'
import { ImageUploadStyled } from './styled'

const textDefault = {
  imageUrlPlaceholder: 'Enter image url...',
  imageUrlLabel: 'Image URL (split by ,)',
  imageFileLabel: 'Upload images'
}

const ImageUpload = (props) => {
  const { placeholder, autoComplete, text = {}
    , requiredGoogleUpload = false, style, onChange
    , dataKey, value = [], isLinkedGoogle = false
    , disabled = false
    , ...nestedProps
  } = props

  const [selectedImage, setSelectedImage] = useState(null)

  const handleChangeFileInput = useCallback((e) => {
    let newImages = []
    for (let file of e.target.files) {
      const imageSrc = window.URL.createObjectURL(file)
      newImages.push({
        src: imageSrc,
        ...file
      })
    }
    onChange && typeof onChange === 'function' && onChange(dataKey, newImages)
  }, [onChange, dataKey])

  const handleChangeUrlInput = useCallback((e) => {
    const imageUrls = e.target.value.split(',').map((src) => ({
      src
    }))
    onChange && typeof onChange === 'function' && onChange(dataKey, imageUrls)
  }, [onChange, dataKey])

  const handleImageClick = useCallback((index) => {
    setSelectedImage(value[index])
  }, [setSelectedImage, value])

  useEffect(() => {
    value[0] && setSelectedImage(value[0])
  }, [value])

  const imageUrls = useMemo(() => {
    let imageUrls = ''
    for (let v of value) {
      imageUrls = `${imageUrls}${imageUrls && ','}${v?.name || 'unnamed image'}`
    }
    return imageUrls
  }, [value])

  return (
    <ImageUploadStyled>
      <div className={'input-panel'}>
        <CLabel htmlFor={'url-input'}>{textDefault.imageUrlLabel}</CLabel>
        <CTextarea
          type={'url'}
          id={'url-input'}
          name={'url-input'}
          placeholder={textDefault.imageUrlPlaceholder}
          autoComplete={autoComplete}
          onChange={handleChangeUrlInput}
          value={imageUrls}
          disabled
          rows={5}
        />
        <CLabel className={'margin-top-1em'} htmlFor={'image-input'}>{textDefault.imageFileLabel}</CLabel>
        <CInputFile
          // type={'file'}
          onChange={handleChangeFileInput}
          id={'image-input'}
          name={'image-input'}
          accept={'image/*'}
          multiple
          disabled={!isLinkedGoogle || disabled}
          {...nestedProps}
        />
      </div>
      <div className={'picture-showing'}>
        <picture
          key={`showing-image`}>
          <img src={selectedImage ? 
            selectedImage.src || window.URL.createObjectURL(selectedImage)
            : defaultUploadImage
          } alt={selectedImage?.name || 'default-image'}
          />
        </picture>
        <div className={'picture-list-items'}>{value && value.map((_image, index) => (
          <picture onClick={() => {
            handleImageClick(index)
          }}
            key={`image-${_image.name}-${index}`}>
            <img src={_image.src || window.URL.createObjectURL(_image)} alt={_image.name}/>
          </picture>
        ))}
        </div>
      </div>
    </ImageUploadStyled>
  )
}

export default ImageUpload