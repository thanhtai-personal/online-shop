import React, { useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Chip from '@material-ui/core/Chip'
import { useEffect } from 'react'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
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
  const { title, value, onChange, options, getOptions, dataKey } = props

  const classes = useStyles()

  const handleChange = useCallback((event) => {
    onChange && typeof onChange === 'function' && onChange(event.target.value)
  }, [onChange])

  useEffect(() => {
    getOptions && typeof getOptions === 'function' && getOptions(dataKey)
  }, [getOptions, dataKey])

  return (
    <div>    
      <FormControl className={classes.formControl}>
        <InputLabel>{title}</InputLabel>
        <Select
          multiple
          value={value}
          onChange={handleChange}
          input={<Input id='select-multiple-chip' />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {options.map((opt) => (
            <MenuItem key={opt.key} value={opt.value}>
              {opt.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}
