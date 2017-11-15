import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryLegend,
  VictoryStack,
  VictoryTooltip
} from 'victory'

import VictoryTheme from './themes'

import { getLegendData } from './utils'


const numberFormat = new Intl.NumberFormat(navigator.language)

export default class BarChart extends Component {

  static propTypes = {
    data: PropTypes.array,
    grouped: PropTypes.bool,
    horizontal: PropTypes.bool,
    legendProps: PropTypes.object,
    stacked: PropTypes.bool,
    theme: PropTypes.string,
    xAxis: PropTypes.object,
    xField: PropTypes.string,
    yAxis: PropTypes.object,
    yFields: PropTypes.array
  }

  static defaultProps = {
    data: [],
    defaultLegendProps: {
      gutter: 0,
      orientation: 'horizontal',
      style: {
        border: { fill: 'white', stroke: '#36454f', strokeWidth: 1 },
        borderPadding: 0
      },
      x: 355, y: 10
    },
    grouped: false,
    horizontal: false,
    scale: { x: 'linear', y: 'linear' },
    stacked: false,
    theme: 'qualitativeA',
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
    withTooltips: false,
    xField: '',
    yFields: []
  }

  constructor (props) {
    super(props)

    this.renderBars = this.renderBars.bind(this)
  }

  renderBars () {
    const {
      alignment,
      data,
      flyout,
      tooltipProps,
      withTooltips,
      xField,
      yFields
    } = this.props

    const props = {
      data,
      style: {
        data: { strokeWidth: 0 },
        labels: { fill: 'white', fontSize: 11 }
      },
      x: xField
    }
    if (alignment) props.alignment = alignment

    return yFields.map((y, i) => {
      const barProps = {
        ...props,
        key: `bar-${i}-${y}`,
        y
      }
      if (withTooltips) {
        if (flyout) tooltipProps.flyoutComponent = flyout
        barProps.labelComponent = <VictoryTooltip { ...tooltipProps } />
        barProps.labels = d => `${d[xField]}, ${y}: ${numberFormat.format(Math.round(d[y]))}`
      }

      return <VictoryBar { ...barProps} />
    })
  }

  render () {
    const {
      data,
      domainPadding,
      horizontal,
      grouped,
      legendProps,
      //offset,
      scale,
      stacked,
      theme,
      xAxis,
      xField,
      yAxis,
      yFields,
      //yMax,
      //yMin
    } = this.props

    const chartProps = {
      scale,
      theme: VictoryTheme.spark[theme]
    }

    if (domainPadding) chartProps.domainPadding = domainPadding

    const groupProps = {
      categories: { x: data.map(d => d[xField]) },
      horizontal,
      offset: horizontal ? 3 : yFields.length
    }

    return (
      <VictoryChart { ...chartProps }>

        <VictoryAxis
          fixLabelOverlap
          { ...xAxis } />

        <VictoryAxis
          dependentAxis
          { ...yAxis } />

        { !stacked &&
        <VictoryGroup { ...groupProps }>
          { this.renderBars() }
        </VictoryGroup> }

        { stacked && !grouped &&
        <VictoryStack { ...groupProps }>
          { this.renderBars() }
        </VictoryStack> }

        { legendProps &&
        <VictoryLegend
          { ...this.props.defaultLegendProps }
          { ...legendProps }
          data={ getLegendData({ fields: yFields }) } /> }
      </VictoryChart>
    )
  }
}
