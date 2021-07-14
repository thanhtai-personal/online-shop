import React from 'react'
import { TableStyled } from './styled'

const CoreUITable = (props) => {
  const { model, data, options = {}, className = {} } = props
  const { pagination, take, skip } = options
  return (
    <TableStyled className={className.table || 'table table-hover table-outline mb-0 d-none d-sm-table'}>
      <thead className={className.header || 'thead-light'}>
        <tr>{Object.keys(model).map((key, index) => {
          return (
            <td key={`head-td-${model[key].key}-${index}`} className={className.tHeadTd}>
              {model[key].label}
            </td>
          )
        })}
        </tr>
      </thead>
      <tbody className={className.body || ''}>
        {data.map((rec, index) => {
          return (
            <tr key={`row-${rec.id}-${index}`}>
              {Object.keys(model).map((key, idx) => {
                if (model[key]?.render && typeof model[key]?.render === 'function') {
                  return <td key={`rec-td-${model[key].key}-${idx}`} className={className.recTd}>
                    {model[key]?.render(rec[model[key].key])}
                  </td>
                }
                return (
                  <td key={`rec-td-${model[key].key}-${idx}`} className={className.recTd}>
                    {rec[model[key].key]}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </TableStyled>
  )
}

export default CoreUITable