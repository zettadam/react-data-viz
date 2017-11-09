import React from 'react'

import { ChartPanel, DemoHeader } from './common'
import {
  SankeyChart
} from './charts'

import data from 'energy.json'
import { MONOCHROMATIC_COLORS, COLORS } from 'themes/colors'

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
