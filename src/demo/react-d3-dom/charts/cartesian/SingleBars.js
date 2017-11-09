import React, { Component } from 'react'
import * as d3 from 'd3'
import { isEqual } from 'lodash'

export default class SingleBars extends Component {

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
      yField,
    } = this.props

    const svg = d3.select(this.rootEl)
    const height = svg.attr('height')
    const width = svg.attr('width')

    const aHeight = +height - margin.top - margin.bottom
    const aWidth = +width - margin.left - margin.right

    const xScale = d3.scaleBand().range([0, aWidth]).padding(0.1) // value -> display
    const yScale = d3.scaleLinear().range([aHeight, 0]) // value -> display

    yScale.domain([0, d3.max(data, d => d[yField])])
    xScale.domain(data.map(d => d[xField]))

    const g = svg.append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

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

    const bars = g.selectAll('.bar').data(data).enter()

    bars.append('rect')
      .attr('x', d => xScale(d[xField]) )
      .attr('y', d => yScale(d[yField]) )
      .attr('width', xScale.bandwidth())
      .attr('height', d => aHeight - yScale(d[yField]) )
      .attr('fill', colors[2])

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
        width={ width }
        viewBox={ `0 0 ${width} ${height}` }>
        { children }
      </svg>
    )
  }
}
