import React, { Component } from 'react'
import { ORFrame, ResponsiveORFrame } from 'semiotic'


import { ChartPanel, DemoHeader } from './common'
import { BarChart } from './charts'
import { ORDINAL_DATA } from 'fakeData'

const yTickFormat = t => {
  if (t > 999999) return `${t % 1000000}M`
  if (t > 999) return `${t % 1000}K`
  return t
}

export default class BarChartsDemo extends Component {

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

            <ChartPanel theme="schemeAccent" title="Simple Bars">
              <BarChart
                axis={{
                  orient: 'left',
                  format: '0a',
                  label: {
                    name: 'Label',
                    position: { anchor: 'middle' },
                    locationDistance: 40
                  }
                }}
                data={ ORDINAL_DATA[0] }
                dynamicColumnWidth
                margin={{ left: 80, top: 20, bottom: 20, right: 20 }}
                oAccessor={ 'x' }
                rAccessor={ 'y1' } />
            </ChartPanel>

            <ChartPanel theme="schemePaired" title="Simple Bars">
              <BarChart
                axis={{
                  orient: 'left',
                  format: '0a',
                  label: {
                    name: 'Label',
                    position: { anchor: 'middle' },
                    locationDistance: 40
                  }
                }}
                data={ ORDINAL_DATA[0] }
                margin={{ left: 40, top: 20, bottom: 40, right: 20 }}
                projection="horizontal"
                oAccessor={ 'x' }
                rAccessor={ 'y1' } />
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
