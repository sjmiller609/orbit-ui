import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { CardForm, Form, H5 } from 'instruments'

const PermissionsBlocker = props => {
  return (
    <CardForm title="Permissions" className={s.card}>
      <H5 className={s.name}>{props.msg}</H5>
    </CardForm>
  )
}

PermissionsBlocker.propTypes = {
  save: PropTypes.bool,
  form: PropTypes.object,
  user: PropTypes.object,
  msg: PropTypes.string,
}

export default Form(PermissionsBlocker)
