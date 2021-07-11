
import styled from 'styled-components'

export const TabsStyled = styled.div`
  display: flex;
  flex-direction: ${(props) => props.isVertical ? 'column' : 'row'};
  justify-content: space-around;
  .tab-btn-wrapper {
    width: 100%;
    background-color: ${(props) => props.bgColor || 'green'};
    button {
      width: 100%;
      height: 100%;
      border: none;
      border-right: solid 1px;
      background-color: transparent !important;
      color: ${(props) => props.textColor || 'white'} !important;
      cursor: pointer;
      font-weight: bold !important;
      font-size: 16px !important;
    }
    cursor: pointer;
  }
  .active {
    button {
      color: ${(props) => props.activeTextColor || 'black'} !important;
    }
    background-color: ${(props) => props.activeBgColor || 'transparent'};   
  }
`