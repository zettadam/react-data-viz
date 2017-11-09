import React, { Component } from 'react'
import moment from 'moment'

import { ChartPanel, DemoHeader } from './common'
import { AreaChart } from './charts'

import { ORDINAL_DATA, TIME_SERIES } from 'fakeData'
import DATA from 'house-price-index-usa.json'

import { COLORS } from 'themes/colors'

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
        <DemoHeader handlers={{
          onToolbarBookmarkClick: this.onToolbarBookmarkClick,
          onToolbarNotesClick: this.onToolbarNotesClick,
          onToolbarChartsClick: this.onToolbarChartsClick
        }}
        section={ section } />

        { 'charts' === section &&
        <section className="charts">
          <div className="grid-2">

            <ChartPanel theme="schemeAccent" title="Simple Area Chart">
              <AreaChart
                data={ DATA }
                xAxis={{
                  tickFormat: t => moment(t).format('YYYY'),
                  tickTotal: 6
                }}
                xField="Date"
                xPadding={ 20 }
                yAxis={{
                  tickTotal: 6
                }}
                yFields={ ['National'] } />
            </ChartPanel>

            <ChartPanel interpolation="linear" theme="schemePaired" title="Simple Area Chart">
              <AreaChart
                data={ DATA }
                xAxis={{
                  tickFormat: t => moment(t).format('YYYY'),
                  tickTotal: 6
                }}
                xField="Date"
                xPadding={ 20 }
                yAxis={{
                  tickTotal: 6
                }}
                yFields={ ['Boston', 'Chicago', 'Dallas', 'Detroit', 'Miami', 'Portland', 'Washington', 'National'] } />
            </ChartPanel>

          </div>

          <div className="grid-wide">

            <ChartPanel title="US House Price Index, 1987-2015"
              interpolation="monotoneX"
              theme="schemePaired">
              <AreaChart
                data={ DATA }
                xAxis={{
                  tickFormat: t => moment(t).format('MMM YYYY'),
                  tickTotal: 12
                }}
                xField="Date"
                yAxis={{
                  tickTotal: 6
                }}
                yFields={ ['Boston', 'Miami', 'Dallas', 'National'] } />
            </ChartPanel>

            <ChartPanel title="US House Price Index, 1987-2015"
              interpolation="linear"
              theme="schemePaired" >
              <AreaChart
                data={ DATA }
                stackBy="y"
                xAxis={{
                  tickFormat: t => moment(t).format('MMM YYYY'),
                  tickTotal: 12
                }}
                xField="Date"
                yAxis={{
                  tickTotal: 6
                }}
                yFields={ ['Boston', 'Miami', 'Dallas', 'National'] } />
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
