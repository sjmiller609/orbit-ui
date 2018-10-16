import React from 'react'
import PropTypes from 'prop-types'
import { FormSection, NumberField, P, B, Tag } from 'instruments'
import info from '../info'
import s from './styles.scss'

const R = ({ n, l }) => (
  <Tag>
    <B>{n}</B>
    {l}
  </Tag>
)

R.propTypes = {
  n: PropTypes.number,
  l: PropTypes.string,
}

const Resources = ({ form, astroUnit }) => {
  const { cpu, airflowConns, actualConns, memory, pods, price } = astroUnit
  const field = form.field('properties.astroUnit')
  const au = field.value || 1
  return (
    <FormSection id="resources" title="Resource Quotas">
      <NumberField
        label="Astro Units (AU)"
        {...field}
        slider
        defaultValue={1}
        min={1}
        max={10}
        info={info.astroUnit}
      />
      <P className={s.resources}>
        {price !== 0 ? (
          <Tag className={s.price}>
            <B>${price * au}</B> / mo
          </Tag>
        ) : null}
        <R n={cpu * au} l="CPU" />
        <R n={memory * au} l="GB memory" />
        <R n={pods * au} l="pods" />
        <R n={airflowConns * au} l="Airflow DB connections" />
        <R n={actualConns * au} l="real DB connections" />
      </P>
    </FormSection>
  )
}

Resources.propTypes = {
  form: PropTypes.object,
  astroUnit: PropTypes.object,
}

export default Resources
