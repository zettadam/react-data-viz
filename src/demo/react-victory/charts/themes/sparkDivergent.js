import { assign } from 'lodash'

// *
// * Colors
// *
const colors = [
  'rgb(230,126,41)',
  'rgb(255,198,148)',
  'rgb(238,238,238)',
  'rgb(161,230,230)',
  'rgb(73,179,179)'
]

const charcoal = '#36454f'
const lightgray = 'rgb(241,241,241)'

// *
// * Typography
// *
const sansSerif = 'sans-serif'
const letterSpacing = 'normal'
const fontSize = 9

// *
// * Layout
// *
const baseProps = {
  width: 533, height: 300, // 16:9 aspect ratio
  padding: { top: 10, right: 20, bottom: 40, left: 50 },
  colorScale: colors
}

// *
// * Labels
// *
const baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize,
  letterSpacing,
  padding: 5,
  fill: charcoal,
  stroke: 'transparent'
}

const centeredLabelStyles = assign({ textAnchor: 'middle' }, baseLabelStyles)

// *
// * Strokes
// *
const strokeDasharray = "10, 5";
const strokeLinecap = 'round'
const strokeLinejoin = 'round'

export default {
  area: assign({
    style: {
      data: {
        fill: charcoal,
        fillOpacity: 0.75
      },
      labels: centeredLabelStyles
    }
  }, baseProps),
  axis: assign({
    style: {
      axis: {
        fill: 'transparent',
        stroke: charcoal,
        strokeWidth: 1,
        strokeLinecap,
        strokeLinejoin
      },
      axisLabel: assign({}, centeredLabelStyles, {
        padding: 25
      }),
      grid: {
        fill: 'transparent',
        stroke: lightgray,
        strokeDasharray,
        strokeWidth: 0.5,
        pointerEvents: 'none'
      },
      ticks: {
        fill: 'transparent',
        size: 5,
        stroke: charcoal
      },
      tickLabels: baseLabelStyles
    }
  }, baseProps),
  bar: assign({
    style: {
      data: {
        fill: charcoal,
        padding: 8,
        strokeWidth: 0
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  candlestick: assign({
    style: {
      data: {
        stroke: charcoal,
        strokeWidth: 1
      },
      labels: centeredLabelStyles
    },
    candleColors: {
      positive: '#ffffff',
      negative: charcoal
    }
  }, baseProps),
  chart: baseProps,
  errorbar: assign({
    style: {
      data: {
        fill: 'transparent',
        stroke: charcoal,
        strokeWidth: 2
      },
      labels: centeredLabelStyles
    }
  }, baseProps),
  group: assign({
    colorScale: colors
  }, baseProps),
  line: assign({
    style: {
      data: {
        fill: 'transparent',
        stroke: charcoal,
        strokeWidth: 1
      },
      labels: centeredLabelStyles
    }
  }, baseProps),
  pie: {
    style: {
      data: {
        padding: 10,
        stroke: 'transparent',
        strokeWidth: 1
      },
      labels: assign({}, baseLabelStyles, { padding: 20 })
    },
    colorScale: colors,
    width: 400,
    height: 400,
    padding: 50
  },
  scatter: assign({
    style: {
      data: {
        fill: charcoal,
        stroke: 'transparent',
        strokeWidth: 0
      },
      labels: centeredLabelStyles
    }
  }, baseProps),
  stack: assign({
    colorScale: colors
  }, baseProps),
  tooltip: {
    style: assign({}, centeredLabelStyles, { padding: 1, pointerEvents: 'none' }),
    flyoutStyle: {
      stroke: charcoal,
      strokeWidth: 1,
      fill: '#f0f0f0',
      pointerEvents: 'none'
    },
    cornerRadius: 0,
    pointerLength: 10
  },
  voronoi: assign({
    style: {
      data: {
        fill: 'transparent',
        stroke: 'transparent',
        strokeWidth: 0
      },
      labels: assign({}, centeredLabelStyles, { padding: 5, pointerEvents: 'none' }),
      flyout: {
        stroke: 'rgb(255,255,255)',
        strokeWidth: 1,
        fill: charcoal,
        fillOpacity: 0.8,
        pointerEvents: 'none'
      }
    }
  }, baseProps),
  legend: {
    colorScale: colors,
    gutter: 5,
    orientation: 'vertical',
    titleOrientation: 'top',
    style: {
      border: {
        fill: 'rgb(255,255,255)',
        stroke: charcoal,
        strokeWidth: 1
      },
      data: {
        type: 'circle'
      },
      labels: baseLabelStyles,
      title: assign({}, baseLabelStyles, { padding: 5 })
    }
  }
}
