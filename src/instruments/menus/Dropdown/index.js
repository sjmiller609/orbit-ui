'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import s from './styles.scss'
import { Backdrop, Link, Card } from 'instruments'

import classnames from 'classnames'

class Dropdown extends React.Component {
  timeout = null
  blur = this.blur.bind(this)
  open = this.open.bind(this)

  state = {
    menu: false,
    out: true,
  }

  componentWillUpdate(nextProps, nextState) {
    /* istanbul ignore next */
    if (this.state.menu && !nextState.menu)
      /* istanbul ignore next */
      this.timeout = setTimeout(() => this.setState({ out: true }), 250)
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  blur() {
    this.setState({ menu: false })
  }

  open() {
    const { menu } = this.state
    /* istanbul ignore next */
    if (menu) return
    this.setState({ menu: true, out: false })
  }

  render() {
    const { selector, disable, right, children, className, small } = this.props
    const { menu, out } = this.state

    return (
      <div
        className={classnames(
          s.dropdown,
          right ? s.right : s.left,
          menu ? s.open : null,
          out ? s.out : null,
          small ? s.small : null,
          className
        )}>
        <Backdrop show={menu} close={this.blur} />
        {!disable ? (
          <Link onClick={!menu ? this.open : this.blur} className={s.selector}>
            {selector}
          </Link>
        ) : (
          selector
        )}
        <div className={s.menuWrapper} onClick={this.blur}>
          <Card className={s.menu}>{children}</Card>
        </div>
      </div>
    )
  }
}

Dropdown.propTypes = {
  right: PropTypes.bool,
  disable: PropTypes.bool,
  selector: PropTypes.element.isRequired,
  className: PropTypes.string,
  small: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
    .isRequired,
}

export default Dropdown
