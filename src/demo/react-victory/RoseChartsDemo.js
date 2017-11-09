import React, { Component } from 'react'

import { DemoHeader, ChartPanel } from './common'
import { ORDINAL_DATA } from 'fakeData'
import { RoseChart } from './charts'

const DATA = [
  { x: 'AA', y1: 213, y2: 130, y3: 70 },
  { x: 'AA', y1: 113, y2: 141, y3: 130 },
  { x: 'AA', y1: 117, y2: 80, y3: 134 },
  { x: 'AA', y1: 69, y2: 240, y3: 210 },
  { x: 'AA', y1: 32, y2: 190, y3: 190 },
  { x: 'AA', y1: 100, y2: 170, y3: 70 }
]

export default class RoseChartsDemo extends Component {

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
        <div className="charts grid-2">

          <ChartPanel title="Simple Rose" theme="qualitativeA">
            <NightingaleRoseChart
              data={ ORDINAL_DATA[1] }
              xField="x"
              yFields={ ['y1', 'y2'] } />
          </ChartPanel>
          <ChartPanel title="Simple Rose" theme="qualitativeB">
            <NightingaleRoseChart
              data={ ORDINAL_DATA[2] }
              xField="x"
              yFields={ ['y1', 'y2', 'y3', 'y4', 'y5'] } />
          </ChartPanel>

          </div> }

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
