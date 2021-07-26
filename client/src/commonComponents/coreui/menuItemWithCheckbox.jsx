import React, { useCallback } from 'react'
import {
  MenuItem,
  Checkbox,
  ListItemText
} from '@material-ui/core'


const MenuItemWithCheckbox = (props) => {
  const { item, onClickItem } = props
  const { id, checked, label, name } = item
  const handleOnClickItem = useCallback(() => {
    onClickItem && typeof onClickItem === 'function' && onClickItem(item)
  }, [onClickItem, item])
  return (
    <MenuItem onClick={handleOnClickItem} value={id}>
      <Checkbox checked={checked} />
      <ListItemText primary={label || name} />
    </MenuItem>
  )
}

export default MenuItemWithCheckbox