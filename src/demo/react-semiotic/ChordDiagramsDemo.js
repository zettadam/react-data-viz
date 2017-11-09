import React, { Component } from 'react'
import { NetworkFrame } from 'semiotic'

import { ChartPanel, DemoHeader } from './common'
import { ChordDiagram } from './charts'

const DATA = [
  { source: "a", target: "a", value: 11975 },
  { source: "a", target: "b", value: 5871 },
  { source: "a", target: "c", value: 8916 },
  { source: "a", target: "d", value: 2868 },
  { source: "b", target: "a", value: 1951 },
  { source: "b", target: "b", value: 10048 },
  { source: "b", target: "c", value: 2060 },
  { source: "b", target: "d", value: 6171 },
  { source: "c", target: "a", value: 8010 },
  { source: "c", target: "b", value: 16145 },
  { source: "c", target: "c", value: 8090 },
  { source: "c", target: "d", value: 8045 },
  { source: "d", target: "a", value: 1013 },
  { source: "d", target: "b", value: 990 },
  { source: "d", target: "c", value: 940 },
  { source: "d", target: "d", value: 6907 },
]

const COLORS = [
  '#00a2ce',
  '#4d430c',
  '#b3331d',
  '#b6a756'
]

export default class ChordDiagramsDemo extends Component {

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
        <section className="charts grid-2">
          <ChartPanel>
            <ChordDiagram data={ DATA } colors={ COLORS } />
          </ChartPanel>
          <ChartPanel />
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
