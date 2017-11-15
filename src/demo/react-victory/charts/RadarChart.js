import React, { Component } from 'react'

import {
  VictoryArea,
  VictoryChart,
  VictoryGroup,
  VictoryLabel,
  //VictoryLegend,
  VictoryPolarAxis
} from 'victory'

import VictoryTheme from './themes'

export default class RadarChart extends Component {

  static defaultProps = {
    theme: 'sequential'
  }

  constructor(props) {
    super(props)
    this.state = {
      data: this.processData(props.data),
      maxima: this.getMaxima(props.data)
    }
  }

  getMaxima(data) {
    const groupedData = Object.keys(data[0]).reduce((memo, key) => {
      memo[key] = data.map((d) => d[key])
      return memo
    }, {})
    return Object.keys(groupedData).reduce((memo, key) => {
      memo[key] = Math.max(...groupedData[key])
      return memo
    }, {})
  }

  processData(data) {
    const maxByGroup = this.getMaxima(data)
    const makeDataArray = d =>
      Object.keys(d).map((key) => {
        return { x: key, y: d[key] / maxByGroup[key] }
      })

    return data.map( d => makeDataArray(d))
  }

  render () {
    const {
      theme
    } = this.props

    const {
      data,
      maxima
    } = this.state

    const chartProps = {
      polar: true,
      theme: VictoryTheme.spark[theme],
      domain: { y: [ 0, 1 ] }
    }

    return (
      <VictoryChart { ...chartProps }>

        <VictoryGroup
          style={{ data: { fillOpacity: 0.2, strokeWidth: 2 } }}>
          { data.map((d, i) =>
            <VictoryArea key={ `area-${i}` } data={ d } />
          )}
        </VictoryGroup>

        { Object.keys(maxima).map((key, i) =>
          <VictoryPolarAxis key={ `axis-${i}` } dependentAxis
            style={{
              axisLabel: { padding: 10 },
              axis: { stroke: 'none' },
              grid: { stroke: 'grey', strokeWidth: 0.25, opacity: 0.5 }
            }}
            tickLabelComponent={
              <VictoryLabel labelPlacement="vertical"/>
            }
            labelPlacement="perpendicular"
            axisValue={i + 1} label={key}
            tickFormat={(t) => Math.ceil(t * maxima[key])}
            tickValues={[0.25, 0.5, 0.75]} />
        )}

        <VictoryPolarAxis
          labelPlacement="parallel"
          tickFormat={ () => '' }
          style={{
            axis: { stroke: 'none' },
            grid: { stroke: 'grey', opacity: 0.5 }
          }}
        />

      </VictoryChart>
    )
  }
}
