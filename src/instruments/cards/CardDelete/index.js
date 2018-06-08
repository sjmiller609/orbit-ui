import React from 'react'
import PropTypes from 'prop-types'

import { CardForm, P } from '../../../instruments'

const CardDelete = ({
  text,
  buttonText,
  confirmButton,
  confirmText,
  children,
  onSubmit,
  ...otherProps
}) => {
  return (
    <CardForm
      {...otherProps}
      button={{
        onClick: onSubmit,
        text: buttonText || 'Delete',
        save: true,
        style: 'red',
      }}>
      {children || <P>{text}</P>}
    </CardForm>
  )
}

CardDelete.propTypes = {
  text: PropTypes.string,
  buttonText: PropTypes.string,
  confirmText: PropTypes.string,
  confirmButton: PropTypes.string,
  children: PropTypes.element,
  onSubmit: PropTypes.func,
}

export default CardDelete
