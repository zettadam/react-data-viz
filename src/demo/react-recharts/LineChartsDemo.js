import React, { Component } from 'react'

import { ChartPanel, DemoHeader } from './common'
import { LineChart } from './charts'
import { ORDINAL_DATA, TIME_SERIES } from 'fakeData'
import { MONOCHROMATIC_COLORS, COLORS } from 'themes/colors'

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

        <div className="charts grid-2">

          <ChartPanel title="Single Lines">
            <LineChart
              colors={ COLORS['sequential'] }
              data={ ORDINAL_DATA[0] }
              xField="x"
              yFields={ ['y1'] } />
          </ChartPanel>

          <ChartPanel title="Multiple Lines">
            <LineChart
              colors={ COLORS['divergent'] }
              data={ ORDINAL_DATA[2] }
              xField="x"
              yFields={ ['y1', 'y2', 'y3', 'y4', 'y5'] } />
          </ChartPanel>

        </div>

      </section>
    )
  }
}
