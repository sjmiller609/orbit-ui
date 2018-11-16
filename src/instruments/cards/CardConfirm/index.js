import React from 'react'
import PropTypes from 'prop-types'
import s from './styles.scss'

import { CardForm, P, SetUI } from 'instruments'

const CardConfirm = ({
  text,
  buttonText,
  confirm,
  children,
  onSubmit,
  setUI,
  disabled,
  ...otherProps
}) => {
  const onClick = () =>
    setUI.dialog({
      text: confirm.text,
      title: confirm.title || 'Confirm',
      button: {
        text: confirm.buttonText || 'Confirm',
        onClick: onSubmit,
        style: 'blue',
      },
    })

  return (
    <CardForm
      {...otherProps}
      className={s.confirm}
      id="confirm"
      button={{
        onClick,
        text: buttonText || 'Confirm',
        save: !disabled,
        style: 'blue',
      }}>
      {children || <P>{text}</P>}
    </CardForm>
  )
}

CardConfirm.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  buttonText: PropTypes.string,
  confirm: PropTypes.object,
  children: PropTypes.element,
  onSubmit: PropTypes.func,
  setUI: PropTypes.object,
  disabled: PropTypes.bool,
}

export default SetUI(CardConfirm, { dialog: true })
