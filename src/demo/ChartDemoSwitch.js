import React from 'react'

import ReactD3DomDemo from './react-d3-dom/demo'
import ReactDomD3Demo from './react-dom-d3/demo'
import RechartsDemo from './react-recharts/demo'
import VictoryDemo from './react-victory/demo'
import VxDemo from './react-vx/demo'
import SemioticDemo from './react-semiotic/demo'
import ReactVisDemo from './react-vis/demo'
import ChartJSDemo from './react-chartJS/demo'

const ChartDemoSwitch = ({
  match
}) => {

  const { params: { approach, type }} = match

  switch (approach) {
    case 'react-d3-dom':
      return <ReactD3DomDemo type={ type } />
    case 'react-dom-d3':
      return <ReactDomD3Demo type={ type } />
    case 'react-recharts':
      return <RechartsDemo type={ type } />
    case 'react-victory':
      return <VictoryDemo type={ type } />
    case 'react-vx':
      return <VxDemo type={ type } />
    case 'react-semiotic':
      return <SemioticDemo type={ type } />
    case 'react-vis':
      return <ReactVisDemo type={ type } />
    case 'react-chartJS':
      return <ChartJSDemo type={ type } />
    default:
      return <RechartsDemo type={ type } />
  }
}

export default ChartDemoSwitch
