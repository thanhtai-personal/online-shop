import React, { useCallback, useEffect, useMemo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Input,
  MenuItem,
  FormControl,
  Select,
  Chip,
} from '@material-ui/core'
import ItemWithCheckbox from './menuItemWithCheckbox'

const useStyles = (props) => makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '100%',
    border: 'solid 1px #d8dbe0',
    borderRadius: '5px',
    backgroundColor: '#FFFFFF',
    margin: 0
  },
  inputLabel: {
    paddingLeft: '1em',
    fontSize: (props.value && props.value?.length > 0) ? '6px' : 'initial'
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: '#FFFFFF'
  },
  chip: {
    margin: 0,
  },
  selectInput: {
    marginTop: 0,
  }
}))

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

export default function MultipleSelect(props) {
  const { title, value, onChange, options, getOptions, dataKey, useCheckbox } = props

  const classes = useStyles(props)()

  const handleChange = useCallback((event) => {
    event.preventDefault()
    onChange && typeof onChange === 'function' && onChange(event.target.value)
  }, [onChange])

  useEffect(() => {
    getOptions && typeof getOptions === 'function' && getOptions(dataKey)
  }, [getOptions, dataKey])

  const optionMapping = useMemo(() => {
    let _optionMapping = {}
    options && options.forEach((opt) => {
      _optionMapping[opt.id] = opt
      if (useCheckbox) _optionMapping[opt.id].checked = !!(value?.includes(opt.id))
    })
    return _optionMapping
  }, [options, value, useCheckbox])


  const renderValue = useCallback((selected) => {
    return (<div className={classes.chips}>
      {selected.map((v) => (
        <Chip key={v} label={optionMapping[v]
          ? optionMapping[v].label || optionMapping[v].name
          : v
        } className={classes.chip} />
      ))}
    </div>)
  }, [optionMapping])

  const handleClickItem = useCallback((item) => {
    if (item.checked) {
      onChange && typeof onChange === 'function' && onChange(value.filter((v) => v !== item.id))
    } else {
      onChange && typeof onChange === 'function' && onChange([...value, item.id])
    }
  }, [value, onChange])

  return (
    <FormControl className={classes.formControl}>
      <Select
        multiple
        value={value}
        input={<Input className={classes.selectInput} id='select-multiple-chip' />}
        renderValue={renderValue}
        MenuProps={MenuProps}
        placeholder={title}
        onChange={handleChange}
      >
        {useCheckbox ? options.map((opt) => (
          <ItemWithCheckbox onClickItem={handleClickItem} key={opt.id} item={opt}/>
        )) : options.map((opt) => (
          <MenuItem key={opt.id} value={opt.id}>
            {opt.label || opt.name || opt.id}
          </MenuItem>))}
      </Select>
    </FormControl>
  )
}
