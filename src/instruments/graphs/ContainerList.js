import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import s from './styles.scss'

class ContainerList extends React.Component {
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

    if (data.length > 0) {
      data.sort((a, b) => {
        let textA = a.metric.container.toUpperCase()
        let textB = b.metric.container.toUpperCase()
        return textA < textB ? -1 : textA > textB ? 1 : 0
      })
      return (
        <div className={s.containerListContainer}>
          <div className={s.containerListHeader}>
            <div>Pod</div>
            <div style={{ flex: '0 0 45%' }}>Container</div>
            <div style={{ textAlign: 'center', flex: '0 0 10%' }}>Status</div>
          </div>
          <div className={s.containerListItems}>
            {data.map(
              (d, i) =>
                d.metric.container && (
                  <div
                    key={`${d.metric.container}${i}`}
                    className={s.containerListItem}>
                    <div>{d.metric.pod}</div>
                    <div style={{ flex: '0 0 45%' }}>{d.metric.container}</div>
                    <div style={{ textAlign: 'center', flex: '0 0 10%' }}>
                      {this.formatBool(d.value[1])}
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      )
    }

    return null
  }
}

ContainerList.propTypes = {
  metric: PropTypes.array,
  label: PropTypes.string,
}

export default ContainerList
