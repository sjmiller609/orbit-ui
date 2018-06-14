'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Card, Button, Row } from '../../../instruments'

import s from './styles.scss'

// wrap this component in a form, with children as fields, either title as string, or header element, and save buttons in footer
const CardForm = ({
  children,
  button,
  button2,
  title,
  small,
  className,
  fullWidth,
}) => {
  return (
    <Card
      footer={
        <Row className={s.footer}>
          {button2 && (
            <Button
              text={button2.text || 'Cancel'}
              onClick={button2.onClick}
              style={button2.style}
              className={s.button2}
            />
          )}
          <Button
            disabled={
              (typeof button.save === 'boolean' && !button.save) || false
            }
            submit
            text={button.text || 'Save'}
            onClick={button.onClick}
            style={button.style}
          />
        </Row>
      }
      header={title}
      className={classnames(
        className,
        s.cardForm,
        small ? s.small : null,
        fullWidth ? s.fullWidth : null
      )}>
      <div className={s.formContent}>
        {Array.isArray(children) ? children.map(el => el) : children}
      </div>
    </Card>
  )
}

CardForm.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
    .isRequired,
  button: PropTypes.object,
  button2: PropTypes.object,
  className: PropTypes.string,
  small: PropTypes.bool,
  fullWidth: PropTypes.bool,
}

CardForm.defaultProps = {
  small: false,
  fullWidth: false,
}

export default CardForm
