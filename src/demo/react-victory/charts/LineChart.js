import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  createContainer,
  VictoryAxis,
  VictoryLine,
  VictoryChart,
  VictoryGroup,
  VictoryLegend,
  //VictoryPortal,
  VictoryTooltip,
  VictoryScatter
} from 'victory'

import VictoryTheme from './themes'

import { getLegendData } from './utils'


export default class LineChart extends Component {

  // Props --------------------------------------------------------------------

  static propTypes = {
    annotations: PropTypes.arrayOf(PropTypes.node),
    chartOptions: PropTypes.object,
    chartContainers: PropTypes.array,
    chartContainerProps: PropTypes.object,
    data: PropTypes.array,
    domainPadding: PropTypes.object,
    flyout: PropTypes.node,
    height: PropTypes.number,
    interpolation: PropTypes.string,
    legendProps: PropTypes.object,
    scale: PropTypes.object,
    theme: PropTypes.string,
    tooltipProps: PropTypes.object,
    width: PropTypes.number,
    withLinePoints: PropTypes.bool,
    xAxis: PropTypes.object,
    xField: PropTypes.string,
    yAxis: PropTypes.object,
    yFields: PropTypes.array
  }

  static defaultProps = {
    annotations: [],
    chartContainerProps: {},
    data: [],
    height: 300,
    interpolation: 'natural',
    scale: { x: 'time', y: 'linear' },
    theme: 'sequential',
    tooltipProps: {
      cornerRadius: 0,
      flyoutStyle: {
        fill: '#36454f',
        fillOpacity: 0.85,
        stroke: '#36454f'
      },
      pointerLength: 10,
      renderInPortal: true
    },
    width: 533,
    withLinePoints: false,
    xField: '',
    yFields: []
  }


  // Constructor --------------------------------------------------------------

  constructor (props) {
    super(props)

    const c = props.chartContainers

    if (Array.isArray(c)) {
      if (c.length === 1) this.chartContainer = createContainer(c[0])
      if (c.length >= 2) this.chartContainer = createContainer(c[0], c[1])
    }

    this._renderLines = this._renderLines.bind(this)
    this._renderPoints = this._renderPoints.bind(this)
  }


  // "Private" render methods -------------------------------------------------

  _renderLines () {
    const {
      chartContainers,
      data,
      flyout,
      interpolation,
      tooltipProps,
      withLinePoints,
      xField,
      yFields
    } = this.props

    const withTooltips = !withLinePoints && chartContainers && chartContainers.includes('voronoi')

    const lineProps = {
      data,
      interpolation,
      x: xField,
    }
    if (withTooltips) {
      if (flyout) tooltipProps.flyoutComponent = flyout
      lineProps.labelComponent = <VictoryTooltip { ...tooltipProps } />
    }

    return yFields.map((y, i) => {
      const fieldProps = {
        key: `line-${y}`,
        y
      }
      if (withTooltips) fieldProps.labels = d => d[y]

      return (
        <VictoryLine { ...lineProps } { ...fieldProps } />
      )
    })
  }

  _renderPoints () {
    const { data, flyout, xField, yFields, tooltipProps } = this.props

    if (flyout) tooltipProps.flyoutComponent = flyout

    return yFields.map((f, i) =>
      <VictoryScatter key={ `point-${i}` }
        data={ data }
        x={ xField }
        y={ f }
        labels={ d => d[f] }
        labelComponent={
          <VictoryTooltip { ...tooltipProps }/>
        } />
    )
  }


  // Render method ------------------------------------------------------------

  render () {

    const {
      annotations,
      chartContainerProps,
      chartOptions,
      data,
      domain,
      domainPadding,
      height,
      legendProps,
      scale,
      theme,
      width,
      withLinePoints,
      xAxis,
      xField,
      yAxis,
      yFields
    } = this.props

    // main chart props
    let chartProps = {
      height,
      theme: VictoryTheme.spark[theme],
      width
    }

    if (this.chartContainer) chartProps.containerComponent = <this.chartContainer { ...chartContainerProps } />
    if (domain) chartProps.domain = domain
    if (domainPadding) chartProps.domainPadding = domainPadding
    if (scale) chartProps.scale = scale
    if (chartOptions) chartProps = { ...chartProps, ...chartOptions }

    // group props
    const groupProps = {
      categories: { x: data.map(d => d[xField]) }
    }

    return (
      <VictoryChart key="chart" { ...chartProps }>

        <VictoryAxis
          fixLabelOverlap
          { ...xAxis } />

        <VictoryAxis
          dependentAxis
          fixLabelOverlap
          { ...yAxis } />

        <VictoryGroup { ...groupProps }>
          { this._renderLines() }
        </VictoryGroup>

        { withLinePoints &&
        <VictoryGroup { ...groupProps }>
          { this._renderPoints() }
        </VictoryGroup> }

        { annotations }

        { legendProps &&
          <VictoryLegend { ...legendProps } data={ getLegendData({ fields: yFields }) }/> }

      </VictoryChart>
    )
  }
}
