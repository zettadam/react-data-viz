import React, { Component } from 'react'

import { DemoHeader, ChartPanel } from './common'
import { BarChart } from './charts'

import { ORDINAL_DATA } from 'fixtures/fakeData'
import ANALYSIS1_JFK_ORD from 'fixtures/analysis1-jfk-ord.json'

const yTickFormat = t => {
  if (t > 999999) return `${Math.ceil(t/1000000)}M`
  if (t > 999) return `${Math.ceil(t/1000)}K`
  return t
}

export default class BarChartsDemo extends Component {

  constructor (props) {
    super(props)

    this.state = {
      section: 'charts'
    }

    this.onToolbarBookmarkClick = this.onToolbarBookmarkClick.bind(this)
    this.onToolbarNotesClick = this.onToolbarNotesClick.bind(this)
    this.onToolbarChartsClick = this.onToolbarChartsClick.bind(this)
  }

  onToolbarBookmarkClick (event) {
    this.setState({ section: 'bookmarks' })
  }

  onToolbarNotesClick (event) {
    this.setState({ section: 'notes' })
  }

  onToolbarChartsClick (event) {
    this.setState({ section: 'charts' })
  }

  render () {
    const { section } = this.state

    return (
      <section className="demo">
        <DemoHeader handlers={{
          onToolbarBookmarkClick: this.onToolbarBookmarkClick,
          onToolbarNotesClick: this.onToolbarNotesClick,
          onToolbarChartsClick: this.onToolbarChartsClick
        }}
        section={ section } />

        { 'charts' === section &&
        <section className="charts">

          <div className="grid-2">

            <ChartPanel title="Simple Bars" theme="qualitativeA">
              <BarChart
                data={ ORDINAL_DATA[0] }
                domainPadding={{ x: 20, y: 0 }}
                xField="x"
                yFields={ ['y1'] } />
            </ChartPanel>

            <ChartPanel title="Stacked Bars" theme="qualitativeB">
              <BarChart
                data={ ORDINAL_DATA[2] }
                domainPadding={{ x: 10, y: 30 }}
                legendProps={{
                  gutter: 5,
                  orientation: 'horizontal',
                  borderPadding: { top: 0, right: 5, bottom: 0, left: 5 },
                  x: 360
                }}
                stacked
                withTooltips
                xField="x"
                yFields={ [ 'y1', 'y2', 'y3', 'y4', 'y5' ] } />
            </ChartPanel>

          </div>

          <div className="grid-wide">

            <ChartPanel title="Multiset Bars" theme="qualitativeA">
              <BarChart
                data={ ORDINAL_DATA[2] }
                domainPadding={{ x: 15, y: 0 }}
                grouped
                withTooltips
                xField="x"
                yFields={ [ 'y1', 'y2', 'y3', 'y4', 'y5' ] } />
            </ChartPanel>

            <ChartPanel title="Multiset Bars (Horizontal)" theme="qualitativeB"
              withMin withMax>
              <BarChart
                data={ ANALYSIS1_JFK_ORD.filter(d => d.totalDemand > 100000) }
                domainPadding={{ x: 0, y: 10 }}
                grouped
                legendProps={{
                  x: 355, y: 10
                }}
                withTooltips
                yAxis={{
                  tickFormat: yTickFormat
                }}
                xField="airlineCode"
                yFields={ [ 'totalDemand', 'totalTraffic' ] } />
            </ChartPanel>

          </div>

        </section> }

        { 'bookmarks' === section &&
        <section className="bookmarks">

        </section> }

        { 'notes' === section &&
        <section className="notes">
          <p>Notes will be shown here</p>
        </section> }

      </section>
    )
  }
}
