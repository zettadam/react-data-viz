import React, { Component } from 'react'

import { ChartPanel, DemoHeader } from './common'

import { HistogramChart } from './charts'

import { ORDINAL_DATA } from 'fixtures/fakeData'

export default class HistogramsChartsDemo extends Component {

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

          <div className="grid-wide">

            <ChartPanel theme="schemeAccent" title="Simple Histograms">
              <HistogramChart
                axis={{
                  orient: 'left',
                  tickFormat: d => d,
                  label: {
                    name: 'Label',
                    position: { anchor: 'middle' },
                    locationDistance: 40
                  }
                }}
                data={ ORDINAL_DATA[0] }
                margin={{ left: 55, top: 0, bottom: 50, right: 0 }}
                oAccessor={ d => d.y1 }
                rAccessor={ 'x' } />
            </ChartPanel>

            <ChartPanel />

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
