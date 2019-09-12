import React from 'react'
import PropTypes from 'prop-types'
import { ResponsiveLine } from '@nivo/line'
import { P } from 'instruments'
import moment from 'moment'

import s from './styles.scss'

class Stream extends React.Component {
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

  transformData = data => {
    const formatted = []

    data.result[0].values.map(item => {
      formatted.push({
        x: moment.unix(item[0]).format('YYYY-MM-DD HH:mm:ss'),
        y: parseInt(item[1]) || 0,
      })
    })

    return formatted
  }

  formatData = props => {
    const { metric } = props

    const queued = metric[0]
    const running = metric[1]
    const success = metric[2]
    const fail = metric[3]

    const metrics = []

    if (fail.result[0])
      metrics.push({
        id: 'Failed Tasks',
        color: '#FF523A',
        data: this.transformData(fail),
      })

    if (success.result[0])
      metrics.push({
        id: 'Successful Tasks',
        color: '#049a59',
        data: this.transformData(success),
      })

    if (running.result[0])
      metrics.push({
        id: 'Running Tasks',
        color: '#07d65b',
        data: this.transformData(running),
      })

    if (queued.result[0])
      metrics.push({
        id: 'Queued Tasks',
        color: '#C8C3BD',
        data: this.transformData(queued),
      })

    this.setState({ data: metrics })
  }

  render() {
    const { data } = this.state

    return (
      <div className={s.complexlineContainer}>
        {data.length === 0 && (
          <div className={s.streamNoData}>
            <P>No task data</P>
          </div>
        )}
        <div className={s.complexlineElement} style={{ height: 300 }}>
          <ResponsiveLine
            data={data}
            colors={{ datum: 'color' }}
            margin={{ top: 10, right: 0, bottom: 65, left: 50 }}
            xScale={{
              type: 'time',
              format: '%Y-%m-%d %H:%M:%S',
            }}
            xFormat="time:%m/%d %Hh %Mm $Ss"
            axisTop={null}
            axisBottom={{
              format: '%H:%M:%S',
              tickValue: 1,
            }}
            yScale={{
              type: 'linear',
              stacked: true,
              min: 'auto',
              max: 'auto',
            }}
            legends={[
              {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 55,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 125,
                itemHeight: 20,
                itemOpacity: 1,
                symbolSize: 5,
                symbolShape: 'square',
              },
            ]}
            lineWidth={1}
            enableArea={true}
            areaOpacity={1}
            enablePoints={false}
            enableGridX={true}
            curve="monotoneX"
            animate={false}
            isInteractive={true}
            enableSlices="x"
            useMesh={true}
            sliceTooltip={({ slice }) => {
              return (
                <div className={s.tooltipContainer}>
                  {moment(slice.points[0].data.x).format('YYYY-MM-DD HH:mm:ss')}
                  {slice.points.map(point => (
                    <div key={point.id} className={s.tooltip}>
                      <strong style={{ color: point.serieColor }}>
                        {point.serieId}
                      </strong>
                      {point.data.yFormatted}
                    </div>
                  ))}
                </div>
              )
            }}
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
