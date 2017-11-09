import React from 'react'
import Chart from 'react-chartjs-2'

const CartesianChart = ({
  adapter,
  data,
  type,
  yStacked,
  xStacked = yStacked
}) => {
  let options = {
    tooltips: {
      callbacks: {
        label: (items, data) => data.datasets[items.datasetIndex].label + ': ' + items.yLabel.toLocaleString()
      },
      position: 'average',
      mode: 'x',
      intersect: false
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        { ticks: { beginAtZero: true, userCallback: value => value.toLocaleString() }, stacked: yStacked }
      ],
      xAxes: [
        { stacked: xStacked }
      ]
    }
  }

  let legend = {
    position: 'top',
    labels: {
      fontSize: 12,
      usePointStyle: false,
      boxWidth: 2
    }
  }

  return (
    <Chart
      type={ type }
      data={ adapter(data) }
      options={ options }
      legend={ legend } />
  )
}

export default CartesianChart
