import React, { Component } from 'react'

import {
  VictoryBar,
  VictoryChart,
  VictoryPolarAxis,
  VictoryStack,
  VictoryTooltip
} from 'victory'

import VictoryTheme from './themes'

import { adaptData, getLegendData } from './utils'

export default class RoseChart extends Component {

  static defaultProps = {
    domain: { x: [0, 360] }
  }

  constructor (props) {
    super(props)

    this.renderBars = this.renderBars.bind(this)
  }

  renderBars (data) {
    const { yFields } = this.props

    return yFields.map((f, i) =>
      <VictoryBar key={ `bar${i}` } data={ data[i] }
        labelComponent={ <VictoryTooltip /> } /> )
  }

  render () {
    const {
      data,
      domain,
      stacked,
      style,
      theme,
      xField,
      yFields
    } = this.props

    const adaptedData = adaptData({ data, xField, yFields })
    const chartProps = {
      //domain,
      theme: VictoryTheme.spark[theme]
    }

    return (
      <VictoryChart polar { ...chartProps }>
        <VictoryPolarAxis dependentAxis />
        <VictoryPolarAxis tickCount={ 8 } />
        <VictoryStack>
          { this.renderBars(adaptData) }
        </VictoryStack>
      </VictoryChart>
    )
  }
}
