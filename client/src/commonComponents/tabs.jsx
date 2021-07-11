import React, { useState } from 'react'
import { TabsStyled } from './tabs.styled'

const Tabs = ({ buttons, isVertical }) => {
  const [activeBtn, setActiveBtn] = useState(0)

  return (<TabsStyled isVertical={isVertical}>
    {buttons.map((button, idx) => (<div className={`tab-btn-wrapper ${idx === activeBtn ? 'active' : ''}`}>
      {button}
    </div>))}
  </TabsStyled>)
}

export default Tabs