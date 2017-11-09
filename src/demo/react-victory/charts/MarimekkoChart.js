import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryLegend,
  VictoryStack,
  VictoryTooltip
} from 'victory'

import VictoryTheme from './themes'

const adaptData = ({
  data,
  xField,
  yField
}) => {
  // segment data by xField

  // segment data by yField
}


export default class BarChart extends Component {

  static propTypes = {
    data: PropTypes.array,
    stacked: PropTypes.bool,
    theme: PropTypes.string,
    xField: PropTypes.string,
    yField: PropTypes.array
  }

  static defaultProps = {
    data: [],
    stacked: false,
    theme: 'qualitativeA',
    xField: '',
    yField: ''
  }

  constructor (props) {
    super(props)

    this.renderBars = this.renderBars.bind(this)
  }

  renderBars (data) {
    const { yFields } = this.props

    return yFields.map((f, i) =>
      <VictoryBar key={ `bar${i}` } data={ data[i] }
        labelComponent={ <VictoryTooltip /> } /> )
  }

  render () {
    const {
      data,
      domainPadding,
      theme,
      xField,
      yField
    } = this.props

    const adaptedData = adaptData({ data, xField, yField })

    const chartProps = {
      theme: VictoryTheme.spark[theme]
    }

    if (domainPadding) chartProps.domainPadding = domainPadding

    const props = {
      categories: { x: data.map(d => d[xField]) },
    }

    return (
      <VictoryChart { ...chartProps }>
        <VictoryStack { ...props }>
          { this.renderBars(adaptedData) }
        </VictoryStack> }
      </VictoryChart>
    )
  }
}
