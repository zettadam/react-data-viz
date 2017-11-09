// React imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// vx module imports
import { AxisLeft, AxisBottom } from '@vx/axis'
import { Grid } from '@vx/grid'
import { BarGroup } from '@vx/shape'
import { Group } from '@vx/group'
import { scaleBand, scaleLinear, scaleOrdinal } from '@vx/scale'
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

export default class GroupedBarChart extends Component {

  static propTypes = {
    colors: PropTypes.array,
    data: PropTypes.array,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    margin: PropTypes.object,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    xField: PropTypes.string,
    xPadding: PropTypes.number,
    yFields: PropTypes.array
  }

  static defaultProps = {
    colors: [],
    width: 700,
    height: 350,
    margin: { top: 20, right: 20, bottom: 50, left: 70 }
  }

  makeX0Scale (options) {
    const { data, xField, xMax, xPadding } = options
    const scale = scaleBand({
      rangeRound: [0, xMax],
      domain: data.map(d => d[xField]),
      padding: xPadding || 0.4,
    })
    return scale
  }

  makeX1Scale (options) {
    const { yFields, x0Scale, x1Padding } = options

    const scale = scaleBand({
      rangeRound: [0, x0Scale.bandwidth()],
      domain: yFields,
      padding: x1Padding || 0.2
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

  makeZScale (options) {
    const { colors, yFields } = options
    const scale = scaleOrdinal({
      domain: yFields,
      range: colors
    })
    console.log('colors', colors)
    return scale
  }

  renderGrid (options) {
    const {
      height, width, margin: { top, left },
      x0Scale, x1Scale, xMax,
      yScale, yMax
    } = options

    return (
      <Grid top={ top } left={ left } height={ yMax } width={ xMax }
        numTicksRows={ numYTicks(height) }
        numTicksColumns={ numXTicks(width) }
        stroke="rgb(220,220,220)" strokeWidth="1" strokeDasharray="10, 5"
        xScale={ x0Scale } yScale={ yScale } />
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
      x0Scale
    } = options

    return (
      <AxisBottom top={ height - bottom } left={ left }
        scale={ x0Scale }
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
      margin,
      xField, x0Scale, x1Scale,
      yFields, yMax, yScale,
      zScale
    } = options

    const x0 = d => {
      return d[xField]
    }

    return (
      <BarGroup
        data={ data }
        keys={ yFields }
        height={ yMax }
        x0={ x0 }
        x0Scale={ x0Scale }
        x1Scale={ x1Scale }
        yScale={ yScale }
        zScale={ zScale }
        onClick={ data => event => {
          alert(`clicked: ${JSON.stringify(data)}`)
        }} />
    )
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
    const x0Scale = this.makeX0Scale({ data, xField, xMax })
    const x1Scale = this.makeX1Scale({ yFields, x0Scale })
    const yScale = this.makeYScale({ data, yFields, yMax })
    const zScale = this.makeZScale({ colors, yFields })

    return (
      <ScaleSVG height={ height } width={ width }>
        <svg width={ width } height={ height }>

        { this.renderGrid({
            height, margin, width,
            x0Scale, x1Scale, xMax,
            yScale, yMax
          }) }

          <Group top={ margin.top } left={ margin.left }>
          { this.renderBars({
              colors,
              data,
              margin,
              xField, x0Scale, x1Scale,
              yFields, yMax, yScale,
              zScale
            }) }
          </Group>

        { this.renderYAxis({
            height, margin,
            yLabel, yScale
          }) }

        { this.renderXAxis({
            height, margin, width,
            xLabel, x0Scale
          }) }

        </svg>
      </ScaleSVG>
    )
  }

}
