import React from 'react'

import DemoHeader from './DemoHeader'
import ChartPanel from 'common/ChartPanel'

import { AreaChart } from './charts'
import { ORDINAL_DATA, TIME_SERIES } from 'fakeData'
import { MONOCHROMATIC_COLORS, COLORS } from 'themes/colors'

const AreaChartsDemo = props =>
  <section className="demo">
    <DemoHeader />

    <section className="charts grid-2">

      <ChartPanel title="Single Area">
        <AreaChart
          colors={ COLORS['sequential'] }
          data={ ORDINAL_DATA[0] }
          xField="x"
          yFields={ ['y1'] } />
      </ChartPanel>

      <ChartPanel title="Grouped Areas">
        <AreaChart
          colors={ COLORS['qualitative2'] }
          data={ ORDINAL_DATA[2] }
          xField="x"
          yFields={ ['y1', 'y2', 'y3', 'y4', 'y5'] }
          stacked
          stackOffset="expand" />
      </ChartPanel>

      <ChartPanel title="Stacked Areas">
        <AreaChart
          colors={ COLORS['qualitative2'] }
          data={ ORDINAL_DATA[2] }
          xField="x"
          yFields={ ['y1', 'y2', 'y3', 'y4', 'y5'] }
          stacked
          stackOffset="expand" />
      </ChartPanel>

    </section>

  </section>

export default AreaChartsDemo
