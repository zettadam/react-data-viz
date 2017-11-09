import React, { Component } from 'react'

import { ChartPanel, DemoHeader } from './common'
import { AreaChart } from './charts'
import { TIME_SERIES } from 'fakeData'
import { MONOCHROMATIC_COLORS, COLORS } from 'themes/colors'

export default class AreaChartsDemo extends Component {

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

          <ChartPanel theme="schemeAccent" title="Single Area">
            <AreaChart
              data={ TIME_SERIES['price'] }
              xField="month" xLabel="Months"
              timeFormat="%b %Y"
              yFields={ ['usd'] } yLabel="Price ($)" />
          </ChartPanel>

          <ChartPanel interpolation="step" theme="schemeSet1" title="Multiple Areas">
            <AreaChart
              data={ TIME_SERIES['traffic'] }
              fillOpacity="0.25"
              reverse
              xField="date" xLabel="Days"
              timeFormat="%Y-%m-%d"
              yFields={ ['AA', 'BB', 'CC', 'DD'] } yLabel="Traffic" />
          </ChartPanel>

          <ChartPanel theme="schemeAccent" title="Stacked Areas">
            <AreaChart
              data={ TIME_SERIES['traffic'] }
              reverse
              stacked
              xField="date" xLabel="Days"
              timeFormat="%Y-%m-%d"
              yFields={ ['AA', 'BB', 'CC', 'DD'] } yLabel="Traffic" />
          </ChartPanel>

          <ChartPanel theme="schemeSpectral" title="Area (& Tooltip)" />

        </section> }

        { 'bookmarks' === section &&
        <section className="bookmarks">
          <h3>Reference</h3>
          <h4>React / VX</h4>
          <ul>
            <li><a href="https://vx-demo.now.sh/static/docs/vx-shape.html">VX Docs on <b>@vx/shape</b> package</a></li>
          </ul>
          <h4>Genereal</h4>
          <ul>
            <li><a href="https://visage.co/data-visualization-101-area-charts/">How to design area charts</a></li>
          </ul>
        </section> }

        { 'notes' === section &&
        <section className="notes">
          <p>Notes will be shown here</p>
        </section> }

      </section>
    )
  }
}
