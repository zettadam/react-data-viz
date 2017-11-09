import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  VictoryAxis,
  VictoryChart,
  VictoryCandlestick,
  VictoryTooltip
} from 'victory'

import VictoryTheme from './themes'

export default class CandlestickChart extends Component {

  static propTypes = {
    candleColors: PropTypes.object,
    close: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    data: PropTypes.array,
    domainPadding: PropTypes.object,
    events: PropTypes.array,
    high: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    low: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    open: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    scale: PropTypes.object,
    theme: PropTypes.string,
    x: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  }

  static defaultProps = {
    candleColors: { positive: "#5f5c5b", negative: "#c43a31" },
    close: 'close',
    domainPadding: { x: 15, y: 0 },
    high: 'high',
    low: 'low',
    open: 'open',
    scale: { x: 'time', y: 'linear' },
    size: 4,
    theme: 'qualitativeA',
    x: d => new Date(d.date)
  }

  render () {
    const {
      candleColors,
      data,
      domainPadding,
      events,
      scale,
      size,
      theme,
      x, open, high, low, close
    } = this.props

    const chartProps = {
      domainPadding,
      scale,
      theme: VictoryTheme.spark[theme]
    }

    const candlestickProps = {
      candleColors,
      close,
      data: data.map(d => ({ ...d, label: `Open: ${d.open}\nClose: ${d.close}\nHigh: ${d.high}\nLow: ${d.low}` })),
      events,
      low,
      high,
      open,
      size,
      x
    }

    return (
      <VictoryChart { ...chartProps }>
        <VictoryAxis />
        <VictoryAxis dependentAxis />
        <VictoryCandlestick { ...candlestickProps }
          labelComponent={ <VictoryTooltip /> } />
      </VictoryChart>
    )
  }
}
