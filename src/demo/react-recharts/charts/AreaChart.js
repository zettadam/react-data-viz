import React, { Component } from 'react'

import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

export default class Chart extends Component {

  static defaultProps = {
    colors: [],
    data: [],
    interpolation: 'natural',
    stacked: false,
    stackOffset: ''
  }

  render () {

    const {
      colors,
      data,
      interpolation,
      stacked,
      stackOffset,
      xField,
      yFields
    } = this.props

    const chartProps = {
      data
    }

    if (stackOffset) chartProps.stackOffset = stackOffset

    return (
      <ResponsiveContainer width="96%" >
        <AreaChart { ...chartProps }>
          <XAxis dataKey={ xField } tickLine={ false }/>
          <YAxis tickLine={ false } />
          <Tooltip />
          <CartesianGrid strokeDasharray="0.5 0.5" />
          { yFields && yFields.map((f, i) => {
            let rgb = colors[i % colors.length]
            if (stacked) {
              return (
                <Area key={ f }
                  type={ interpolation }
                  stackId="0"
                  dataKey={ f }
                  stroke={ rgb }
                  fill={ rgb } />
              )
            }
            return (
              <Area key={ f } dataKey={ f }
                type={ interpolation }
                stroke={ rgb }
                fill={ rgb } />
            )
          } )}
          <Legend verticalAlign="top" height={ 32 } />
        </AreaChart>
      </ResponsiveContainer>
    )
  }
}
