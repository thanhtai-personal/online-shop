import React, { useState } from 'react'
import { TabsStyled } from './tabs.styled'

const Tabs = (props) => {
  const { buttons, isVertical, tabKey } = props
  const [activeBtn, setActiveBtn] = useState(0)

  return (<TabsStyled isVertical={isVertical}>
    {buttons.map((button, idx) => (<div key={`${tabKey}-tab-${idx}`} className={`tab-btn-wrapper ${idx === activeBtn ? 'active' : ''}`}>
      {button}
    </div>))}
  </TabsStyled>)
}

export default React.memo(Tabs)