import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import s from './styles.scss'

class TaskStatus extends React.Component {
  state = {
    data: [],
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
    this.setState({ data: metric })
  }

  formatBool = value => {
    const isTrue = value === '0'
    if (isTrue)
      return (
        <span className={classnames(s.healthLabel, s.healthy)}>Healthy</span>
      )
    return (
      <span className={classnames(s.healthLabel, s.unhealthy)}>Unhealthy</span>
    )
  }

  render() {
    const { data } = this.state

    if (data.length > 0)
      return (
        <div className={s.containerListContainer}>
          <div className={s.containerListHeader}>
            <div style={{ flex: '0 0 20%' }}>Pod</div>
            <div>Container</div>
            <div style={{ textAlign: 'center' }}>Status</div>
          </div>
          <div className={s.containerListItems}>
            {data.map((d, i) => (
              <div
                key={`${d.metric.container}${i}`}
                className={s.containerListItem}>
                <div style={{ flex: '0 0 20%' }}>{d.metric.pod}</div>
                <div>{d.metric.container}</div>
                <div>{this.formatBool(d.value[1])}</div>
              </div>
            ))}
          </div>
        </div>
      )

    return null
  }
}

TaskStatus.propTypes = {
  metric: PropTypes.array,
  label: PropTypes.string,
}

export default TaskStatus
