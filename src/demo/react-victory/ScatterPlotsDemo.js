import React, { Component } from 'react'

import { DemoHeader, ChartPanel } from './common'
import { ScatterChart } from './charts'
import { ORDINAL_DATA } from 'fixtures/fakeData'

export default class ScatterPlotsDemo extends Component {

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
        <section className="charts grid-2">

          <ChartPanel title="Scatter Plot" theme="qualitativeA">
            <ScatterChart
              data={ ORDINAL_DATA[2] }
              domainPadding={{ x: 10, y: 10 }}
              xField="x"
              yFields={ [ 'y1', 'y2', 'y3', 'y4', 'y5' ] }
              withCursorContainer />
          </ChartPanel>

          <ChartPanel />

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
