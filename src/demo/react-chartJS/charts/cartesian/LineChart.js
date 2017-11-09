import React from 'react'
import Chart from 'react-chartjs-2'

import CartesianChart from './CartesianChart'

class LineAdapter extends Object {

  constructor(colors, xField, yFields) {
    super()
    this.colors = colors
    this.xField = xField
    this.yFields = yFields

    this.adapt = this.adapt.bind(this)
  }

  adapt (dataList) {
    let labels = []
    let datasets = []

    this.yFields.forEach((f, i) => {
      let rgb = this.colors[i % this.colors.length]
      datasets.push({
        label: f,
        type: 'line',
        data: [],
        borderColor: rgb,
        backgroundColor: rgb,
        borderWidth: 2,
        fill: false
      })
    })

    dataList.forEach(data => {
      labels.push(data[this.xField])
      this.yFields.forEach((f,i) => {
        datasets[i].data.push(data[f])
      })
    })

    return { labels, datasets }
  }
}

const LineChart = ({
  colors = [],
  data = [],
  stacked = false,
  xField,
  yFields
}) =>
  <CartesianChart
    adapter={ new LineAdapter(colors, xField, yFields).adapt }
    data={ data }
    type="line"
    yStacked={ stacked }
    xStacked={ true } />

export default LineChart
