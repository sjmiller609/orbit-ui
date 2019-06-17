import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { H1, H4, LoadingDots } from 'instruments'

import s from './styles.scss'

import Gauge from './Gauge'
import Sparkline from './Sparkline'
import Complexline from './Complexline'
import ContainerList from './ContainerList'
import Stream from './Stream'

class MetricContainer extends React.Component {
  state = {
    loading: true,
    data: [],
  }

  componentDidUpdate(prevProps) {
    if (prevProps != this.props) {
      this.updateData(this.props)
    }
  }

  componentWillMount() {
    this.updateData(this.props)
  }

  updateData = props => {
    const { loading, metric, range, type } = props

    if (metric != undefined) {
      if (type === 'stream') {
        return this.setState({
          loading,
          data: metric,
        })
      } else if (
        type != 'complexline' &&
        type != 'list' &&
        metric.result[0] != undefined
      ) {
        return this.setState({
          loading,
          data: metric.result[0][range ? 'values' : 'value'],
        })
      } else {
        return this.setState({
          loading,
          data: metric.result,
        })
      }
    } else {
      return this.setState({
        loading: true,
      })
    }
  }

  renderHealth = () => {
    const { data } = this.state
    const isTrue = data[1] >= 0
    if (isTrue) return <H1 className={classnames(s.good, s.label)}>Healthy</H1>
    return <H1 className={classnames(s.bad, s.label)}>Unhealthy</H1>
  }

  renderCount = () => {
    const { data } = this.state
    let amount = Math.round(data[1])

    // human readable gigabite decimal
    if (this.props.label === 'GB') {
      amount = (amount / 1073741824).toFixed(2)
    }

    return (
      <H1 className={classnames(s.label)}>
        {amount} {this.props.label}
      </H1>
    )
  }

  renderMetric = type => {
    const { metric, label } = this.props
    const { data } = this.state

    let component
    switch (type) {
      case 'health':
        component = this.renderHealth()
        break
      case 'count':
        component = this.renderCount()
        break
      case 'gauge':
        component = <Gauge metric={data} />
        break
      case 'sparkline':
        component = <Sparkline metric={data} label={metric.label} />
        break
      case 'complexline':
        component = <Complexline metric={data} label={label} />
        break
      case 'list':
        component = <ContainerList metric={data} />
        break
      case 'stream':
        component = <Stream metric={data} />
        break
      default:
    }

    return component
  }

  render() {
    const { title, type } = this.props
    const { loading } = this.state

    return (
      <div className={s.container}>
        {type !== 'list' && title && <H4 className={s.metricTitle}>{title}</H4>}
        {!loading && (
          <div className={s.dataContainer}>{this.renderMetric(type)}</div>
        )}
        {loading && (
          <div className={s.loading}>
            <LoadingDots />
          </div>
        )}
      </div>
    )
  }
}

MetricContainer.propTypes = {
  loading: PropTypes.bool,
  title: PropTypes.string,
  metric: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  type: PropTypes.string,
  label: PropTypes.string,
  range: PropTypes.bool,
}

export default MetricContainer
