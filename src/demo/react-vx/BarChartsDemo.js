import React, { Component } from 'react'

import { ChartPanel, DemoHeader } from './common'
import { BarChart, GroupedBarChart } from './charts'
import { ORDINAL_DATA } from 'fakeData'
import { MONOCHROMATIC_COLORS, COLORS } from 'themes/colors'

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
        <DemoHeader
        handlers={{
          onToolbarBookmarkClick: this.onToolbarBookmarkClick,
          onToolbarNotesClick: this.onToolbarNotesClick,
          onToolbarChartsClick: this.onToolbarChartsClick
        }}
        section={ section } />

        { 'charts' === section &&
        <section className="charts grid-2">

          <ChartPanel title="Single Bars">
            <BarChart
              colors={ COLORS['qualitative1'] }
              data={ ORDINAL_DATA[2] }
              xField="x" xLabel="Airlines"
              yFields={ ['y1'] } yLabel="Traffic" />
          </ChartPanel>

          <ChartPanel title="Stacked Bars">
            <BarChart
              colors={ COLORS['qualitative2'] }
              data={ ORDINAL_DATA[2] }
              xField="x" xLabel="Airlines"
              yFields={ ['y1', 'y2', 'y3', 'y4', 'y5'] } yLabel="Traffic" />
          </ChartPanel>

          <ChartPanel title="Grouped Bars">
            <GroupedBarChart
              colors={ COLORS['qualitative1'] }
              data={ ORDINAL_DATA[2] }
              grouped
              xField="x" xLabel="Airlines"
              yFields={ ['y1', 'y2', 'y3', 'y4', 'y5'] } yLabel="Traffic" />
          </ChartPanel>

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
