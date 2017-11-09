import React from 'react'

import { AreaChart } from 'demo/react-recharts/charts'

import { ORDINAL_DATA } from 'fakeData'
import {  COLORS } from 'themes/colors'

export default (props) =>
  <article>
    <header>
      <h2>React & Recharts</h2>
    </header>

    <section>
      <figure className="large" style={{ height: '450px' }}>
        <AreaChart
          colors={ COLORS['qualitative2'] }
          data={ ORDINAL_DATA[2] }
          xField="x"
          yFields={ ['y1', 'y2', 'y3', 'y4', 'y5'] }
          stacked />
        <figcaption>A stacked area chart built with Recharts</figcaption>
      </figure>
    </section>

  </article>
