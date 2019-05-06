import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { CardForm, Form, H5 } from 'instruments'

const PermissionsBlocker = () => {
  return (
    <CardForm title="Permissions" className={s.card}>
      <H5 className={s.name}>
        You do not have the required permissions to change user roles.
      </H5>
      {/* <div className={s.deployed}>
        <P>Deployed</P>
        <Mini>
          <ShowDate date={user.createdAt} />
        </Mini>
      </div> */}
    </CardForm>
  )
}

PermissionsBlocker.propTypes = {
  save: PropTypes.bool,
  form: PropTypes.object,
  user: PropTypes.object,
}

export default Form(PermissionsBlocker)
