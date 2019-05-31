'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Card, Button, Row } from 'instruments'
import s from './styles.scss'

// wrap this component in a form, with children as fields, either title as string, or header element, and save buttons in footer
const CardForm = ({
  children,
  button,
  button2,
  footer,
  title,
  className,
  smallForm,
  id,
}) => {
  // console.log(typeof button.save === 'boolean' && !button.save)
  return (
    <Card
      id={id}
      footer={
        footer ||
        (button && (
          <Row className={s.footer}>
            {button2 && (
              <Button
                onClick={button2.onClick}
                style={button2.style}
                className={s.button2}>
                {button2.text || 'Cancel'}
              </Button>
            )}
            <Button
              disabled={
                (typeof button.save === 'boolean' && !button.save) || false
              }
              submit
              arrow="arrow_darkBg"
              onClick={button.onClick}
              to={button.to}
              style={button.style}>
              {button.text || 'Save'}
            </Button>
          </Row>
        ))
      }
      header={title}
      className={className}>
      <div className={classnames(s.formContent, smallForm && s.small)}>
        {children}
      </div>
    </Card>
  )
}

CardForm.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
    .isRequired,
  footer: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  button: PropTypes.object,
  button2: PropTypes.object,
  className: PropTypes.string,
  smallForm: PropTypes.bool,
}

export default CardForm
