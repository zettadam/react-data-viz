import React from 'react'

import { ChartPanel, DemoHeader } from './common'
import {
  SankeyChart
} from './charts'

import data from 'fixtures/energy.json'

const SankeyChartsDemo = props =>
  <section className="demo">
    <DemoHeader />

    <div className="charts">

      <ChartPanel title="Sankey Chart">
        <SankeyChart data={ data } />
      </ChartPanel>

      <ChartPanel title="Sankey Chart">
        <SankeyChart data={ data } />
      </ChartPanel>

    </div>
  </section>

export default SankeyChartsDemo
