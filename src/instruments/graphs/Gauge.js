import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { ResponsivePieCanvas } from '@nivo/pie'
import { P } from 'instruments'

import s from './styles.scss'

const levelLabels = [
  {
    id: 'danger',
    value: 25,
    color: '#f4362c',
  },
  {
    id: 'warn',
    value: 25,
    color: '#ff9a09',
  },
  {
    id: 'ok',
    value: 50,
    color: '#00ac6b',
  },
]

class Gauge extends React.Component {
  state = {
    value: 0,
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
    if (metric != undefined && metric.length > 0) {
      this.setState({ value: Math.round(Number(metric[1])) })
    }
  }

  formatColor = value => {
    if (value <= 50) {
      return '#00ac6b'
    }

    if (value > 50 && value <= 75) {
      return '#ff9a09'
    }

    return '#f4362c'
  }

  render() {
    const { value } = this.state

    return (
      <div className={s.gaugeContainer}>
        <div className={s.gaugeElement}>
          <ResponsivePieCanvas
            data={levelLabels}
            width={300}
            height={200}
            pixelRatio={2}
            startAngle={90}
            endAngle={-90}
            sortByValue={false}
            innerRadius={0.95}
            enableRadialLabels={false}
            enableSlicesLabels={false}
            isInteractive={false}
            colors={d => d.color}
          />
        </div>
        <div className={classnames(s.gaugeElement, s.guagePercent)}>
          <ResponsivePieCanvas
            data={[
              {
                id: 'reserve',
                value: 100 - value,
                color: '#f2f1ee',
              },
              {
                id: 'used',
                value: value,
                color: this.formatColor(value),
              },
            ]}
            width={300}
            height={200}
            pixelRatio={2}
            startAngle={90}
            endAngle={-90}
            sortByValue={false}
            innerRadius={0.75}
            enableRadialLabels={false}
            enableSlicesLabels={false}
            isInteractive={false}
            colors={d => d.color}
          />
        </div>
        <div className={s.gaugeLabel}>
          <P>{isNaN(value) ? 0 : value}%</P>
        </div>
      </div>
    )
  }
}

Gauge.propTypes = {
  metric: PropTypes.array,
}

export default Gauge
