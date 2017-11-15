import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  createContainer,
  VictoryAxis,
  VictoryBrushContainer,
  VictoryLine,
  VictoryChart,
  VictoryGroup,
  VictoryLegend,
  //VictoryPortal,
  VictoryTooltip,
  VictoryScatter,
  VictoryZoomContainer
} from 'victory'

import VictoryTheme from './themes'

import { getLegendData } from './utils'


export default class LineChartMinimap extends Component {

  // Props --------------------------------------------------------------------

  static propTypes = {
    allowZoom: PropTypes.bool,
    annotations: PropTypes.arrayOf(PropTypes.node),
    brushContainerProps: PropTypes.object,
    brushXAxis: PropTypes.object,
    brushYAxis: PropTypes.object,
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
    allowZoom: false,
    annotations: [],
    brushContainerProps: {},
    chartContainerProps: {},
    data: [],
    handleStyle: {
      fill: 'rgb(127,186,255)', stroke: 'rgba(37,96,155,0.5)', strokeWidth: 1,
      width: '3px'
    },
    height: 300,
    interpolation: 'monotoneX',
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

    this.state = {}

    const c = props.chartContainers

    if (Array.isArray(c)) {
      if (c.length === 1) this.chartContainer = createContainer(c[0])
      if (c.length >= 2) this.chartContainer = createContainer(c[0], c[1])
    }

    this._renderLines = this._renderLines.bind(this)
    this._renderPoints = this._renderPoints.bind(this)
  }

  handleBrush (domain) {
    this.setState({ domain })
  }

  handleZoom (domain) {
    this.setState({ domain })
  }


  // "Private" render methods -------------------------------------------------

  _renderLines () {
    const {
      data,
      interpolation,
      xField,
      yFields
    } = this.props

    return yFields.map(y =>
      <VictoryLine key={ `line-${y}` }
        data={ data }
        interpolation={ interpolation }
        x={ xField }
        y={ y } />
    )
  }

  _renderPoints () {
    const { data, flyout, xField, yFields, tooltipProps } = this.props

    if (flyout) tooltipProps.flyoutComponent = flyout

    return yFields.map((y, i) =>
      <VictoryScatter key={ `point-${y}` }
        data={ data }
        x={ xField }
        y={ y }
        labels={ d => d[y] }
        labelComponent={
          <VictoryTooltip { ...tooltipProps }/>
        } />
    )
  }


  // Render method ------------------------------------------------------------

  render () {

    const {
      annotations,
      brushContainerProps,
      brushDomainPadding,
      brushXAxis,
      chartOptions,
      data,
      domainPadding,
      handleStyle,
      height,
      legendProps,
      scale,
      theme,
      width,
      withLinePoints,
      xAxis,
      xField,
      yAxis,
      yFields,
      zoomContainerProps
    } = this.props

    const {
      domain
    } = this.state

    // main chart props
    let chartProps = {
      domain: this.domain,
      height,
      theme: VictoryTheme.spark[theme],
      width
    }

    if (domainPadding) chartProps.domainPadding = domainPadding
    if (scale) chartProps.scale = scale
    if (chartOptions) chartProps = { ...chartProps, ...chartOptions }

    // group props
    const groupProps = {
      categories: { x: data.map(d => d[xField]) }
    }

    const minimapChartProps = {
      height: 100,
      scale,
      theme: VictoryTheme.spark[theme],
      width
    }
    if (brushDomainPadding) minimapChartProps.domainPadding = brushDomainPadding

    return (
      <div>
        <VictoryChart key="chart" { ...chartProps }
          containerComponent={
            <VictoryZoomContainer
              zoomDomain={ domain }
              onZoomDomainChange={ this.handleZoom.bind(this) }
              { ...zoomContainerProps }
            />
          }>

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
            <VictoryLegend { ...legendProps }
              data={ getLegendData({ fields: yFields }) }/> }

        </VictoryChart>

        <VictoryChart key="minimap" { ...minimapChartProps }
          containerComponent={
            <VictoryBrushContainer
              brushDomain={ domain }
              onBrushDomainChange={ this.handleBrush.bind(this) }
              { ...brushContainerProps }
              handleStyle={ handleStyle } />
          }>

          <VictoryAxis
            fixLabelOverlap
            { ...brushXAxis } />

          <VictoryGroup { ...groupProps }>
            { this._renderLines() }
          </VictoryGroup>

        </VictoryChart>
      </div>
    )
  }
}
