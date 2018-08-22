'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Row } from 'instruments'
import Menu from './Menu'
import s from './styles.scss'

class CardMenu extends React.Component {
  pos = 0
  scroll = this.scroll.bind(this)
  disable = null
  menu = []
  state = {
    focus: this.props.menu[0].id,
  }
  componentDidMount() {
    if (window.innerWidth <= 850) this.disable = true
    if (!this.disable) window.addEventListener('scroll', this.scroll)
  }
  componentWillUnmount() {
    if (!this.disable) window.removeEventListener('scroll', this.scroll)
  }

  scroll() {
    if (this.disable) return
    const { menu } = this.props
    const scroll = window.scrollY
    const scroll0 = this.state.scroll

    this.pos = scroll
    const diff = scroll - scroll0
    if (Math.abs(diff) < 5) return
    const menu2 = diff > 0 ? menu.reverse() : menu
    const mid = window.innerHeight * 0.55
    const focus = menu2.some(m => this.getFocus(m.id, mid))
    if (!focus) this.setState({ focus: null })
  }

  getFocus(id, mid) {
    const el = document.getElementById(id)
    if (!el) return
    const rect = el.getBoundingClientRect()
    if (rect.y > 0 && rect.y < mid) {
      this.setState({ focus: id })
      return true
    }
  }
  render() {
    const { children, id = 'menu', title, menu, className } = this.props
    const { focus } = this.state
    return (
      <Row align="flex-start" className={classnames(s.row, className)}>
        <Menu id={id} menu={menu} title={title} active={focus} />

        <div className={s.cards}>{children}</div>
      </Row>
    )
  }
}

CardMenu.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  className: PropTypes.string,
  menu: PropTypes.array,
}

export default CardMenu
