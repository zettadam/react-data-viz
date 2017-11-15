import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  //Label,
  Point,
  //VictoryAxis,
  VictoryScatter,
  VictoryChart,
  VictoryGroup,
  //VictoryLabel,
  VictoryLegend,
  VictoryTooltip,
  VictoryZoomContainer
} from 'victory'

import VictoryTheme from './themes'

import {
  adaptData,
  //createColorScale,
  getLegendData
} from './utils'


export default class ScatterChart extends Component {

  static propTypes = {
    canZoom: PropTypes.bool,
    data: PropTypes.array,
    domainPadding: PropTypes.object,
    stacked: PropTypes.bool,
    theme: PropTypes.string,
    xField: PropTypes.string,
    yFields: PropTypes.array
  }

  static defaultProps = {
    canZoom: false,
    data: [],
    stacked: true,
    theme: 'qualitativeB',
    xField: '',
    yFields: []
  }

  constructor (props) {
    super(props)

    this.handleLegendPointClick = this.handleLegendPointClick.bind(this)
  }

  handleLegendPointClick () {
    console.log( 'Clicked on legend data point', arguments)
  }

  render () {

    const {
      canZoom,
      data,
      domainPadding,
      //stacked,
      theme,
      xField,
      yFields
    } = this.props

    const adaptedData = adaptData({ data, xField, yFields })

    const chartProps = {
      theme: VictoryTheme.spark[theme]
    }

    if (domainPadding) chartProps.domainPadding = domainPadding
    if (canZoom) chartProps.containerComponent = <VictoryZoomContainer />

    const groupProps = {
      categories: { x: data.map(d => d[xField]) }
    }

    const legendEvents = {
      onClick: this.handleLegendPointClick
    }

    const legendProps = {
      data: getLegendData({ fields: yFields }),
      dataComponent: <Point events={ legendEvents } />,
      orientation: 'horizontal',
      textAnchor: 'middle',
      width: 400
    }

    return (
      <VictoryChart { ...chartProps }>
        <VictoryLegend { ...legendProps } />
        <VictoryGroup { ...groupProps }>
        { yFields.map((f, i) =>
          <VictoryScatter key={ `point${i}` } data={ adaptedData[i] }
            labelComponent={ <VictoryTooltip /> } />
        )}
        </VictoryGroup>
      </VictoryChart>
    )
  }
}
