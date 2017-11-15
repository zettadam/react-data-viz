import React, { Component } from 'react'
import moment from 'moment'
//import { MinimapXYFrame } from 'semiotic'

import { ChartPanel, DemoHeader } from './common'
import { LineChart, MinimapLineChart } from './charts'

import US_HOUSE_PRICE_INDEX_DATA from 'fixtures/house-price-index-usa.json'


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
      <section className="demo demo--semiotic">
        <DemoHeader handlers={{
          onToolbarBookmarkClick: this.onToolbarBookmarkClick,
          onToolbarNotesClick: this.onToolbarNotesClick,
          onToolbarChartsClick: this.onToolbarChartsClick
        }}
        section={ section } />

        { 'charts' === section &&
        <section className="charts">

          <div className="grid-wide">

          <ChartPanel title="US House Price Index, 1987-2015"
            interpolation="monotoneX"
            theme="schemePaired">

            <MinimapLineChart
              axes={[
                { orient: 'left', format: '0' },
                { orient: 'bottom', tickFormat: t => moment(t).format('MMM YYYY'), ticks: 6 }
              ]}
              data={ US_HOUSE_PRICE_INDEX_DATA }
              margin={{ top: 20, right: 20, bottom: 55, left: 55 }}
              matte
              xField="Date"
              yFields={ [ 'Boston', 'Miami', 'Portland', 'Washington', 'National' ]} />

          </ChartPanel>

          <ChartPanel title="US House Price Index, 1987-2015"
            interpolation="linear"
            theme="schemeBlues">

            <LineChart
              axes={[
                { orient: 'left', format: '0' },
                { orient: 'bottom', tickFormat: t => moment(t).format('MMM YYYY'), ticks: 6 }
              ]}
              data={ US_HOUSE_PRICE_INDEX_DATA }
              margin={{ top: 20, right: 20, bottom: 55, left: 55 }}
              tooltipContent={ d => (
                <div className="tooltip-content">
                  Month: <b>{ moment(d.x).format('MMM YYYY') }</b><br/>
                  Change: <b>${ d.y }</b>
                </div>
              )}
              xField="Date"
              yFields={ [ 'Boston', 'Miami', 'Portland', 'Washington', 'National' ]} />

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
