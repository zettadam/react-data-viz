import React from 'react'

import DemoHeader from './DemoHeader'
import ChartPanel from 'common/ChartPanel'
import { BarChart } from './charts'
import { ORDINAL_DATA, TIME_SERIES } from 'fakeData'
import { MONOCHROMATIC_COLORS, COLORS } from 'themes/colors'

const BarChartsDemo = props =>
  <section className="demo">
    <DemoHeader />

    <section className="charts grid-2">

      <ChartPanel title="Single Bars">
        <BarChart
          colors={ COLORS['qualitative1'] }
          data={ ORDINAL_DATA[0] }
          xField="x"
          yFields={ ['y1'] } />
      </ChartPanel>

      <ChartPanel title="Stacked Bars">
        <BarChart
          colors={ COLORS['qualitative2'] }
          data={ ORDINAL_DATA[2] }
          stacked
          xField="x"
          yFields={ [ 'y1', 'y2', 'y3', 'y4', 'y5' ] } />
      </ChartPanel>

      <ChartPanel title="Grouped Bars">
        <BarChart
          colors={ COLORS['qualitative1'] }
          data={ ORDINAL_DATA[2] }
          grouped
          xField="x"
          yFields={ [ 'y1', 'y2', 'y3', 'y4', 'y5' ] } />
      </ChartPanel>

    </section>

  </section>

export default BarChartsDemo
