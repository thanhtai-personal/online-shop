import styled from 'styled-components'

export const ImageUploadStyled = styled.div`
width: 90%;
display: flex;
flex-direction: row;
.margin-top-1em {
  margin-top: 1em;
}
input[type='file'] {
  width: 100%;
}
.input-panel {
  width: 50%;
  padding-right: 2em;
}
.picture-showing {
  width: 50%;
  display: flex;
  justify-content: flex-start;
  picture {
    width: 80%;
    height: 350px;
    img {
      width: 100%;
      max-height: 350px;
    }
  }
}
.picture-list-items {
  width: 20%;
  display: flex;
  flex-direction: column-reverse;
  max-height: 350px;
  overflow: auto;
  picture {
    width: 100%;
    cursor: pointer;
    img {
      width: 100%;
    }
  }
}

button.google-login-btn {
  background-color: rgba(70,130,180, 0.7) !important;
  height: 3em;
  span {
    color: rgba(255,255,255, 0.7);
  }
}

.picture-showing.google-btn-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
`