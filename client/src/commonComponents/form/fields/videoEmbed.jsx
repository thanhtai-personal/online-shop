import React, { useRef, useCallback, useEffect } from 'react'
import {
  CLabel,
  CTextarea,
  CInputFile
} from '@coreui/react'
import defaultUploadImage from 'root/assets/images/defaultUpload.png'
import { useState } from 'react'
import { useMemo } from 'react'

const defaultText = {
  placeholder: 'Enter embed code for video',
  label: 'Video Embed',
  videoFileLabel: 'Upload video'
}

const VideoEmbed = (props) => {
  const { style, htmlFor, type
    , id, name, placeholder, autoComplete
    , text = {}, rows = 8, value, dataKey
    , onChange
    , ...nestedProps } = props

  const videoShowingRef = useRef(null)
  // const [ embedId, setEmbedId ] = useState(null)

  const embedId = useMemo(() => {
    const findEmbedId = (value || '').match(/(embed\/[A-Za-z0-9])\w+/g) || ['']
    return findEmbedId[0].split('/')[1]
  }, [value])

  const handleChangeEmbedInput = useCallback((e) => {
    onChange && typeof onChange === 'function' && onChange(dataKey, e.target.value)
  }, [onChange, dataKey])

  return (
    <div key={`video-embed-${id}`} style={{
      width: '90%',
      display: 'flex',
      flexDirection: 'row'
    }}>
      <div style={style || { width: '50%', paddingRight: '2em' }}>
        <CLabel htmlFor={htmlFor}>{text.label || defaultText.label}</CLabel>
        <CTextarea
          type={type}
          id={id}
          name={name}
          placeholder={placeholder || defaultText.placeholder}
          autoComplete={autoComplete}
          rows={rows}
          style={{
            width: '100%'
          }}
          onChange={handleChangeEmbedInput}
          {...nestedProps}
        />
        <CLabel htmlFor={'video-input'}>{defaultText.videoFileLabel}</CLabel>
        <CInputFile
          // type={'file'}
          id={'video-input'}
          name={'video-input'}
          style={{
            width: '100%'
          }}
          accept={'video/*'}
          disabled
          {...nestedProps}
        />
      </div>
      <div style={{
        width: '50%',
        display: 'flex',
        justifyContent: 'flex-start'
      }}>
        {embedId ? <div style={{
            width: '80%',
            maxHeight: '350px',
            overflow: 'hidden',
            paddingTop: '3em'
          }}
          ref={videoShowingRef}
        >
          <iframe
            width='100%'
            maxHeight='350px'
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder='0'
            allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            title='Embedded youtube'
            allowFullScreen
          />
        </div>
          : <picture
            style={{ width: '80%', height: '350px' }}
            key={`showing-video`}>
            <img src={defaultUploadImage}
              alt={'unloaded-image'}
              style={{ width: '100%', maxHeight: '350px' }} />
          </picture>}
      </div>
    </div>
  )
}

export default VideoEmbed