import React, { useCallback, useState } from 'react'
import {
  CLabel,
  CInputFile,
  CTextarea
} from '@coreui/react'
import defaultUploadImage from 'root/assets/images/defaultUpload.png'
import { useEffect } from 'react'

const textDefault = {
  imageUrlPlaceholder: 'Enter image url...',
  imageUrlLabel: 'Image URL (split by ,)',
  imageFileLabel: 'upload images'
}

const ImageUpload = (props) => {
  const { placeholder, autoComplete, text = {}
    , style, onChange, dataKey, value = [], ...nestedProps
  } = props

  const [selectedImage, setSelectedImage] = useState(null)

  const handleChangeFileInput = useCallback((e) => {
    let newImages = []
    for (let file of e.target.files) {
      newImages.push(file)
    }
    onChange && typeof onChange === 'function' && onChange(dataKey, newImages)
  }, [onChange])

  const handleChangeUrlInput = useCallback((e) => {
    onChange && typeof onChange === 'function' && onChange(dataKey, e.target.value)
  }, [onChange])

  const handleImageClick = useCallback((e) => {
  }, [setSelectedImage])

  useEffect(() => {
    console.log('run effect')
    value[0] && setSelectedImage(value[0])
  }, [value])

  return (
    <div style={style || {
      width: '90%',
      display: 'flex',
      flexDirection: 'row'
    }}>
      <div style={{ width: '50%', paddingRight: '2em' }}>
        <CLabel htmlFor={'url-input'}>{textDefault.imageUrlLabel}</CLabel>
        <CTextarea
          id={'url-input'}
          name={'url-input'}
          placeholder={textDefault.imageUrlPlaceholder}
          autoComplete={autoComplete}
          onChange={handleChangeUrlInput}
          rows={5}
        />
        <CLabel style={{ marginTop: '1em' }} htmlFor={'image-input'}>{textDefault.imageFileLabel}</CLabel>
        <CInputFile
          // type={'file'}
          onChange={handleChangeFileInput}
          id={'image-input'}
          name={'image-input'}
          style={{
            width: '100%'
          }}
          multiple
          {...nestedProps}
        />
      </div>
      <div style={{
        width: '50%',
        display: 'flex',
        justifyContent: 'flex-start'
      }}>
        <picture
          style={{ width: '80%', height: '400px' }}
          key={`showing-image`}>
          <img src={selectedImage ? 
            selectedImage.src || window.URL.createObjectURL(selectedImage)
            : defaultUploadImage
          } alt={selectedImage?.name || 'default-image'} style={{ width: '100%' }} />
        </picture>
        <div
          style={{ width: '20%',
            display: 'flex',
            flexDirection: 'column-reverse',
            maxHeight: '400px',
            overflow: 'auto'
          }}
        >{value.map((_image, index) => (
          <picture onClick={handleImageClick}
            style={{ width: '100%' }}
            key={`image-${_image.name}-${index}`}>
            <img src={_image.src || window.URL.createObjectURL(_image)} alt={_image.name} style={{ width: '100%' }} />
          </picture>
        ))}
        </div>
      </div>
    </div>
  )
}

export default ImageUpload