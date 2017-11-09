import React, { Component } from 'react'

import { ChartPanel, DemoHeader } from './common'

export default class PieChartsDemo extends Component {

  constructor (props) {
    super(props)

    this.state = {
      visibleSection: 'charts'
    }

    this.onToolbarNotesClick = this.onToolbarNotesClick.bind(this)
    this.onToolbarChartsClick = this.onToolbarChartsClick.bind(this)
  }

  onToolbarNotesClick (event) {
    this.setState({ visibleSection: 'notes' })
  }

  onToolbarChartsClick (event) {
    this.setState({ visibleSection: 'charts' })
  }

  render () {
    const { visibleSection } = this.state

    return (
      <section className="demo">
        <DemoHeader handlers={{
          onToolbarNotesClick: this.onToolbarNotesClick,
          onToolbarChartsClick: this.onToolbarChartsClick
        }} />

        { 'charts' === visibleSection &&
        <section className="charts grid-2">
          <ChartPanel />
          <ChartPanel />
        </section> }

        { 'notes' === visibleSection &&
        <section className="notes">
          <p>Notes will be shown here</p>
        </section> }

      </section>
    )
  }
}
