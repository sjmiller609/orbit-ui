import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { CardForm } from '../../../instruments'

import Data from '../Data'

const Form = ({ title, save }) => {
  return (
    <CardForm
      title={title}
      button={{
        save,
        text: 'Deploy',
      }}
      className={s.card}>
      form
    </CardForm>
  )
}

Form.propTypes = {
  title: PropTypes.string,
  save: PropTypes.bool,
}

export default Form
