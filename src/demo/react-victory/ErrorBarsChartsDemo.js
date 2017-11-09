import React, { Component } from 'react'

import { DemoHeader, ChartPanel } from './common'
import { ErrorBarChart } from './charts'

const DATA = [
  { x: 15, y: 35000, error: 0.2 },
  { x: 20, y: 42000, error: 0.05 },
  { x: 25, y: 30000, error: 0.1 },
  { x: 30, y: 35000, error: 0.2 },
  { x: 35, y: 22000, error: 0.15 }
]

export default class ErrorBarsChartsDemo extends Component {

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
          <ChartPanel title="Simple Error Bars" theme="divergent">
            <ErrorBarChart
              borderWidth={ 5 }
              data={ DATA } />
          </ChartPanel>

          <ChartPanel />
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
