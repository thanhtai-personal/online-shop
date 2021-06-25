
import styled from 'styled-components'

export const LoginWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  background: url(${(props) => props.loginBackground || ''});
  background-color: gray;
  .left-panel {
    display: flex;
    justify-content: center;
    justify-items: center;
    opacity: 0.8;
    width: 50%;
    height: 100%;
    background: url(${(props) => props.leftPanelImage});
    background-position: center;
    background-size: cover;
    @media (max-width: 1340px) {
      width: 35%;
    }
    @media (max-width: 1190px) {
      display: none;
    }
  }
  .right-panel {
    @media (max-width: 1340px) {
      width: 65%;
    }
    @media (max-width: 1190px) {
      width: 100%;
    }
    min-width: 440px;
    min-height: 650px;
    display: flex;
    justify-content: center;
    justify-items: center;
    background-color: lightgreen;
    width: 50%;
    height: 100%;
    opacity: 0.8;
    form {
      @media (max-width: 675px) {
        width: 90%;
      }
      h1 {
        font-weight: bold;
        font-size: 24px;
      }
      background-color: greenyellow;
      overflow-y: auto;
      overflow-x: hidden;
      display: flex;
      flex-flow: column wrap;
      width: 60%;
      height: 60%;
      margin-top: 20%;
      justify-content: center;
      justify-items: center;
      text-align: center;
      border: solid 2px black;
      label {
        width: 100%;
        padding-top: 10px;
        margin-top: 10px;
        input {
          width: 325px;
          height: 50px;
          border: solid 1px;
          border-radius: 25px;
          padding-left: 25px;
          font-size: 18px;
          font-weight: bold;
          :hover {
            border-color: yellow;
          }
        }
      }
      button {
        width: 350px;
        height: 50px;
        margin-top: 10px;
        border: solid 1px;
        border-radius: 25px;
        color: white;
        background: black;
        font-size: 18px;
        font-weight: bold;
      }
      input[type=submit] {
        width: 350px;
        height: 50px;
        color: white;
        background: black;
        font-size: 18px;
        font-weight: bold;
        margin-top: 10px;
        border: solid 1px;
        border-radius: 25px;
      }
      .actions {
        margin-top: 20px;
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        justify-items: center;
        align-items: center;
      }
    }
  }
`