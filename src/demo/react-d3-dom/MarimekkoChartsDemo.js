import React from 'react'

import { ChartPanel, DemoHeader } from './common'
import data from 'market_marimekko.json'
import { MarimekkoChart } from './charts/cartesian'

const MerimekkoChartsDemo = props =>
  <section className="demo">
    <DemoHeader />

    <div className="charts grid-2">
      <ChartPanel>
        <MarimekkoChart
          data={ data }
          xField="airport"
          yField="airline" />
      </ChartPanel>
      <ChartPanel />
      <ChartPanel />
      <ChartPanel />
    </div>

  </section>

export default MerimekkoChartsDemo
