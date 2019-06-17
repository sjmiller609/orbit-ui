import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { ResponsiveLine } from '@nivo/line'
import { findIndex } from 'lodash'

import s from './styles.scss'

class Complexline extends React.Component {
  state = {
    data: [],
    emptyData: [],
  }

  componentDidUpdate(prevProps) {
    if (prevProps != this.props) {
      this.formatData(this.props)
    }
  }

  componentWillMount() {
    this.formatData(this.props)
  }

  formatValue = amount => {
    const { label } = this.props

    switch (label) {
      case 'GB':
        amount = (Math.round(amount) / 1073741824).toFixed(1)
        break
      case 'kB/s':
        amount = (Math.round(amount) / 1024).toFixed(0)
        break
      case '%':
        amount = amount.toFixed(0)
        break
      case 'ops':
        amount = amount.toFixed(2)
        break
      default:
        amount
    }

    return amount
  }

  formatData = props => {
    const { metric } = props
    const data = []
    const emptyData = []

    // Format the data OR generate placeholder for
    // data returned as 0 (so a graph will show)
    if (metric.length > 0) {
      metric.map(m => {
        const id = m.metric.operator
          ? m.metric.operator
          : m.metric.component_name.split(/\s(.+)/)[1]

        // Avoid duplicates
        const index = findIndex(data, { id })
        if (index === -1) {
          return data.push({
            id,
            data: m.values.map(v => {
              return {
                x: moment.unix(v[0]).toDate(),
                y: Number(v[1]),
              }
            }),
          })
        }
      })
    } else {
      emptyData.push({
        id: 'No data',
        data: Array.apply(null, Array(10)).map((v, i) => {
          return {
            x: moment()
              .subtract(i, 'minutes')
              .toDate(),
            y: Number(`0.000${i}`),
          }
        }),
      })
    }

    this.setState({ data, emptyData })
  }

  render() {
    const { data, emptyData } = this.state
    const { label } = this.props

    return (
      <div className={s.complexlineContainer}>
        <div className={s.complexlineElement} style={{ height: 300 }}>
          <ResponsiveLine
            data={data.length != 0 ? data : emptyData}
            margin={{ top: 20, right: 120, bottom: 80, left: 60 }}
            pixelRatio={2}
            colors={{ scheme: 'paired' }}
            curve="monotoneX"
            lineWidth={1}
            enableArea={true}
            isInteractive={data.length != 0}
            enablePoints={false}
            enableGridX={false}
            axisBottom={null}
            xScale={{
              type: 'time',
              format: 'native',
            }}
            yScale={{
              type: 'linear',
              stacked: true,
              min: 0,
              max: data.length != 0 ? 'auto' : 1,
            }}
            axisLeft={{
              orient: 'right',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              tickValues: 4,
              format: v =>
                `${Number(this.formatValue(v))}${
                  label != '%' ? ' ' : ''
                }${label}`,
            }}
            yFormat={v =>
              `${Number(this.formatValue(v))}${label != '%' ? ' ' : ''}${label}`
            }
            useMesh={true}
            enableSlices={data.length != 0 ? 'x' : false}
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
            sliceTooltip={({ slice }) => {
              return (
                <div className={s.tooltipContainer}>
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

Complexline.propTypes = {
  metric: PropTypes.array,
  label: PropTypes.string,
}

export default Complexline
