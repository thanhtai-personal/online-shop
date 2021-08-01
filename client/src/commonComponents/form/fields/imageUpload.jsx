import React, { useCallback, useState, useEffect, useMemo } from 'react'
import {
  CLabel,
  CInputFile,
  CTextarea
} from '@coreui/react'
import PictureListItem from './pictureListItem'
import defaultUploadImage from 'root/assets/images/defaultUpload.png'
import GoogleLogin from 'react-google-login'
import { ImageUploadStyled } from './styled'

const textDefault = {
  imageUrlPlaceholder: 'Enter image url...',
  imageUrlLabel: 'Image URL (split by ,)',
  imageFileLabel: 'Upload images',
  integrateGoogle: 'Connect google driver'
}

const ImageUpload = (props) => {
  const { placeholder, autoComplete, text = {}
    , requiredGoogleUpload = false, style, onChange
    , dataKey, value = [], isLinkedGoogle = false, id
    , disabled = false
    , ...nestedProps
  } = props
  const usingText = {
    ...textDefault,
    ...text
  }

  const [selectedImage, setSelectedImage] = useState(null)
  const onGoogleLoginSuccess = useCallback((googleUser) => {
    const googleProfile = googleUser.getBasicProfile()
    const profile = {
      email: googleProfile.getEmail(),
      socialId: googleProfile.getId(),
      token: googleUser.getAuthResponse().id_token
    }
    console.log('profile', profile)
  }, [])


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
    <ImageUploadStyled key={`upload-image-${id}`}>
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
          onChange={handleChangeFileInput}
          id={'image-input'}
          name={'image-input'}
          accept={'image/*'}
          multiple
          disabled={!isLinkedGoogle || disabled}
          {...nestedProps}
        />
      </div>
      <div className={`picture-showing ${!isLinkedGoogle && 'google-btn-wrapper'}`}>
        {isLinkedGoogle ? <>
          <picture
            key={`showing-image`}>
            <img src={selectedImage ?
              selectedImage.src || window.URL.createObjectURL(selectedImage)
              : defaultUploadImage
            } alt={selectedImage?.name || 'default-image'}
            />
          </picture>
          <div className={'picture-list-items'}>{value && value.map((_image, index) => (
            <PictureListItem
              key={`picture-list-item-${index}`}
              onClickItem={handleImageClick}
              image={_image} index={index} />
          ))}
          </div>
        </>
          : <div id={'google-login-btn'}>
            <GoogleLogin
              className={'google-login'}
              clientId='404281480421-lbrm3qknrffqpndu06u4925047tt4ee3.apps.googleusercontent.com'
              buttonText={usingText.integrateGoogle}
              onSuccess={onGoogleLoginSuccess}
              // onFailure={onGGLoginFailure}
              cookiePolicy={'single_host_origin'}
              className={'google-login-btn'}
            /></div>
        }
      </div>
    </ImageUploadStyled>
  )
}

export default ImageUpload