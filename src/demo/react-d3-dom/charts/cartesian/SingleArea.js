import React, { Component } from 'react'
import * as d3 from 'd3'
import { isEqual } from 'lodash'

import {
  MONOCHROMATIC_COLORS,
  CUSTOM_COLORS
} from '../colors'
import { CURVE_MAP } from '../../common'

const COLOR_SCHEME = MONOCHROMATIC_COLORS['theme3']


export default class SingleArea extends Component {

  static defaultProps = {
    height: 300,
    interpolation: 'natural',
    margin: {
      top: 20,
      right: 20,
      bottom: 20,
      left: 60
    },
    width: 600
  }

  constructor (props) {
    super(props)

    this.renderChart = this.renderChart.bind(this)
  }

  //
  // LIFECYCLE METHODS --------------------------------------------------------
  //
  componentDidMount () {
    this.renderChart()
  }

  shouldComponentUpdate (nextProps) {

    if (!isEqual(this.props.data, nextProps.data)) {
      return false
    }

    return true
  }

  componentDidUpdate () {
    this.renderChart()
  }

  //
  // RENDER METHODS -----------------------------------------------------------
  //

  renderChart () {

    const {
      data,
      height,
      interpolation,
      margin,
      width,
      xField,
      yField
    } = this.props

    const svg = d3.select(this.rootEl)

    const aWidth = width - margin.left - margin.right
    const aHeight = height - margin.top - margin.bottom

    const g = svg.append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

    const parseTime = d3.timeParse('%Y-%m-%d')

    const xScale = d3.scaleTime().range([0, aWidth])
    const yScale = d3.scaleLinear().range([aHeight, 0])

    const area = d3.area()
      .x(d => xScale(d[xField]))
      .y1(d => yScale(d[yField]))
      .curve(CURVE_MAP[interpolation])

    const parsedData = data.map(i => ({
       [xField]: parseTime(i[xField]),
       [yField]: +i[yField]
    }))

    const maxValue = d3.max(parsedData, d => d[yField])

    xScale.domain( d3.extent(parsedData, d => d[xField]) )
    yScale.domain( [0, maxValue ])

    area.y0(yScale(0))

    const xAxis = d3.axisBottom(xScale)
    const yAxis = d3.axisLeft(yScale)

    g.append('path')
      .datum(parsedData)
      .attr('fill', 'steelblue')
      .attr('d', area)

    g.append('g')
      .attr('transform', 'translate(0,' + aHeight + ')')
      .call(xAxis)

    g.append('g')
      .call(yAxis)
    .append('text')
      .attr('fill', 'rgb(0,0,0)')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text('Traffic')
  }

  render () {

    const {
      children,
      height,
      width
    } = this.props

    return (
      <svg ref={ node => this.rootEl = node }
        viewBox={ `0 0 ${width} ${height}` }
        preserveAspectRatio="xMidYMid meet">
        { children }
      </svg>
    )
  }
}
