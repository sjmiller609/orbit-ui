import React from 'react'
import PropTypes from 'prop-types'
import { Sparklines, SparklinesCurve } from 'react-sparklines'
import { P } from 'instruments'

import s from './styles.scss'

class Sparkline extends React.Component {
  state = {
    data: [],
    current: 0,
  }

  componentDidUpdate(prevProps) {
    if (prevProps != this.props) {
      this.formatData(this.props)
    }
  }

  componentWillMount() {
    this.formatData(this.props)
  }

  formatData = props => {
    const { metric } = props

    const data = []
    metric.map(v => data.push(v[1]))

    const length = data.length - 1
    this.setState({ data, current: data[length] })
  }

  render() {
    const { data, current } = this.state

    return (
      <div className={s.sparklineContainer}>
        <div className={s.sparklineLabel}>
          <P>{`${isNaN(Math.round(current)) ? 0 : Math.round(current)}`}</P>
        </div>
        <div className={s.sparklineElement}>
          <Sparklines data={data} limit={50} width={400} height={50} margin={0}>
            <SparklinesCurve color="#0CBEDB" />
          </Sparklines>
        </div>
      </div>
    )
  }
}

Sparkline.propTypes = {
  metric: PropTypes.array,
  label: PropTypes.string,
}

export default Sparkline
