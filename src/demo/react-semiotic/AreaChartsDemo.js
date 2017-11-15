import React, { Component } from 'react'
import moment from 'moment'

import { ChartPanel, DemoHeader } from './common'
import { AreaChart } from './charts'

import { TIME_SERIES } from 'fixtures/fakeData'
import DATA from 'fixtures/house-price-index-usa.json'

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
      <section className="demo demo--semiotic">
        <DemoHeader handlers={{
          onToolbarBookmarkClick: this.onToolbarBookmarkClick,
          onToolbarNotesClick: this.onToolbarNotesClick,
          onToolbarChartsClick: this.onToolbarChartsClick
        }}
        section={ section } />

        { 'charts' === section &&
        <section className="charts demo--semiotic">

          <div className="grid-wide">

            <ChartPanel title="US House Price Index, 1987-2015"
            interpolation="natural"
              theme="schemeAccent">

              <AreaChart
                axes={[
                  { orient: 'left', format: '0', ticks: 6 },
                  { orient: 'bottom', tickFormat: t => moment(t).format('MMM-YYYY'), ticks: 6 }
                ]}
                data={ DATA }
                margin={{ top: 0, right: 10, bottom: 40, left: 80 }}
                xAccessor="x"
                xField="Date"
                yAccessor="y"
                yFields={[ 'Boston', 'Miami', 'Portland', 'Washington', 'National' ]} />

            </ChartPanel>

            <ChartPanel title="Simple Area Chart"
              interpolation="natural"
              theme="schemeAccent" >

              <AreaChart
                axes={[
                  { orient: 'left', format: '0', ticks: 6 },
                  { orient: 'bottom', tickFormat: t => moment(t).format('MMM-YYYY'), ticks: 6 }
                ]}
                data={ TIME_SERIES['price'] }
                margin={{ top: 0, right: 10, bottom: 40, left: 80 }}
                timeFormat="%b %Y"
                xAccessor="x"
                xField="month"
                yAccessor="y"
                yFields={[ 'usd' ]} />

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
