import React, { Component } from 'react'

import { ChartPanel, DemoHeader } from './common'
import { LineChart } from './charts'

import { ORDINAL_DATA, TIME_SERIES } from 'fakeData'
import DATA from 'house-price-index-usa.json'


export default class LineChartsDemo extends Component {

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

            <ChartPanel interpolation="monotoneX" theme="schemeAccent" title="Simple Line Chart">
              <LineChart
                data={ DATA }
                xField="Date"
                xPadding={ 20 }
                xTickFormat="MMM YYYY"
                xType="time"
                yFields={ ['National'] } />
            </ChartPanel>

            <ChartPanel interpolation="linear" theme="schemeAccent" title="Simple Line Chart">
              <LineChart
                data={ DATA }
                withLinePoints
                xField="Date"
                xPadding={ 20 }
                xTickFormat="MMM YYYY"
                xType="time"
                yFields={ ['Boston', 'Chicago', 'Dallas', 'Detroit', 'Miami', 'Portland', 'Washington', 'National'] } />
            </ChartPanel>

          </div>

          <div className="grid-wide">

            <ChartPanel interpolation="monotoneX" theme="schemeAccent" title="Simple Line Chart">
              <LineChart
                data={ DATA }
                xField="Date"
                xType="time"
                yFields={ ['Boston', 'Miami', 'National'] } />
            </ChartPanel>

            <ChartPanel interpolation="linear" theme="schemeAccent" title="Simple Line Chart">
              <LineChart
                data={ DATA }
                xField="Date"
                xType="time"
                yFields={ ['Boston', 'Miami', 'National'] } />
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
