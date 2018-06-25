import React from 'react'
import PropTypes from 'prop-types'

import { CardForm, P, SetUI } from 'instruments'

const CardDelete = ({
  text,
  buttonText,
  confirm,
  children,
  onSubmit,
  setUI,
  ...otherProps
}) => {
  const onClick = () =>
    setUI.dialog({
      text: confirm.text,
      title: confirm.title || 'Confirm Delete',
      button: {
        text: confirm.buttonText || 'Delete',
        onClick: onSubmit,
        style: 'red',
      },
    })

  return (
    <CardForm
      {...otherProps}
      button={{
        onClick,
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
  confirm: PropTypes.object,
  children: PropTypes.element,
  onSubmit: PropTypes.func,
  setUI: PropTypes.object,
}

export default SetUI(CardDelete, { dialog: true })
