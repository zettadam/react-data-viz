import React from 'react'

import { ChartPanel, DemoHeader } from './common'
import {
  SingleArea,
  SingleAreaBrushZoom
} from './charts/cartesian'

import { TIME_SERIES } from 'fixtures/fakeData'
//import { MONOCHROMATIC_COLORS, COLORS } from 'themes/colors'

const AreaChartsDemo = props =>
  <section className="demo">
    <DemoHeader />

    <div className="charts">

      <ChartPanel title="Single Area"
        aspectRatio="21x9">
        <SingleArea
          data={ TIME_SERIES['traffic'] }
          xField="date"
          yField="AA"
          height="450"
          width="1050" />
      </ChartPanel>

      <ChartPanel title="Single Area (Brush & Zoom)"
        aspectRatio="21x9">
        <SingleAreaBrushZoom
          data={ TIME_SERIES['price'] }
          dateFormat="%b %Y"
          xField="month"
          yField="usd"
          height="450"
          width="1050" />
      </ChartPanel>

    </div>

  </section>

export default AreaChartsDemo
