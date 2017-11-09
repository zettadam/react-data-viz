import React from 'react'

import { ChartPanel, DemoHeader } from './common'
import {
  GroupedBars,
  GroupedStackedBars,
  SingleBars,
  StackedBars
 } from './charts/cartesian'

 import { ORDINAL_DATA } from 'fakeData'
 import { MONOCHROMATIC_COLORS, COLORS } from 'themes/colors'

const BarChartsDemo = props =>
  <section className="demo">
    <DemoHeader />

    <div className="charts">

      <ChartPanel title="Single Bars" aspectRatioClass="a21_9">
        <SingleBars
          colors={ COLORS['sequential'] }
          data={ ORDINAL_DATA[0] }
          height="450"
          width="1050"
          xField="x"
          yField="y1" />
      </ChartPanel>

      <ChartPanel title="Stacked Bars" aspectRatioClass="a21_9">
        <StackedBars
          colors={ COLORS['qualitative2'] }
          data={ ORDINAL_DATA[2] }
          height="450"
          width="1050"
          xField="x"
          yFields={ [ 'y1', 'y2', 'y3', 'y4', 'y5' ] } />
      </ChartPanel>

      <ChartPanel title="Grouped Bars" aspectRatioClass="a21_9">
        <GroupedBars
          colors={ COLORS['qualitative1'] }
          data={ ORDINAL_DATA[2] }
          height="450"
          width="1050"
          xField="x"
          yFields={ [ 'y1', 'y2', 'y3', 'y4', 'y5' ] } />
      </ChartPanel>

    </div>

  </section>

export default BarChartsDemo
