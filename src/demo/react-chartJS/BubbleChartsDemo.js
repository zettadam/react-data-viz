import React from 'react'

import { DemoHeader } from './common'
import ChartPanel from 'common/ChartPanel'

const BubbleChartsDemo = props =>
  <section className="demo">
    <DemoHeader />

    <div className="charts grid-2">
      <ChartPanel />
      <ChartPanel />
    </div>

  </section>

export default BubbleChartsDemo
