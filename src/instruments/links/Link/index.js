'use strict'
import PropTypes from 'prop-types'
import React from 'react'
import { NavLink, Link as Link2 } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
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
    const { arrow, backArrow, to, activeClassName } = this.props
    this.arr = arrow && <Icon className={s.arrow} icon={arrow} />
    this.backArr = backArrow && (
      <Icon className={s.backArrow} icon={backArrow} />
    )

    this.external = externalUrl(to)
    this.path = typeof to === 'object' ? to.pathname : to || ''
    if (this.external) return
    const hash = ~this.path.indexOf('#')
    if (hash) {
      this.component = activeClassName ? NavHashLink : HashLink
    } else {
      this.component = activeClassName ? NavLink : Link2
    }
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

    const Component =
      to && !this.external
        ? this.component
        : ({ to, className, onClick, children }) => (
            <a
              onClick={onClick}
              className={className}
              href={to}
              target={newTab === false ? null : '_blank'}>
              {children}
            </a>
          )
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
