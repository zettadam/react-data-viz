// React imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// vx module imports
import { AxisLeft, AxisBottom } from '@vx/axis'
import { Grid } from '@vx/grid'
import { Group } from '@vx/group'
import { Bar } from '@vx/shape'
import { scaleBand, scaleLinear } from '@vx/scale'
import { ScaleSVG } from '@vx/responsive'

// D3 module imports
import { extent, max } from 'd3-array'

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

export default class BarChart extends Component {

  static propTypes = {
    axisStrokeColor: PropTypes.string,
    colors: PropTypes.array,
    data: PropTypes.array,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    hideZero: PropTypes.bool,
    labelColor: PropTypes.string,
    labelFontFamily: PropTypes.string,
    labelFontSize: PropTypes.number,
    tickColor: PropTypes.string,
    tickFontFamily: PropTypes.string,
    tickFontSize: PropTypes.number,
    tickStrokeColor: PropTypes.string,
    margin: PropTypes.object,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    xField: PropTypes.string,
    xPadding: PropTypes.number,
    yFields: PropTypes.array
  }

  static defaultProps = {
    axisStrokeColor: 'rgb(51,51,51)',
    colors: [],
    height: 350,
    hideZerp: true,
    labelAnchor: 'middle',
    labelColor: 'rgb(51,51,51)',
    labelFontFamily: 'Helvetica, Arial, Verdana, sans-serif',
    labelFontSize: 14,
    tickAnchor: 'end',
    tickColor: 'rgb(51,51,51)',
    tickFontFamily: 'sans-serif',
    tickFontSize: 12,
    tickStrokeColor: 'rgb(51,51,51)',
    margin: { top: 20, right: 20, bottom: 50, left: 70 },
    width: 700
  }

  constructor (props) {
    super(props)

    this.makeXScale = this.makeXScale.bind(this)
    this.makeYScale = this.makeYScale.bind(this)
    this.renderXAxis = this.renderXAxis.bind(this)
    this.renderYAxis = this.renderYAxis.bind(this)
    this.renderGrid = this.renderGrid.bind(this)
    this.renderBars = this.renderBars.bind(this)
  }

  makeXScale (options) {
    const { data, xField, xMax, xPadding } = options
    const scale = scaleBand({
      rangeRound: [0, xMax],
      domain: data.map(d => d[xField]),
      padding: 0.4,
    })
    return scale
  }

  makeYScale (options) {
    const { data, yFields, yMax } = options
    const domain = [0, max(data, d => max(yFields.map(k => d[k]))) ]
    const scale = scaleLinear({
      range: [yMax, 0],
      domain,
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

    const {
      axisStrokeColor,
      labelAnchor,
      labelColor,
      labelFontFamily,
      labelFontSize,
      labelFontWeight,
      tickAnchor,
      tickColor,
      tickFontFamily,
      tickFontSize,
      tickFontWeight,
      tickStrokeColor
    } = this.props

    return (
      <AxisLeft top={ top } left={ left }
        scale={ yScale } hideZero
        numTicks={ numYTicks(height) }
        label={ yLabel }
        labelProps={{
          fill: labelColor,
          textAnchor: labelAnchor,
          fontSize: labelFontSize,
          fontFamily: labelFontFamily,
          fontWeight: labelFontWeight
        }}
        stroke={ axisStrokeColor }
        tickStroke={ tickStrokeColor }
        tickLabelProps={ (value, index) => ({
          fill: tickColor,
          textAnchor: tickAnchor || 'end',
          fontSize: tickFontSize,
          fontFamily: tickFontFamily,
          dx: '-0.25em',
          dy: '0.25em'
        })} />
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

  renderBars (options) {
    const {
      colors,
      data,
      xField, xScale,
      yFields, yMax, yScale
    } = options
    const series = makeSeries({ data, xField, yFields })

    return data.map((d, i) => yFields.map((k, j) => {
      const barHeight = yMax - yScale(d[k])
      return (
        <Group key={ `bar-${d['x']}-${k}` }>
          <Bar data={ d }
            width={ xScale.bandwidth() }
            height={ barHeight }
            x={ xScale(d['x']) }
            y={ yMax - barHeight }
            fill={ colors[j % colors.length] }
            onClick={ data => event => {
              alert( `clicked: ${ JSON.stringify(data) }` )
            }} />
        </Group>
      )
    }))
  }

  render () {
    const {
      colors,
      data,
      grouped,
      height, margin, width,
      xField, xLabel,
      yFields, yLabel
    } = this.props

    // bounds
    const xMax = width - margin.left - margin.right
    const yMax = height - margin.top - margin.bottom

    // scales
    const xScale = this.makeXScale({ data, xField, xMax })
    const yScale = this.makeYScale({ data, yFields, yMax })

    return (
      <ScaleSVG height={ height } width={ width }>
        <svg width={ width } height={ height }>

        { this.renderGrid({
            height, margin, width,
            xScale, xMax,
            yScale, yMax
          }) }

          <Group top={ margin.top } left={ margin.left }>
          { this.renderBars({
              colors,
              data,
              xField, xScale,
              yFields, yMax, yScale
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
