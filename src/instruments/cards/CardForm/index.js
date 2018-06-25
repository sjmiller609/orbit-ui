'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Card, Button, Row } from 'instruments'

import s from './styles.scss'

// wrap this component in a form, with children as fields, either title as string, or header element, and save buttons in footer
const CardForm = ({ children, button, button2, title, className }) => {
  return (
    <Card
      footer={
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
            arrow
            onClick={button.onClick}
            style={button.style}>
            {button.text || 'Save'}
          </Button>
        </Row>
      }
      header={title}
      className={classnames(className)}>
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
}

export default CardForm
