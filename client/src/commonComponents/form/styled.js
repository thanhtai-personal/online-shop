import styled from 'styled-components'

export const FormStyled = styled.form`
`

export const CustomStyledCoreUI = styled.div`
  margin: 2em;
  height: calc(100% - 4em);
  width: calc(100% - 4em);
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