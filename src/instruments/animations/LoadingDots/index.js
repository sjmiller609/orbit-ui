'use strict'
import React from 'react'
import s from './styles.scss'

class LoadingDots extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dots: '',
      timer: null,
    }
  }

  componentWillMount() {
    let dots = this.state.dots
    const timer = window.setInterval(() => {
      if (dots.length < 3) dots += '.'
      else dots = ''
      this.setState({ dots })
    }, 300)

    this.setState({ timer })
  }

  componentWillUnmount() {
    window.clearInterval(this.state.timer)
  }

  render() {
    return <span className={s.dots}>{this.state.dots}</span>
  }
}

export default LoadingDots
