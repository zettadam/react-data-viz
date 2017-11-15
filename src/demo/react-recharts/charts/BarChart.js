import React, { Component } from 'react'

import {
  Bar,
  BarChart,
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
    stacked: false
  }

  render () {

    const {
      colors,
      data,
      stacked,
      xField,
      yFields
    } = this.props

    console.log( 'BarChart props', this.props)

    return (
      <ResponsiveContainer width="96%">
        <BarChart data={ data }>
          <XAxis dataKey={ xField }
            padding={{ left: 10, right: 10 }}
            tickLine={ false } />
          <YAxis
            tickLine={ false } />
          <Tooltip />
          <CartesianGrid strokeDasharray="0.5 0.5" />
          { yFields && yFields.map((f, i) => {
            let rgb = colors[i % colors.length]
            if (stacked) {
              return (
                <Bar key={ f } stackId={ `0` }
                  dataKey={ f }
                  stroke={ rgb }
                  fill={ rgb } />
              )
            }
            return (
              <Bar key={ f } dataKey={ f }
                stroke={ rgb }
                fill={ rgb } />
            )
          } )}
          <Legend verticalAlign="top" height={ 32 } />
        </BarChart>
      </ResponsiveContainer>
    )
  }
}

