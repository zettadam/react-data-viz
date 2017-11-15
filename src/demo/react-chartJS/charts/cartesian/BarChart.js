import React from 'react'

import CartesianChart from './CartesianChart'

class BarAdapter extends Object {

  constructor (colors, xField, yFields) {
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
        type: 'bar',
        data: [],
        borderColor: rgb,
        backgroundColor: rgb,
        fill: true
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

const BarChart = ({
  colors = [],
  xField,
  yFields,
  data = [],
  stacked = false
}) =>
  <CartesianChart
    adapter={ new BarAdapter(colors, xField, yFields).adapt }
    data={ data }
    type="bar"
    yStacked={ stacked }
    xStacked={ stacked } />

export default BarChart
