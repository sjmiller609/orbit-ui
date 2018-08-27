import PropTypes from 'prop-types'
import React from 'react'
import s from './styles.scss'
import classnames from 'classnames'
import { Field, Backdrop, MenuList, Item, Card, TextButton } from 'instruments'

import { searchText } from 'helpers/compare'

class TextFieldSelect extends React.Component {
  timeout = null
  menu = {}
  validate = this.validate.bind(this)
  blur = this.blur.bind(this)
  open = this.open.bind(this)
  select = this.select.bind(this)
  nav = this.nav.bind(this)
  state = {
    menu: false,
    out: true,
    index: 0,
    options: this.props.options,
  }
  componentWillReceiveProps({ value, options }) {
    if (value !== this.props.value) {
      // run validation
      this.validate(value)

      // filter options
      // have to prefilter to get list length
      const list = options.filter(o => !value || searchText(value, o))
      this.setState({ options: list })
    }
  }
  componentWillUpdate(nextProps, nextState) {
    if (this.state.menu && !nextState.menu)
      this.timeout = setTimeout(() => this.setState({ out: true }), 250)
  }
  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  componentDidMount() {
    const el = document.getElementById(this.props.name + 'Menu')
    this.menu = {
      el,
      height: el.offsetHeight,
    }
  }

  blur() {
    this.setState({ menu: false, index: 0 })
  }

  open() {
    const { menu } = this.state
    if (menu) return
    this.setState({ menu: true, out: false })
  }

  validate(value) {
    const { name, validate, updateErrors } = this.props
    let e
    // must be first
    if (validate) e = validate(value)

    updateErrors(name, e)
  }

  select(value) {
    this.props.onChange(null, value)
    this.blur()
  }
  nav(e) {
    let i = this.state.index
    if (e.keyCode === 40) i += 1
    else if (e.keyCode === 38) i += -1
    else if (e.keyCode === 13) {
      this.select(this.state.options[i - 1])
      e.preventDefault()
    } else return

    const l = this.state.options.length
    if (i < 1) i = l + i
    else if (i > l) i = i - l
    this.setState({ index: i })
    if (i > 0) {
      this.open()
      const { value, onChange } = this.props
      if (value) onChange(null, '') // reset on scroll
    }

    // scroll into view
    const el = document.getElementById((this.props.name + (i + 1)).toString())
    if (!el) return

    const top = el.offsetTop

    if (this.menu.height + this.menu.el.scrollTop < top) {
      this.menu.el.scrollTop = top - this.menu.height
    } else if (this.menu.el.scrollTop + el.offsetHeight > top) {
      this.menu.el.scrollTop = top - el.offsetHeight * 2
    }
  }

  render() {
    const {
      name,
      error,
      placeholder,
      required,
      value,
      title,
      label,
      id,
      className,
      onBlur,
      onChange,
      setRef,
    } = this.props
    const { menu, out, index, options } = this.state
    return (
      <div
        className={classnames(
          s.dropdown,
          menu ? s.open : null,
          out ? s.out : null,
          className
        )}>
        <Backdrop show={menu} close={this.blur} />

        {label}

        <input
          type="text"
          name={name}
          id={id}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
          value={value}
          title={title}
          onBlur={onBlur}
          onFocus={this.open}
          ref={setRef}
          className={s.selector}
          onKeyDown={this.nav}
          autoComplete="off"
        />
        <div className={s.menuWrapper}>
          <Card className={s.menu} id={name + 'Menu'}>
            <MenuList>
              {options.map((o, i) => (
                <Item
                  id={(name + (i + 1)).toString()}
                  onClick={() => this.select(o)}
                  key={o}
                  active={index === i + 1}>
                  {o}
                </Item>
              ))}
              {options.length === 0 && (
                <TextButton onClick={() => this.select('')}>
                  Clear Selection
                </TextButton>
              )}
            </MenuList>
          </Card>
        </div>

        {error}
      </div>
    )
  }
}

TextFieldSelect.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired, // pass in key value update function
  onBlur: PropTypes.func,
  validate: PropTypes.func,
  required: PropTypes.bool,
  label: PropTypes.element,
  value: PropTypes.string,
  title: PropTypes.string,
  error: PropTypes.element,
  className: PropTypes.string,
  updateErrors: PropTypes.func,
  setRef: PropTypes.func,
  options: PropTypes.array,
}

export default Field(TextFieldSelect)
