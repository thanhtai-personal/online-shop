import React from 'react'
import {
  CLabel,
  CTextarea,
  CInputFile
} from '@coreui/react'

const defaultText = {
  placeholder: 'Enter embed code for video',
  label: 'Video Embed',
  videoFileLabel: 'Upload video'
}

const VideoEmbed = (props) => {
  const { style, htmlFor, type, id, name, placeholder, autoComplete, text = {}, rows = 8, ...nestedProps } = props
  return (
    <div style={style || { width: '50%' }}>
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
        {...nestedProps}
      />
    </div>
  )
}

export default VideoEmbed