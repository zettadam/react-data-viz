import React, { Component } from 'react'
import {
  FlexibleWidthXYPlot,
  FlexibleHeightXYPlot,
  FlexibleXYPlot,
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  //VerticalGridLines,
  AreaSeries
} from 'react-vis'
//import { extent, max } from 'd3-array'
import { timeParse } from 'd3-time-format'

import COLORS from 'common/colorSchemes'
import { CURVE_MAP } from '../common'
import { styles } from './styles'

export default class AreaChart extends Component {

  static defaultProps = {
    data: [],
    height: 300,
    interpolation: 'monotoneX',
    flexible: true,
    margin: { top: 20, right: 20, bottom: 40, left: 60 },
    markSize: 3,
    opacity: 0.5,
    scale: { x: 'time', y: 'linear' },
    theme: 'schemeAccent',
    timeFormat: '%Y-%m-%d',
    width: 533,
    xField: 'x',
    yFields: ['y']
  }

  constructor (props) {
    super(props)

    switch(props.flexible) {
      case true:      this.plot = FlexibleXYPlot; break;
      case 'width':   this.plot = FlexibleWidthXYPlot; break;
      case 'height':  this.plot = FlexibleHeightXYPlot; break;
      default:        this.plot = XYPlot
    }

    this._renderSeries = this._renderSeries.bind(this)
  }

  _renderSeries () {
    const {
      data,
      interpolation,
      //markSize,
      opacity,
      scale,
      theme,
      timeFormat,
      xField,
      //xType,
      xPadding,
      yFields,
      yPadding
    } = this.props

    const parseTime = timeParse(timeFormat)
    const colors = COLORS[theme] || COLORS['schemeAccent']

    return yFields.map((y, i) => {

      const lineData = data.map(d => ({
        x: scale.x === 'time' ? parseTime(d[xField]) : d[xField],
        y: d[y]
      }))

      const props = {
        curve: CURVE_MAP[interpolation],
        data: lineData,
        interpolation,
        key: `line-${y}`,
        nullAccessor: d => d.y !== null,
        fill: colors[i % colors.length],
        opacity,
        stroke: 'none'
      }

      if (xPadding) props.xPadding = xPadding
      if (yPadding) props.yPadding = yPadding

      return <AreaSeries { ...props } />
    })
  }

  render () {

    const {
      //data,
      height,
      margin,
      stackBy,
      width,
      xAxis,
      //xField,
      yAxis,
      //yFields
    } = this.props

    // Plot props
    const plotProps = {
      margin
    }
    if (stackBy) plotProps.stackBy = stackBy

    const Plot = this.plot
    if (Plot instanceof XYPlot) {
      plotProps.height = height
      plotProps.width = width
    }
    if (Plot instanceof FlexibleHeightXYPlot) plotProps.width = width
    if (Plot instanceof FlexibleWidthXYPlot) plotProps.height = height


    // X/Y axes props
    const axisProps = {
      style: styles.axisStyle
    }

    const xAxisProps = {
      ...axisProps,
      ...xAxis
    }

    const yAxisProps = {
      ...axisProps,
      ...yAxis
    }

    return (
      <Plot { ...plotProps }>
        <HorizontalGridLines />
        { this._renderSeries() }

        <XAxis { ...xAxisProps } />
        <YAxis { ...yAxisProps } />
      </Plot>
    )
  }
}
