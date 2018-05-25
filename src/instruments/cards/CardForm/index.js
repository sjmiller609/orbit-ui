'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Card, Button, Row } from '../../../instruments'
// import UnsavedChangesAlert from '../UnsavedChangesAlert';

import s from './styles.scss'

// wrap this component in a form, with children as fields, either title as string, or header element, and save buttons in footer
const CardForm = ({
  children,
  button,
  title,
  small,
  className,
  fullWidth,
  alert,
}) => {
  return (
    <Card
      footer={
        <Row className={s.footer}>
          <Button disabled={!button.save} submit text={button.text || 'Save'} />
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
      {/* Show when alert === false */}
      {/* {typeof alert !== 'undefined' ? <UnsavedChangesAlert alert={alert} /> : null} */}
    </Card>
  )
}

CardForm.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
    .isRequired,
  button: PropTypes.object,
  className: PropTypes.string,
  small: PropTypes.bool,
  fullWidth: PropTypes.bool,
  alert: PropTypes.bool,
}

CardForm.defaultProps = {
  small: false,
  fullWidth: false,
}

export default CardForm
