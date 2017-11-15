import React from 'react'

import { DemoHeader } from './common'
import ChartPanel from 'common/ChartPanel'
import { ORDINAL_DATA, TIME_SERIES } from 'fakeData'
import { MONOCHROMATIC_COLORS, COLORS } from 'themes/colors'

const RadialChartsDemo = props =>
  <section className="demo">
    <DemoHeader />

    <div className="charts grid-2">
      <ChartPanel />
      <ChartPanel />
    </div>

  </section>

export default RadialChartsDemo
