import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  createContainer,
  VictoryArea,
  VictoryAxis,
  VictoryChart,
  VictoryCursorContainer,
  VictoryGroup,
  VictoryLegend,
  VictoryStack,
  VictoryTooltip
} from 'victory'

import VictoryTheme from './themes'

import { adaptData, getLegendData } from './utils'


export default class AreaChart extends Component {

  static propTypes = {
    annotations: PropTypes.arrayOf(PropTypes.node),
    chartContainers: PropTypes.array,
    chartContainerProps: PropTypes.object,
    data: PropTypes.array,
    interpolation: PropTypes.string,
    legendProps: PropTypes.object,
    scale: PropTypes.object,
    stacked: PropTypes.bool,
    theme: PropTypes.string,
    xAxis: PropTypes.object,
    xField: PropTypes.string,
    yAxis: PropTypes.object,
    yFields: PropTypes.array
  }

  static defaultProps = {
    annotations: [],
    chartContainerProps: {},
    data: [],
    interpolation: 'monotoneX',
    scale: { x: 'time', y: 'linear' },
    stacked: false,
    theme: 'divergent',
    tooltipOptions: {
      cornerRadius: 0,
      flyoutStyle: {
        fill: '#36454f',
        fillOpacity: 0.85,
        stroke: '#36454f'
      },
      pointerLength: 10,
      renderInPortal: true
    },
    withLinePoints: false,
    xField: '',
    yFields: []
  }

  constructor (props) {
    super(props)

    const cts = props.chartContainers

    if (Array.isArray(cts)) {
      if (cts.length === 1) this.chartContainer = createContainer(cts[0])
      if (cts.length >= 2) this.chartContainer = createContainer(cts[0], cts[1])
    }

    this.renderAreas = this.renderAreas.bind(this)
  }

  renderAreas () {
    const {
      chartContainers,
      data,
      flyout,
      interpolation,
      tooltipOptions,
      withLinePoints,
      xField,
      yFields
    } = this.props

    const withTooltips = !withLinePoints && chartContainers && chartContainers.includes('voronoi')

    const areaProps = {
      data,
      interpolation,
      x: xField,
    }
    if (withTooltips) {
      if (flyout) tooltipOptions.flyoutComponent = flyout
      areaProps.labelComponent = <VictoryTooltip { ...tooltipOptions } />
    }

    return yFields.map((y, i) => {
      const fieldProps = {
        key: `area-${y}`,
        y
      }
      if (withTooltips) fieldProps.labels = d => d[y]

      return <VictoryArea { ...areaProps } { ...fieldProps } />
    })
  }

  render () {
    const {
      annotations,
      chartContainers,
      chartOptions,
      data,
      domain,
      domainPadding,
      legendProps,
      scale,
      stacked,
      theme,
      xAxis,
      xField,
      yAxis,
      yFields
    } = this.props

    const chartProps = {
      theme: VictoryTheme.spark[theme]
    }

    if (domain) chartProps.domain = domain
    if (domainPadding) chartProps.domainPadding = domainPadding
    if (scale && !xAxis && !yAxis) chartProps.scale = scale
    if (chartOptions) chartProps = { ...chartProps, ...chartOptions }

    const props = {
      categories: { x: data.map(d => d[xField]) }
    }

    return (
      <VictoryChart { ...chartProps }>

        <VictoryAxis
          fixLabelOverlap
          { ...xAxis } />

        <VictoryAxis
          dependentAxis
          fixLabelOverlap
          { ...yAxis } />

        { !stacked &&
        <VictoryGroup { ...props }>
          { this.renderAreas() }
        </VictoryGroup> }

        { stacked &&
        <VictoryStack { ...props }>
          { this.renderAreas() }
        </VictoryStack> }

        { annotations }

        { legendProps &&
        <VictoryLegend
          { ...legendProps }
          data={ getLegendData({ fields: yFields }) } /> }

      </VictoryChart>
    )
  }
}
