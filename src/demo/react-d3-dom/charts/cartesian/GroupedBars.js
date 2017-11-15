import React, { Component } from 'react'
import * as d3 from 'd3'
import d3tip from 'd3-tip'
import { isEqual } from 'lodash'


export default class GroupedBars extends Component {

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

    const x0Scale = d3.scaleBand().rangeRound([0, aWidth]).paddingInner(0.1)
    const x1Scale = d3.scaleBand().padding(0.1);
    const yScale = d3.scaleLinear().rangeRound([aHeight, 0]);
    const zScale = d3.scaleOrdinal().range(colors.slice(0, yFields.length))

    x0Scale.domain(data.map(d => d[xField]))
    x1Scale.domain(yFields).rangeRound([0, x0Scale.bandwidth()])
    yScale.domain([0, d3.max(data, d => d3.max(yFields, field => d[field])) ])

    const tip = d3tip()
      .attr('class', 'd3-tip')
      .offset([-10, 0])
      .html(d => `<h6>${ d.key }</h6><p style="color: red">${ d3.format(',d')(d.value) }</p>` )

    const g = svg.append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

    g.call(tip)

    g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + aHeight + ')')
      .call(d3.axisBottom(x0Scale))

    g.append('g')
        .attr('class', 'axis axis--y')
        .call(d3.axisLeft(yScale).ticks(6, d3.format(',.0f')))
      .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '0.71em')
        .attr('text-anchor', 'end')
        .text('Traffic')

    const bars = g.selectAll('.grouped-bars')
      .data(data)
      .enter().append('g')
        .attr('class', 'bar-group')
        .attr('transform', d => 'translate(' + x0Scale(d[xField]) + ',0)')
      .selectAll('rect')
        .data(d => yFields.map(field => ({ key: field, value: d[field] })))
        .enter().append('rect')
          .attr('x', d => x1Scale(d.key))
          .attr('y', d => yScale(d.value))
          .attr('width', x1Scale.bandwidth())
          .attr('height', d => aHeight - yScale(d.value))
          .attr('fill', d => zScale(d.key))
          .on('mouseover', tip.show)
          .on('mouseout', tip.hide)

    console.log( 'bars', bars)
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
