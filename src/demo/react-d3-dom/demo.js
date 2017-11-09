import React from 'react'

import './styles/d3charts.css'

import AreaChartsDemo from './AreaChartsDemo'
import BarChartsDemo from './BarChartsDemo'
import LineChartsDemo from './LineChartsDemo'
import SankeyChartsDemo from './SankeyChartsDemo'

const availableDemos = [
  'area',
  'bar',
  'line',
  'sankey'
]

const ReactD3DomDemo = ({
  type
}) => {

  if (type && availableDemos.indexOf(type) > -1) {
    return (
      <div className={ `demo-${type}` }>
        { 'area' === type && <AreaChartsDemo /> }
        { 'bar' === type && <BarChartsDemo /> }
        { 'line' === type && <LineChartsDemo /> }
        { 'sankey' === type && <SankeyChartsDemo /> }
      </div>
    )
  } else {
    return (
      <div>
        <p>No demo available yet.</p>
      </div>
    )
  }

}


export default ReactD3DomDemo
