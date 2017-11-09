import React, { Component } from 'react'

import { Treemap, ResponsiveContainer } from 'recharts'

import data from 'world_population.json'
import { ChartPanel, DemoHeader } from './common'

export default class TreemapsChartsDemo extends Component {

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

    return (
      <section className="demo">
        <DemoHeader handlers={{
          onToolbarBookmarkClick: this.onToolbarBookmarkClick,
          onToolbarNotesClick: this.onToolbarNotesClick,
          onToolbarChartsClick: this.onToolbarChartsClick
        }}
        section={ section } />

        <div className="charts grid-2">
          <ChartPanel title="Simple Treemap">
            <Treemap
              width={ 960 }
              height={ 600 }
              data={ data }
              dataKey="size"
              isUpdateAnimationActive={ false } />
          </ChartPanel>
          <ChartPanel />
        </div>

      </section>
    )
  }
}
