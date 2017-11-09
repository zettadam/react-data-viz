import React, { Component } from 'react'
import * as d3 from 'd3'
import { isEqual } from 'lodash'

export default class ParallelCoordinatesInteractive extends Component {

  static defaultProps = {
    height: 500,
    margin: { top: 30, right: 10, bottom: 10, left: 10 },
    width: 960
  }

  constructor (props) {
    super(props)

    this.renderChart = this.renderChart.bind(this)
    this.handleBrush = this.handleBrush.bind(this)
    this.path = this.path.bind(this)
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
      data,
      height,
      margin,
      width
    } = this.props

    const svg = d3.select(this.rootEl)

    const aWidth = width - margin.left - margin.right
    const aHeight = height - margin.top - margin.bottom

    const x = this.x = d3.scaleOrdinal().range([0, aWidth], 1)
    const y = this.y = {}

    const line = this.line = d3.line()
    const axis = d3.axisLeft()

    svg.attr("width", aWidth + margin.left + margin.right)
        .attr("height", aHeight + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

    const dimensions = this.dimensions = d3.keys(data[0]).filter(d => {
      return d != "name" && (y[d] = d3.scaleLinear()
        .domain(d3.extent(data, p => +p[d]))
        .range([aHeight, 0]))
    })

    // Extract the list of dimensions and create a scale for each.
    x.domain(dimensions)

    // Add grey background lines for context.
    const background = svg.append("g")
        .attr("class", "background")
      .selectAll("path")
        .data(data)
      .enter().append("path")
        .attr("d", this.path)

    // Add blue foreground lines for focus.
    const foreground = this.foreground = svg.append("g")
        .attr("class", "foreground")
      .selectAll("path")
        .data(data)
      .enter().append("path")
        .attr("d", this.path)

    // Add a group element for each dimension.
    var g = svg.selectAll(".dimension")
        .data(dimensions)
      .enter().append("g")
        .attr("class", "dimension")
        .attr("transform", d => "translate(" + x(d) + ")");

    // Add an axis and title.
    g.append("g")
        .attr("class", "axis")
        .each(d => d3.select(this.rootEl).call(axis.scale(y[d])))
      .append("text")
        .style("text-anchor", "middle")
        .attr("y", -9)
        .text(d => d);

    // Add and store a brush for each axis.
    g.append("g")
        .attr("class", "brush")
        .each(d => { d3.select(this.rootEl).call(y[d].brush = d3.brushY(y[d]).on("brush", this.handleBrush)) })
      .selectAll("rect")
        .attr("x", -8)
        .attr("width", 16)

    console.log( 'svg', svg)
    console.log( 'g', g)

  }

  // Returns the path for a given data point.
  path (d) {
    return this.line(this.dimensions.map(p => [this.x(p), this.y[p](d[p])] ))
  }

  // Handles a brush event, toggling the display of foreground lines.
  handleBrush () {
    const actives = this.dimensions.filter(p => !this.y[p].brush.empty())
    const extents = actives.map(p => this.y[p].brush.extent())

    this.foreground.style("display", d => actives.every(
      (p, i) => extents[i][0] <= d[p] && d[p] <= extents[i][1] ? null : "none")
    )
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
