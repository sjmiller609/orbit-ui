import React from 'react'
import PropTypes from 'prop-types'
import s from './styles.scss'

import { CardForm, P, SetUI } from 'instruments'

const CardDelete = ({
  text,
  buttonText,
  confirm,
  children,
  onSubmit,
  setUI,
  disabled,
  ...otherProps
}) => {
  const onClick = /* istanbul ignore next */ () =>
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
      className={s.delete}
      id="delete"
      button={{
        onClick,
        text: buttonText || 'Delete',
        save: !disabled,
        style: 'red',
      }}
      disable={disabled}>
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
  disabled: PropTypes.bool,
}

export default SetUI(CardDelete, { dialog: true })
