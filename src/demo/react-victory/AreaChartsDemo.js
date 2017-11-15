import React, { Component } from 'react'

import { DemoHeader, ChartPanel } from './common'
import {
  AreaChart
} from './charts'

import { ORDINAL_DATA } from 'fixtures/fakeData'

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

          <div className="grid-2 a4_3">

            <ChartPanel title="Single Area" theme="divergent">
              <AreaChart
                data={ ORDINAL_DATA[0] }
                domainPadding={{ x: 0, y: 20 }}
                xField="x"
                yFields={ ['y1'] } />
            </ChartPanel>

            <ChartPanel title="Multiple Areas (Stacked)" theme="qualitativeB">
              <AreaChart
                data={ ORDINAL_DATA[2] }
                domainPadding={{ x: 0, y: 20 }}
                xField="x"
                yFields={ ['y1', 'y2', 'y3', 'y4', 'y5'] }
                stacked />
            </ChartPanel>

          </div>

          <div className="grid-wide">

            <ChartPanel title="Multiple Areas (Grouped)" theme="qualitativeA">
              <AreaChart
                chartContainers={ ['voronoi'] }
                data={ ORDINAL_DATA[2] }
                domainPadding={{ x: 0, y: 20 }}
                legendProps={{
                  borderPadding: { top: 0, left: 5, bottom: 0, right: 5 },
                  orientation: 'horizontal',
                  x: 360, y: 10
                }}
                scale={{ x: 'linear', y: 'linear' }}
                xField="x"
                yFields={ ['y1', 'y2', 'y3', 'y4', 'y5'] }
                />
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
