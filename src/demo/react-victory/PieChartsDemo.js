import React, { Component } from 'react'

import { DemoHeader, ChartPanel } from './common'
import { PieChart } from './charts'

export default class PieChartsDemo extends Component {

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

          <ChartPanel title="Simple Pie" theme="divergent">
            <PieChart
              data={ [
                { x: 'AAA', y: 5 },
                { x: 'BBB', y: 4 },
                { x: 'CCC', y: 2 },
                { x: 'DDD', y: 3 },
                { x: 'EEE', y: 1 }
              ] } />
          </ChartPanel>

          <ChartPanel title="Simple Doughnut" theme="divergent">
            <PieChart
              data={ [
                { x: 'AAA', y: 5 },
                { x: 'BBB', y: 4 },
                { x: 'CCC', y: 2 },
                { x: 'DDD', y: 3 },
                { x: 'EEE', y: 1 }
              ] }
              innerRadius={ 90 }
              labelRadius={ 108 }
              style={{ labels: { fill: 'rgb(255,255,255)', fontSize: 14, fontWeight: 700 } }} />
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
