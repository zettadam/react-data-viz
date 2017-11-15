import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  VictoryChart,
  VictoryVoronoi,
  VictoryZoomContainer
} from 'victory'

import VictoryTheme from './themes'

export default class Chart extends Component {

  static propTypes = {
    canZoom: PropTypes.bool,
    data: PropTypes.array,
    theme: PropTypes.string,
    xField: PropTypes.string,
    yField: PropTypes.array
  }

  static defaultProps = {
    canZoom: false,
    data: [],
    theme: 'divergent',
    xField: '',
    yField: ''
  }

  render () {
    const {
      canZoom,
      domainPadding,
      theme
    } = this.props

    const chartProps = {
      theme: VictoryTheme.spark[theme]
    }

    if (domainPadding) chartProps.domainPadding = domainPadding
    if (canZoom) chartProps.containerComponent = <VictoryZoomContainer />

    return (
      <VictoryChart
        domain={ { x: [0, 5], y: [0, 7] } }>
        <VictoryVoronoi
          style={{ data: { stroke: "#c43a31", strokeWidth: 2 } }}
          data={ [
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7 }
          ] } />
      </VictoryChart>
    )
  }
}
