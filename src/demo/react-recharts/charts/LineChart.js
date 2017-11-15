import React, { Component } from 'react'

import {
  Line,
  LineChart,
  CartesianGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis
} from 'recharts'


export default class Chart extends Component {

  static defaultProps = {
    colors: [],
    data: [],
    interpolation: 'natural'
  }

  render () {

    const {
      colors,
      data,
      interpolation,
      xField,
      yFields
    } = this.props

    return (
      <ResponsiveContainer width="96%">
        <LineChart data={ data }>
          <XAxis dataKey={ xField } tickLine={ false } />
          <YAxis tickLine={ false } />
          <Tooltip />
          <CartesianGrid strokeDasharray="0.5 0.5" vertical={ false } />
          { yFields && yFields.map((f, i) => {
            let rgb = colors[i % colors.length]
            return <Line type={ interpolation } key={ f } dataKey={ f } stroke={ rgb } />
          } )}
          <Legend verticalAlign="top" height={32} />
        </LineChart>
      </ResponsiveContainer>
    )
  }
}

