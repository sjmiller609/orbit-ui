import React from 'react'
import PropTypes from 'prop-types'
import s from './styles.scss'

const EnvVar = ({ name }) => {
  const n = name.split('__')
  const name2 = n.pop()
  const group = <span className={s.group}>{n.pop()}</span>
  return (
    <span>
      {group}
      {name2}
    </span>
  )
}

EnvVar.propTypes = {
  name: PropTypes.string,
}

export default EnvVar
