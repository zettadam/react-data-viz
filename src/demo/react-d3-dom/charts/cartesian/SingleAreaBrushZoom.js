import React, { Component } from 'react'
import * as d3 from 'd3'
import { isEqual } from 'lodash'

import {
  MONOCHROMATIC_COLORS,
  CUSTOM_COLORS
} from '../colors'
import { CURVE_MAP } from '../../common'

const COLOR_SCHEME = MONOCHROMATIC_COLORS['theme3']


export default class SingleAreaBrushZoom extends Component {

  static defaultProps = {
    height: 600,
    interpolation: 'natural',
    margin1: { top: 20, right: 20, bottom: 110, left: 40 },
    margin2: { top: 380, right: 20, bottom: 30, left: 40 },
    width: 960
  }

  constructor (props) {
    super(props)

    this.renderChart = this.renderChart.bind(this)
    this.parseData = this.parseData.bind(this)
    this.handleBrush = this.handleBrush.bind(this)
    this.handleZoom = this.handleZoom.bind(this)
  }

  //
  // LIFECYCLE METHODS --------------------------------------------------------
  //
  componentDidMount () {
    this.renderChart()
  }

  shouldComponentUpdate (nextProps) {

    if (!isEqual(this.props.data, nextProps.data)) {
      this.renderChart()
      return false
    }

    return true
  }

  componentDidUpdate () {
    this.renderChart()
  }

  //
  // EVENT HANDLERS -----------------------------------------------------------
  //

  handleBrush () {
    if (d3.event.sourceEvent && d3.event.sourceEvent.type === 'zoom') return // ignore brush-by-zoom
    const s = d3.event.selection || this.x2Scale.range()
    this.xScale.domain(s.map(this.x2Scale.invert, this.x2Scale))
    this.focus.select('.area').attr('d', this.area)
    this.focus.select('.axis--x').call(this.xAxis)
    this.svg.select('.zoom').call(
      this.zoom.transform,
      d3.zoomIdentity
        .scale(this.width / (s[1] - s[0]))
        .translate(-s[0], 0)
    )
  }

  handleZoom () {
    if (d3.event.sourceEvent && d3.event.sourceEvent.type === 'brush') return // ignore zoom-by-brush
    const t = d3.event.transform
    this.xScale.domain(t.rescaleX(this.x2Scale).domain())
    this.focus.select('.area')
      .attr('d', this.area)
    this.focus.select('.axis--x')
      .call(this.xAxis)
    this.context.select('.brush').call(
      this.brush.move,
      this.xScale.range().map(t.invertX, t)
    )
  }

  //
  // RENDER METHODS -----------------------------------------------------------
  //

  renderChart () {

    const {
      data,
      height,
      interpolation,
      margin1,
      margin2,
      width,
      xField,
      yField
    } = this.props

    this.svg = d3.select(this.rootEl)
    this.width = width - margin1.left - margin1.right
    this.height = height - margin1.top - margin1.bottom
    this.height2 = height - margin2.top - margin2.bottom

    const g = this.svg.append('g')
      .attr('transform', 'translate(' + margin1.left + ',' + margin2.top + ')')

    this.xScale = d3.scaleTime().range([0, this.width])
    this.x2Scale = d3.scaleTime().range([0, this.width])
    this.yScale = d3.scaleLinear().range([this.height, 0])
    this.y2Scale = d3.scaleLinear().range([this.height2, 0])

    this.xAxis = d3.axisBottom(this.xScale)
    this.xAxis2 = d3.axisBottom(this.x2Scale)
    this.yAxis = d3.axisLeft(this.yScale)

    this.brush = d3.brushX()
      .extent([[0, 0], [this.width, this.height2]])
      .on('brush end', this.handleBrush)

    this.zoom = d3.zoom()
      .scaleExtent([1, Infinity])
      .translateExtent([[0, 0], [this.width, this.height]])
      .extent([[0, 0], [this.width, this.height]])
      .on('zoom', this.handleZoom)

    this.area = d3.area()
      .curve(d3.curveMonotoneX)
      .x(d => this.xScale(d[xField]))
      .y0(this.height)
      .y1(d => this.yScale(d[yField]))

    this.area2 = d3.area()
      .x(d => this.x2Scale(d[xField]))
      .y0(this.height2)
      .y1(d => this.y2Scale(d[yField]))
      .curve(CURVE_MAP[interpolation])

    this.svg.append('defs').append('clipPath')
        .attr('id', 'clip')
      .append('rect')
        .attr('width', this.width)
        .attr('height', this.height)

    this.context = this.svg.append('g')
      .attr('class', 'context')
      .attr('transform', 'translate(' + margin2.left + ',' + margin2.top + ')')

    this.focus = this.svg.append('g')
      .attr('class', 'focus')
      .attr('transform', 'translate(' + margin1.left + ',' + margin1.top + ')')

    const parsedData = data.map(d => this.parseData(d))

    this.xScale.domain(d3.extent(parsedData, d => d[xField]))
    this.yScale.domain([0, d3.max(parsedData, d => d[yField])])
    this.x2Scale.domain(this.xScale.domain())
    this.y2Scale.domain(this.yScale.domain())

    this.focus.append('path')
      .datum(parsedData)
      .attr('class', 'area')
      .attr('d', this.area)

    this.focus.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(this.xAxis)

    this.focus.append('g')
      .attr('class', 'axis axis--y')
      .call(this.yAxis)

    this.context.append('path')
      .datum(parsedData)
      .attr('class', 'area-clipped')
      .attr('d', this.area2)

    this.context.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + this.height2 + ')')
      .call(this.xAxis2)

    this.context.append('g')
      .attr('class', 'brush')
      .call(this.brush)
      .call(this.brush.move, this.xScale.range())

    this.svg.append('rect')
      .attr('class', 'zoom')
      .attr('width', this.width)
      .attr('height', this.height)
      .attr('transform', 'translate(' + margin1.left + ',' + margin2.top + ')')
      .call(this.zoom)
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

  //
  // UTILITY METHODS ----------------------------------------------------------
  //

  parseDate (format) {
    return d3.timeParse(format)
  }

  parseData (i) {
    const {
      dateFormat,
      xField,
      yField
    } = this.props
    const o = {}

    o[xField] = this.parseDate(dateFormat)(i[xField])
    o[yField] = i[yField]

    return o
  }
}
