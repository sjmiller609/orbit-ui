import React from 'react'
import PropTypes from 'prop-types'
import { NumberField, P, B, Tag } from 'instruments'
import s from './styles.scss'
import { convertCpu, convertMem, resourceConvert } from './helpers'
import RTag from './RTag'

const Resource = ({
  field,
  astroUnit,
  showAllUnits,
  convertValue,
  deployment,
  ...props
}) => {
  const { cpu, airflowConns, actualConns, memory, pods, price } = astroUnit
  const au = convertValue
    ? convertValue(field.value || 0, false, { cpu, memory })
    : field.value || 0
  const disabled = deployment.workspace.stripeCustomerId == null ? true : false
  return (
    <React.Fragment>
      <NumberField
        slider
        units="AU"
        min={astroUnit}
        step={astroUnit}
        convert={
          convertValue
            ? (v, out) => convertValue(v, out, { cpu, memory })
            : null
        }
        disabled={disabled}
        {...field}
        {...props}
      />
      <P className={s.resources}>
        {price !== 0 ? (
          <Tag className={s.price}>
            <B>${price * au}</B> / mo
          </Tag>
        ) : null}
        <RTag n={convertCpu(cpu * au, false)} l="CPU" />
        <RTag
          n={convertMem(memory * au, false)}
          l={(memory * au < 1024 ? 'MB' : 'GB') + ' memory'}
        />
        {showAllUnits && (
          <React.Fragment>
            <RTag n={Math.floor(pods * au)} l="pods" />
            <RTag n={Math.floor(airflowConns * au)} l="client connections" />
            <RTag n={Math.floor(actualConns * au)} l="database connections" />
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
  convertValue: PropTypes.func,
  deployment: PropTypes.object,
}

Resource.defaultProps = {
  convertValue: resourceConvert,
}

export default Resource
