'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'
import { Row, B, FormLabel } from 'instruments'
import { colorScale } from 'helpers/colors'

const Brownie = ({ slices, part, total, title, convert, className }) => {
  const colors = colorScale(slices.length)

  return (
    <div className={classnames(s.chart, className)}>
      {title && <FormLabel>{title}</FormLabel>}
      <Row justify="flex-start">
        <Row className={s.bar}>
          {slices.map((m, i) => {
            const r = Math.floor(m.value / total * 100) / 100
            return (
              <div
                key={i}
                className={s.slice}
                style={{
                  color: colors[i].a,
                  background: `linear-gradient(45deg, ${colors[i].a}, ${
                    colors[i].z
                  } 160%)`,
                  width: `${r * 100}%`,
                }}>
                <label>
                  {m.name}
                  <B>
                    {m.value}AU ({convert(m.value)})
                  </B>
                </label>
              </div>
            )
          })}
          {total - part > 0 && (
            <div
              className={classnames(s.slice, s.remaining)}
              style={{
                width: `${Math.floor((total - part) / total) * 100}%`,
              }}>
              <label>
                Remaining
                <B>{convert(total - part)}</B>
              </label>
            </div>
          )}
        </Row>
      </Row>
    </div>
  )
}

Brownie.propTypes = {
  slices: PropTypes.array,
  className: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  convert: PropTypes.func,
  total: PropTypes.number,
  part: PropTypes.number,
}

Brownie.defaultProps = {
  convert: v => v,
}

export default Brownie
