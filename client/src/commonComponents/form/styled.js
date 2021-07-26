import styled from 'styled-components'

export const CustomStyledCoreUI = styled.div`
  margin: 1em;
  height: calc(100% - 4em);
  width: calc(100% - 4em);
  .title {
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: underline;
    padding: 1em;
    margin: 1em;
    background-color: rgba(249, 177, 21, 0.3);
    box-shadow: 5px 10px;
  }
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: calc(100% - 4em - 25px)
    input {
      max-width: 450px;
      min-width: 350px;
    }
    label {
      margin-bottom: 1em;
      font-size: 14px;
      font-weight: bold;
    }
  }
  .actions {
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    flex-direction: column;
  }
`

export const FormStyled = styled.div`

`

export const FormGroupStyled = styled.div`
width: 100%;
.form-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margit-top: 2em;
  padding-top: 2em;
  padding-bottom: 1em;
  background-color: rgba(249, 177, 21, 0.3);
  border-radius: 25px;
  box-shadow: 5px 10px;
}
.top-line {
  width: 60%;
  border: solid black 1px;
  height: 1px;
  margin-bottom: 1em;
  opacity: 0.7;
}
`