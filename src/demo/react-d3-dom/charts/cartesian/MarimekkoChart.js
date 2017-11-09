import React, { Component } from 'react'
import * as d3 from 'd3'
import { isEqual } from 'lodash'

export default class MarimekkoChart extends Component {

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
      height,
      margin,
      xField,
      yField,
      width
    } = this.props

    console.log( 'props', this.props )

    var x = d3.scaleLinear().range([0, width - 3 * margin]);
    var y = d3.scaleLinear().range([0, height - 2 * margin]);
    var z = d3.scaleOrdinal(d3.schemeCategory10);
    var n = d3.format(",d"),
        p = d3.format("%");

    var svg = d3.select(this.rootEl)
        .attr("width", width)
        .attr("height", height)
      .append("g")
        .attr("transform", "translate(" + 2 * margin + "," + margin + ")");

    var offset = 0;

    // Nest values by segment. We assume each segment+market is unique.
    var segments = d3.nest()
        .key(function(d) { return d.segment; })
        .entries(data);

    // Compute the total sum, the per-segment sum, and the per-market offset.
    // You can use reduce rather than reduceRight to reverse the ordering.
    // We also record a reference to the parent segment for each market.
    var sum = segments.reduce(function(v, p) {
      return (p.offset = v) + (p.sum = p.values.reduceRight(function(v, d) {
        d.parent = p;
        return (d.offset = v) + d.value;
      }, 0));
    }, 0);

    // Add x-axis ticks.
    var xtick = svg.selectAll(".x")
        .data(x.ticks(10))
      .enter().append("g")
        .attr("class", "x")
        .attr("transform", function(d) { return "translate(" + x(d) + "," + y(1) + ")"; });

    xtick.append("line")
        .attr("y2", 6)
        .style("stroke", "#000");

    xtick.append("text")
        .attr("y", 8)
        .attr("text-anchor", "middle")
        .attr("dy", ".71em")
        .text(p);

    // Add y-axis ticks.
    var ytick = svg.selectAll(".y")
        .data(y.ticks(10))
      .enter().append("g")
        .attr("class", "y")
        .attr("transform", function(d) { return "translate(0," + y(1 - d) + ")"; });

    ytick.append("line")
        .attr("x1", -6)
        .style("stroke", "#000");

    ytick.append("text")
        .attr("x", -8)
        .attr("text-anchor", "end")
        .attr("dy", ".35em")
        .text(p);

    // Add a group for each segment.
    var segments = svg.selectAll(".segment")
        .data(segments)
      .enter().append("g")
        .attr("class", "segment")
        .attr("xlink:title", function(d) { return d.key; })
        .attr("transform", function(d) { return "translate(" + x(d.offset / sum) + ")"; });

    // Add a rect for each market.
    var markets = segments.selectAll(".market")
        .data(function(d) { return d.values; })
      .enter().append("a")
        .attr("class", "market")
        .attr("xlink:title", function(d) { return d.market + " " + d.parent.key + ": " + n(d.value); })
      .append("rect")
        .attr("y", function(d) { return y(d.offset / d.parent.sum); })
        .attr("height", function(d) { return y(d.value / d.parent.sum); })
        .attr("width", function(d) { return x(d.parent.sum / sum); })
        .style("fill", function(d) { return z(d.market); });
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
