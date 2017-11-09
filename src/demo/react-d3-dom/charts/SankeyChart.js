import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as d3 from 'd3'
import { sankey, sankeyLinkHorizontal } from 'd3-sankey'
import { isEqual } from 'lodash'


export default class SankeyChart extends Component {

  static defaultProps = {
    colors: [],
    height: 500,
    margin: {
      top: 20,
      right: 20,
      bottom: 20,
      left: 60
    },
    width: 800
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
      margin,
      width
    } = this.props

    const svg = d3.select(this.rootEl)
    const aHeight = height - margin.top - margin.bottom
    const aWidth = width - margin.left - margin.right

    const formatNumber = d3.format(',.0f')
    const format = d => `${formatNumber(d)} TWh`
    const color = d3.scaleOrdinal(d3.schemeCategory10)

    const graph = sankey()
      .nodeWidth(15)
      .nodePadding(10)
      .extent([[1, 1], [aWidth - 1, aHeight - 6]])

    let link = svg.append('g')
        .attr('class', 'links')
        .attr('fill', 'none')
        .attr('stroke', '#000')
        .attr('stroke-opacity', 0.2)
      .selectAll('path')

    let node = svg.append('g')
        .attr('class', 'nodes')
        .attr('font-family', 'sans-serif')
        .attr('font-size', 10)
      .selectAll('g')

    graph(data)

    link = link
        .data(data.links)
        .enter().append('path')
        .attr('d', sankeyLinkHorizontal())
        .attr('stroke-width', d => Math.max(1, d.width))

    link.append('title')
      .text(d => `${d.source.name} → ${d.target.name}\n${format(d.value)}`)

    node = node
      .data(data.nodes)
      .enter().append('g')

    node.append('rect')
        .attr('x', d => d.x0)
        .attr('y', d => d.y0)
        .attr('height', d => d.y1 - d.y0)
        .attr('width', d => d.x1 - d.x0)
        .attr('fill', d => color(d.name.replace(/ .*/, '')))
        .attr('stroke', '#000')

    node.append('text')
        .attr('x', d => d.x0 - 6)
        .attr('y', d => (d.y1 + d.y0) / 2)
        .attr('dy', '0.35em')
        .attr('text-anchor', 'end')
        .text(d => d.name)
      .filter(d => d.x0 < aWidth / 2)
        .attr('x', d => d.x1 + 6)
        .attr('text-anchor', 'start')

    node.append('title')
        .text(d => `${d.name}\n${format(d.value)}`)

  }

  render () {

    const {
      children,
      height,
      margin,
      width
    } = this.props

    return (
      <svg ref={ node => this.rootEl = node }
        viewBox={ `0 0 ${width} ${height}` }
        preserveAspectRatio="xMidYMin meet">
        { children }
      </svg>
    )
  }
}
