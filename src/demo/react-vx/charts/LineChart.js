// React imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// vx module imports
import { AxisLeft, AxisBottom } from '@vx/axis'
import { Grid } from '@vx/grid'
import { Group } from '@vx/group'
import { LinePath } from '@vx/shape'
//import { GlyphDot } from '@vx/glyph'
import { scaleTime, scaleLinear } from '@vx/scale'
import { ScaleSVG } from '@vx/responsive'

// D3 module imports
import { max } from 'd3-array'
import { timeParse } from 'd3-time-format'

import COLORS from 'common/colorSchemes'
import { CURVE_MAP } from '../common'

const makeTimeSeries = ({
  data,
  timeFormat,
  xField,
  yFields
}) => {
  const parseTime = timeParse(timeFormat)
  return yFields.map((k, i) => data.map(d => ({ x: parseTime(d[xField]), y: d[k] })) )
}

const makeSeries = ({
  data,
  xField,
  yFields
}) => yFields.map((k, i) => data.map(d => ({ x: d[xField], y: d[k] })) )

// responsive utils for axis ticks
const numYTicks = height => {
  if (height <= 300) return 3
  if (300 < height && height <= 600) return 5
  return 10
}

const numXTicks = width => {
  if (width <= 300) return 2
  if (300 < width && width <= 400) return 5
  return 10
}


export default class LineChart extends Component {

  static propTypes = {
    data: PropTypes.array,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    interpolation: PropTypes.string,
    lineAttrs: PropTypes.object,
    margin: PropTypes.object,
    theme: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    xField: PropTypes.string,
    yFields: PropTypes.array
  }

  static defaultProps = {
    height: 350,
    interpolation: 'natural',
    lineAttrs: { strokeWidth: 2 },
    margin: { top: 20, right: 20, bottom: 50, left: 70 },
    theme: 'schemeAccent',
    timeFormat: '%Y-%B-%d',
    width: 700
  }

  makeXScale (options) {
    const { data, xField, xMax, timeFormat } = options
    const parseTime = timeParse(timeFormat)
    const startDate = parseTime(data[0][xField])
    const endDate = parseTime(data[data.length - 1][xField])

    const scale = scaleTime({
      range: [0, xMax],
      domain: [startDate, endDate],
    })

    return scale
  }

  makeYScale (options) {
    const { data, yFields, yMax } = options

    const scale = scaleLinear({
      range: [yMax, 0],
      domain: [0, max(data, d => max(yFields.map(k => d[k]))) ],
      nice: true
    })
    return scale
  }

  renderGrid (options) {
    const {
      height, width, margin: { top, left },
      xScale, xMax,
      yScale, yMax
    } = options

    return (
      <Grid top={ top } left={ left } height={ yMax } width={ xMax }
        numTicksRows={ numYTicks(height) }
        numTicksColumns={ numXTicks(width) }
        stroke="rgb(220,220,220)" strokeWidth="1" strokeDasharray="10, 5"
        xScale={ xScale } yScale={ yScale } />
    )
  }

  renderYAxis (options) {
    const {
      height,
      margin: { top, left },
      yLabel,
      yScale,
    } = options

    return (
      <AxisLeft top={ top } left={ left }
        scale={ yScale } hideZero
        numTicks={ numYTicks(height) }
        label={ yLabel }
        labelProps={{ fill: 'rgb(51,51,51)', textAnchor: 'middle', fontSize: 14, fontFamily: 'Arial', fontWeight: 600 }}
        stroke="rgb(51,51,51)"
        tickStroke="rgb(51,51,51)"
        tickLabelProps={ (value, index) => ({ fill: 'rgb(51,51,51)', textAnchor: 'end', fontSize: 11, fontFamily: 'Arial', dx: '-0.25em', dy: '0.25em' })} />
    )
  }

  renderXAxis (options) {
    const {
      height,
      margin: { bottom, left },
      width,
      xLabel,
      xScale
    } = options

    return (
      <AxisBottom top={ height - bottom } left={ left }
        scale={ xScale }
        numTicks={ numXTicks(width) }
        label={ xLabel }
        labelProps={{ fill: 'rgb(51,51,51)', textAnchor: 'middle', fontSize: 14, fontFamily: 'Arial', fontWeight: 600 }}
        stroke="rgb(51,51,51)"
        tickStroke="rgb(51,51,51)"
        tickLabelProps={ (value, index) => ({ fill: 'rgb(51,51,51)', textAnchor: 'middle', fontSize: 11, fontFamily: 'Arial', dy: '0.25em' })} />
    )
  }

  renderLines (options) {
    const {
      data,
      interpolation,
      lineAttrs,
      theme,
      timeFormat,
      xField, xScale,
      yFields, yScale
    } = options

    const curveFn = CURVE_MAP[interpolation]
    const colors = COLORS[theme]

    let series

    if (timeFormat) {
      series = makeTimeSeries({ data, timeFormat, xField, yFields })
    } else {
      series = makeSeries({ data, xField, yFields })
    }

    return series.map((d, i) => {
      return (
        <Group key={`lines-${i}`}>
          <LinePath data={ d }
            xScale={ xScale } yScale={ yScale }
            x={ d => d['x'] } y={ d => d['y'] }
            { ...lineAttrs }
            stroke={ colors[i % colors.length]}
            curve={ curveFn } />
        </Group>
      )
    })
  }

  render () {
    const {
      data,
      interpolation,
      lineAttrs,
      height, margin, width,
      theme,
      timeFormat,
      xField, xLabel,
      yFields, yLabel
    } = this.props

    // bounds
    const xMax = width - margin.left - margin.right
    const yMax = height - margin.top - margin.bottom

    // scales
    const xScale = this.makeXScale({ data, timeFormat, xField, xMax })
    const yScale = this.makeYScale({ data, yFields, yMax })

    return (
      <ScaleSVG width={ width } height={ height }>
        <svg width={ width } height={ height }>

          { this.renderGrid({
              height, margin, width,
              xScale, xMax,
              yScale, yMax
            }) }

          <Group top={ margin.top } left={ margin.left }>
          { this.renderLines({
              data,
              interpolation,
              lineAttrs,
              theme,
              timeFormat,
              xField, xScale,
              yFields, yScale
            }) }
          </Group>

          { this.renderYAxis({
            height, margin,
            yLabel, yScale
            }) }

          { this.renderXAxis({
            height, margin, width,
            xLabel, xScale
            }) }
        </svg>
      </ScaleSVG>
    )
  }
}
