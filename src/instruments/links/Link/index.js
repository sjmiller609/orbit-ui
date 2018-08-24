'use strict'
import PropTypes from 'prop-types'
import React from 'react'
import { NavLink, Link as Link2 } from 'react-router-dom'
import s from './styles.scss'
import classnames from 'classnames'
import { Icon } from 'instruments'
import { externalUrl } from './helpers'

class Link extends React.Component {
  component = null
  backArrow = null
  arrow = null
  external = null
  path = null

  componentWillMount() {
    const { arrow, backArrow, to, activeClassName, newTab } = this.props
    this.arr = arrow && <Icon className={s.arrow} icon={arrow} />
    this.backArr = backArrow && (
      <Icon className={s.backArrow} icon={backArrow} />
    )

    this.external = externalUrl(to)
    this.path = typeof to === 'object' ? to.pathname : to || ''
    if (!to || this.external) {
      this.component = ({ to, className, title, onClick, children }) => {
        const aProps = {
          title,
          onClick,
          className,
        }
        if (to) {
          aProps.href = to
          aProps.target = newTab === false ? null : '_blank'
        }
        return <a {...aProps}>{children}</a>
      }
      return
    }

    this.component = activeClassName ? NavLink : Link2
  }
  render() {
    /* eslint-disable react/display-name */
    /* eslint-disable no-unused-vars */
    /* eslint-disable react/prop-types */
    const {
      children,
      onClick,
      style,
      to,
      className,
      newTab,
      arrow,
      backArrow,
      ...props
    } = this.props
    const newProps = {
      ...props,
      to,
      className: classnames(s.link, style && s[style], className),
      onClick,
      target: newTab ? '_blank' : null,
    }

    const Component = this.component
    return (
      <Component {...newProps}>
        <React.Fragment>
          {this.backArr}
          {children}
          {this.arr}
        </React.Fragment>
      </Component>
    )
  }
}

Link.propTypes = {
  onClick: PropTypes.func,
  style: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]),
  newTab: PropTypes.bool,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  activeClassName: PropTypes.string,
  arrow: PropTypes.string,
  backArrow: PropTypes.string,
}

export default Link
