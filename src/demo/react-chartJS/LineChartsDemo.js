import React from 'react'

import { DemoHeader } from './common'
import ChartPanel from 'common/ChartPanel'
import { LineChart } from './charts'
import { ORDINAL_DATA } from 'fixtures/fakeData'
import { COLORS } from 'themes/colors'

const LineChartsDemo = props =>
  <section className="demo">
    <DemoHeader />

    <section className="charts grid-2">

      <ChartPanel title="Single Line">
        <LineChart
          colors={ COLORS['sequential'] }
          data={ ORDINAL_DATA[0] }
          xField="x"
          yFields={ ['y1'] } />
      </ChartPanel>

      <ChartPanel title="Multiple Lines">
        <LineChart
          colors={ COLORS['sequential'] }
          data={ ORDINAL_DATA[2] }
          xField="x"
          yFields={ ['y1', 'y2', 'y3', 'y4', 'y5'] } />
      </ChartPanel>

    </section>

  </section>

export default LineChartsDemo
