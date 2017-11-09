import React, { Component } from 'react'
import * as d3 from 'd3'
import d3tip from 'd3-tip'
import { isEqual } from 'lodash'

import {
  MONOCHROMATIC_COLORS,
  CUSTOM_COLORS
} from '../colors'

const COLOR_SCHEME = MONOCHROMATIC_COLORS['theme3']

export default class StackedBars extends Component {

  static defaultProps = {
    colors: [],
    height: 300,
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
      this.renderChart()
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
      colors,
      data,
      margin,
      xField,
      yFields
    } = this.props

    const svg = d3.select(this.rootEl)
    const height = svg.attr('height')
    const width = svg.attr('width')

    const aHeight = +height - margin.top - margin.bottom
    const aWidth = +width - margin.left - margin.right

    const xScale = d3.scaleBand().range([0, aWidth]).padding(0.1) // value -> display
    const yScale = d3.scaleLinear().range([aHeight, 0]) // value -> display
    const zScale = d3.scaleOrdinal().range(colors)

    yScale.domain([0, d3.max(data, d => {
      let total = 0
      Object.keys(d).map(k => k !== xField ? d[k] : 0).forEach(v => total += v)
      return total
    })])
    xScale.domain(data.map(d => d[xField]))
    zScale.domain(yFields)

    const tip = d3tip()
      .attr('class', 'd3-tip')
      .offset([-10, 0])
      .html(d => {
        const h = `<h6>${d.data[xField]}</h6>`
        const p = []
        yFields.forEach(f => {
          p.push(`<p>${f}: <b>${ d3.format(',d')(d.data[f]) }</b></p>`)
        })
        return `${h}${p.join('')}`
      })

    const g = svg.append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

    g.call(tip)

    g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + aHeight + ')')
      .call(d3.axisBottom(xScale))

    g.append('g')
        .attr('class', 'axis axis--y')
        .call(d3.axisLeft(yScale).ticks(6, d3.format(",.0f")))
      .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '0.71em')
        .attr('text-anchor', 'end')
        .text('Traffic')

    const bars = g.selectAll('.bar')
      .data(d3.stack().keys(yFields)(data))
      .enter()
      .append('g')
        .attr('class', 'stack')
        .attr('fill', d => zScale(d.key))
      .selectAll('rect')
      .data(d => d)
      .enter().append('rect')
        .attr('x', d => xScale(d.data[xField]))
        .attr('y', d => yScale(d[1]))
        .attr('height', d => yScale(d[0]) - yScale(d[1]))
        .attr('width', xScale.bandwidth())
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide)
  }

  render () {

    const {
      children,
      height,
      width
    } = this.props

    return (
      <svg ref={ node => this.rootEl = node }
        height={ height }
        width={ width }>
        { children }
      </svg>
    )
  }
}
