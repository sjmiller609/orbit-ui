import React from 'react'
import PropTypes from 'prop-types'
import { ResponsiveStream } from '@nivo/stream'
import { P } from 'instruments'

import s from './styles.scss'

class Stream extends React.Component {
  state = {
    data: [],
    length: 0,
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

    let length = 0
    if (
      metric[0] != undefined &&
      metric[1] != undefined &&
      metric[2] != undefined &&
      metric[3] != undefined
    ) {
      length = [].concat.apply(
        [],
        [metric[0].result, metric[1].result, metric[2].result, metric[3].result]
      ).length
    }

    Array.apply(null, Array(length > 0 ? length : 30)).map((v, i) => {
      data.push({
        'Queued Tasks':
          metric[0].result.length != 0 &&
          metric[0].result[0].values[i] != undefined
            ? Math.round(Number(metric[0].result[0].values[i][1]))
            : 0,
        'Running Tasks':
          metric[1].result.length != 0 &&
          metric[1].result[0].values[i] != undefined
            ? Math.round(Number(metric[1].result[0].values[i][1]))
            : 0,
        'Successful Tasks':
          metric[2].result.length != 0 &&
          metric[2].result[0].values[i] != undefined
            ? Math.round(Number(metric[2].result[0].values[i][1]))
            : 0,
        'Failed Tasks':
          metric[3].result.length != 0 &&
          metric[3].result[0].values[i] != undefined
            ? Math.round(Number(metric[3].result[0].values[i][1]))
            : 0,
      })
    })

    this.setState({ length, data })
  }

  render() {
    const { length, data } = this.state

    return (
      <div className={s.streamContainer}>
        {length === 0 && (
          <div className={s.streamNoData}>
            <P>No task data</P>
          </div>
        )}
        <div className={s.streamElement} style={{ height: 150 }}>
          <ResponsiveStream
            data={data}
            keys={[
              'Queued Tasks',
              'Running Tasks',
              'Successful Tasks',
              'Failed Tasks',
            ]}
            margin={{ top: 0, right: 150, bottom: 30, left: 40 }}
            fillOpacity={0.85}
            legends={[
              {
                anchor: 'top-right',
                direction: 'column',
                justify: false,
                translateX: 65,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 50,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 5,
                symbolShape: 'square',
              },
            ]}
          />
        </div>
      </div>
    )
  }
}

Stream.propTypes = {
  metric: PropTypes.array,
  label: PropTypes.string,
}

export default Stream
