import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  VictoryChart,
  VictoryErrorBar
} from 'victory'

import VictoryTheme from './themes'

export default class ErrorBarChart extends Component {

  static propTypes = {
    borderWidth: PropTypes.number,
    data: PropTypes.array,
    domainPadding: PropTypes.object,
    events: PropTypes.array,
    height: PropTypes.number,
    style: PropTypes.object,
    theme: PropTypes.string,
    width: PropTypes.number
  }

  static defaultProps = {
    borderWidth: 10,
    domainPadding: { x: 10, y: 10 },
    theme: 'divergent'
  }

  render () {
    const {
      borderWidth,
      data,
      domainPadding,
      events,
      style,
      theme
    } = this.props

    const chartProps = {
      domainPadding,
      theme: VictoryTheme.spark[theme]
    }

    const errorBarProps = {
      borderWidth,
      data,
      errorX: d => d.error * d.x,
      errorY: d => d.error * d.y,
      events,
      style
    }

    return (
      <VictoryChart { ...chartProps }>
        <VictoryErrorBar { ...errorBarProps } />
      </VictoryChart>
    )
  }

}
