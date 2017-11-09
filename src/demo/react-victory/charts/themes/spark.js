import { assign } from 'lodash'

// *
// * Colors
// *
const colors = [
  '#252525',
  '#525252',
  '#737373',
  '#969696',
  '#bdbdbd',
  '#d9d9d9',
  '#f0f0f0'
]

const charcoal = '#252525'
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
  width: 450,
  height: 300,
  padding: 45,
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
        fill: charcoal
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
        stroke: 'rgb(200,200,200)',
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
    cornerRadius: 1,
    pointerLength: 2
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
        stroke: charcoal,
        strokeWidth: 1,
        fill: '#f0f0f0',
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
      data: {
        type: 'circle'
      },
      labels: baseLabelStyles,
      title: assign({}, baseLabelStyles, { padding: 5 })
    }
  }
}
