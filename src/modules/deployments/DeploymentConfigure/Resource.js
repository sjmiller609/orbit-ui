import React from 'react'
import PropTypes from 'prop-types'
import { NumberField, P, B, Tag } from 'instruments'
import s from './styles.scss'
import { convertCpu, convertMem, resourceConvert } from './helpers'

const R = ({ n, l }) => (
  <Tag>
    <B>{n}</B>
    {l}
  </Tag>
)

R.propTypes = {
  n: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  l: PropTypes.string,
}

const Resource = ({ field, astroUnit, showAllUnits, ...props }) => {
  const { cpu, airflowConns, actualConns, memory, pods, price } = astroUnit
  const au = resourceConvert(field.value || 1, false, { cpu, memory })
  return (
    <React.Fragment>
      <NumberField
        slider
        units="AU"
        min={astroUnit}
        step={astroUnit}
        convert={(v, out) => resourceConvert(v, out, { cpu, memory })}
        {...field}
        {...props}
      />
      <P className={s.resources}>
        {price !== 0 ? (
          <Tag className={s.price}>
            <B>+ ${price * au}</B> / mo
          </Tag>
        ) : null}
        <R n={convertCpu(cpu * au, false)} l="CPU" />
        <R
          n={convertMem(memory * au, false)}
          l={(memory * au < 1024 ? 'MB' : 'GB') + ' memory'}
        />
        {showAllUnits && (
          <React.Fragment>
            <R n={pods * au} l="pods" />
            <R n={airflowConns * au} l="Airflow connections" />
            <R n={actualConns * au} l="connections" />
          </React.Fragment>
        )}
      </P>
    </React.Fragment>
  )
}

Resource.propTypes = {
  field: PropTypes.object,
  astroUnit: PropTypes.object,
  showAllUnits: PropTypes.bool,
}

export default Resource
