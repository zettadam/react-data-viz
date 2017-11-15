import React, { Component } from 'react'
import { merge } from 'lodash'

import { DemoHeader, ChartPanel } from './common'
import { CandlestickChart } from './charts'

import { getCandlestickData } from 'fixtures/fakeData'

const DATA = getCandlestickData(50)

export default class CandlestickChartsDemo extends Component {

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
          <ChartPanel title="Simple Candlestick" theme="qualitativeA">
            <CandlestickChart data={ DATA } />
          </ChartPanel>
          <ChartPanel title="Simple Candlestick (custom click events)" theme="qualitativeA">
            <CandlestickChart data={ DATA }
              events={[
                { target: "labels",
                  eventHandlers: {
                    onClick: () => ([ {
                      mutation: props => ({ style: merge({}, props.style.labels, { fill: "orange" })})
                    }])
                  }
                },
                { target: "data",
                  eventHandlers: {
                    onClick: () => ([ {
                      mutation: props => ({ style: merge({}, props.style, { fill: "blue" }) })
                    } ])
                  }
                }]} />
          </ChartPanel>

          <ChartPanel title="Simple Candlestick (custom candle colors)" theme="qualitativeA">
            <CandlestickChart data={ DATA }
              candleColors={{ positive: 'rgb(0,0,0)', negative: 'rgb(255,0,0)' }} />
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
