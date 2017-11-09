import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  VictoryChart,
  VictoryPie
} from 'victory'

import VictoryTheme from './themes'

import { adaptData } from './utils'


export default class AreaChart extends Component {

  static propTypes = {
    data: PropTypes.array,
    innerRadius: PropTypes.number,
    labelRadius: PropTypes.number,
    style: PropTypes.object,
    theme: PropTypes.string
  }

  static defaultProps = {
    data: [],
    innerRadius: 0,
    labelRadius: 0,
    theme: 'divergent',
  }

  render () {
    const {
      data,
      innerRadius,
      labelRadius,
      style,
      theme,
    } = this.props

    const pieProps = {
      data,
      innerRadius,
      labelRadius,
      theme: VictoryTheme.spark[theme]
    }

    if (style) pieProps.style = style

    return (
      <VictoryPie { ...pieProps } />
    )
  }
}
