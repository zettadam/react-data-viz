import React from 'react'

import Introduction from './Introduction'
import DataVisualization from './DataVisualization'
import D3DataVisualizationWeb from './D3DataVisualizationWeb'
import UsingD3ReactApps from './UsingD3ReactApps'
import ReactRecharts from './ReactRecharts'
import ReactVictory from './ReactVictory'
import ReactVX from './ReactVX'
import ReactSemiotic from './ReactSemiotic'
import ReactChartJS from './ReactChartJS'
import Recommendations from './Recommendations'
import References from './References'

export default ({
  match
}) => {

  const { params: { section }} = match
  let output = null

  switch (section) {

    case 'introduction':
      output = <Introduction />
      break

    case 'data-visualization':
      output = <DataVisualization />
      break

    case 'd3-data-visualization-web':
      output = <D3DataVisualizationWeb />
      break

    case 'using-d3-in-react-apps':
      output = <UsingD3ReactApps />
      break

    case 'react-recharts':
      output = <ReactRecharts />
      break

    case 'react-victory':
      output = <ReactVictory />
      break

    case 'react-vx':
      output = <ReactVX />
      break

    case 'react-semiotic':
      output = <ReactSemiotic />
      break

    case 'react-chartJS':
      output = <ReactRecharts />
      break

    case 'recommendations':
      output = <Recommendations />
      break

    case 'references':
      output = <References />
      break

    default:
      output = <Introduction />
  }

  return (
    <section className="content-article">
      { output }
    </section>
  )
}

