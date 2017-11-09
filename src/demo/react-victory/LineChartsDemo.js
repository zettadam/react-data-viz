import React, { Component } from 'react'
import {
  VictoryLabel,
  VictoryLine,
  VictoryScatter
} from 'victory'
import moment from 'moment'

import { DemoHeader, ChartPanel } from './common'
import {
  LineChart,
  LineChartMinimap,
  Flyout1,
  CircleFlyout1,
  CircleFlyout2
} from './charts'

import { ORDINAL_DATA, TIME_SERIES } from 'fakeData'
import DATA from 'house-price-index-usa.json'


const timeTickFormatShort = t => t.includes('01-01') ? moment(t).format('YYYY') : moment(t).format('MMM')
const timeTickFormat = t => moment(t).format('MMM YYYY')


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

        { 'charts' === section &&
        <section className="charts">
          <div className="grid-2">

            <ChartPanel title="Single Line"
              theme="qualitativeB"
              interpolation="monotoneX">
              <LineChart chartContainers={ ['voronoi' ]}
                data={ ORDINAL_DATA[0] }
                domainPadding={{ x: 0, y: 20 }}
                flyout={ <Flyout1 /> }
                legendProps={{
                  borderPadding: 5,
                  style: {
                    border: { fill: 'rgb(255,255,255)', stroke: '#36454f' }
                  },
                  x: 472, y: 10
                }}
                xField="x"
                yFields={ ['y1'] } />
            </ChartPanel>

            <ChartPanel title="Multiple Lines"
              theme="qualitativeA"
              interpolation="step">
              <LineChart
                data={ ORDINAL_DATA[2] }
                domainPadding={{ x: 0, y: 20 }}
                flyout={ <CircleFlyout2 /> }
                legendProps={{
                  borderPadding: { top: 5, right: 10, bottom: 5, left: 10 },
                  style: {
                    border: { fill: 'rgb(255,255,255)', fillOpacity: '1' }
                  },
                  orientation: 'horizontal',
                  x: 345, y: 10
                }}
                withLinePoints
                xField="x"
                yFields={ ['y1', 'y2', 'y3', 'y4', 'y5'] }/>
            </ChartPanel>
          </div>

          <div className="grid-wide">
            <ChartPanel title="US House Price Index 1987-2015 (custom styles & zoom)"
              interpolation="natural"
              theme="qualitativeB">

              <LineChart
                chartContainers={ ['zoom']}
                colorScale={[ '#999', '#777', '#555', '#333']}
                data={ DATA }
                domainPadding={{ x: 0, y: 5 }}
                legendProps={{
                  gutter: 0,
                  style: {
                    border: { fill: 'white', stroke: '#36454f', strokeWidth: 1 },
                    borderPadding: 0
                  },
                  x: 60, y: 10
                }}
                xField="Date"
                yFields={ ['Boston', 'Miami', 'National'] }
                xAxis={{
                  fixLabelOverlap: true,
                  scale: 'time',
                  label: 'Time',
                  style: {
                    axisLabel: { fill: 'rgb(186,186,186)', fontSize: 8 },
                    grid: { stroke: 'rgb(235,235,235)', strokeDasharray: 'none' },
                    tickLabels: { fontSize: 8 }
                  },
                  tickFormat: timeTickFormat
                }}
                yAxis={{
                  dependentAxis: true,
                  label: 'Price Index',
                  scale: 'linear',
                  style: {
                    axisLabel: { fill: 'rgb(186,186,186)', fontSize: 8 },
                    grid: {
                      stroke: t => t === 100 ? 'red' : 'rgb(235,235,235)',
                      strokeDasharray: 'none'
                    },
                    tickLabels: {
                      fill: t => t === 100 ? 'red' : '#36454f',
                      fontSize: 8
                    },
                    ticks: {
                      stroke: t => t === 100 ? 'red' : '#36454f'
                    }
                  }
                }} />

            </ChartPanel>

            <ChartPanel title="US House Price Index 1987-2015 (with brush zoom)"
              interpolation="monotoneX"
              theme="qualitativeB">

              <LineChartMinimap
                brushContainerProps={{
                  brushDimension: 'x',
                  brushStyle: { fill: 'teal', fillOpacity: 0.1 }
                }}
                brushDomainPadding={ [0,5] }
                brushXAxis={{
                  fixLabelOverlap: true,
                  style: {
                    axisLabel: { fontSize: 8, textAnchor: 'start' },
                    tickLabels: { fontSize: 8 }
                  },
                  tickFormat: timeTickFormatShort
                }}
                data={ DATA }
                domainPadding={{ x: 0, y: 20 }}
                legendProps={{
                  orientation: 'horizontal',
                  centerTitle: true,
                  gutter: 5,
                  style: {
                    border: { fill: 'rgb(255,255,0)', fillOpacity: '0.25', stroke: 'rgb(127,127,127)', strokeWidth: 1 },
                    borderPadding: 0
                  },
                  x: 60, y: 8
                }}
                xField="Date"
                yFields={ ['Boston', 'Miami', 'National'] }
                xAxis={{
                  fixLabelOverlap: true,
                  label: 'Months',
                  style: {
                    axisLabel: { fontSize: 8, textAnchor: 'start' },
                    tickLabels: { fontSize: 8 }
                  },
                  tickFormat: timeTickFormatShort
                }}
                yAxis={{
                  dependentAxis: true,
                  label: 'Price Index',
                  style: {
                    axisLabel: { fontSize: 8, textAnchor: 'start' },
                    tickLabels: { fontSize: 8 }
                  }
                }}
                zoomContainerProps={{
                  allowZoom: false,
                  zoomDimension: 'x'
                }} />
            </ChartPanel>

          </div>

          <div className="grid-wide">

            <ChartPanel title="Single Line (with annotations)"
              interpolation="monotoneX"
              theme="sequential">

              <LineChart
                data={ DATA }
                domainPadding={{ x: 0, y: 20 }}
                xField="Date"
                yFields={ ['National'] }
                xAxis={{
                  scale: 'time',
                  label: 'Months',
                  style: {
                    axisLabel: { fontSize: 8 },
                    tickLabels: { fontSize: 8 }
                  },
                  tickFormat: timeTickFormatShort,
                  tickCount: 7
                }}
                yAxis={{
                  dependentAxis: true,
                  label: 'Price Index',
                  scale: 'linear',
                  style: {
                    axisLabel: { fontSize: 8 },
                    tickLabels: { fontSize: 8 }
                  }
                }}
                annotations={
                  [
                    <VictoryLine key="line1"
                      y={ () => 100 }
                      labels={ ['', 'Label 1'] }
                      style={{
                        data: { stroke: 'rgb(255,0,0)', strokeWidth: 2 },
                        labels: { fill: 'rgb(255,0,0)', fontSize: 8, textAnchor: 'start', padding: 1 }
                      }} />,
                    <VictoryLine key="line2"
                      x={ () => 150 }
                      labels={ ['Label 2'] }
                      style={{
                        labels: { angle: -90, fill: 'rgb(37,127,0)', fontSize: 8, textAnchor: 'start' },
                        data: { stroke: 'rgb(37,127,0)', strokeWidth: 0.5, strokeDasharray: '10,5' }
                      }} />
                  ]
                }/>

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
