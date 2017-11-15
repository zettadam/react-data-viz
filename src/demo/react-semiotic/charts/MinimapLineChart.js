import React, { Component } from 'react'
import { scaleLinear, scaleLog, scaleOrdinal, scaleTime } from 'd3-scale'
import { timeParse } from 'd3-time-format'
import { MinimapXYFrame, ResponsiveMinimapXYFrame } from 'semiotic'

import COLORS from 'common/colorSchemes'
import { CURVE_MAP } from '../common'

const SCALE_MAP = {
  linear: scaleLinear,
  log: scaleLog,
  ordinal: scaleOrdinal,
  time: scaleTime
}

const prepareData = ({
  data,
  scale,
  timeFormat,
  xField,
  yFields
}) => {
  const parseTime = timeParse(timeFormat)
  return yFields.map(y => ({
    coordinates: data.map(d => ({
      x: scale.x === 'time' ? parseTime(d[xField]) : d[xField],
      y: d[y]
    }))
  }))
}

export default class LineChart extends Component {

  static defaultProps = {
    data: [],
    height: 300,
    hoverAnnotation: true,
    interpolation: 'monotoneX',
    legend: false,
    matte: false,
    responsiveHeight: false,
    responsiveWidth: true,
    scale: { x: 'time', y: 'linear' },
    showLinePoints: false,
    theme: 'schemeAccent',
    timeFormat: '%Y-%m-%d',
    width: 533
  }

  constructor (props) {
    super(props)

    this.state = {
      extent: [872021786116, 1099711398123]
    }

    this.updateDateRange = this.updateDateRange.bind(this)
  }

  updateDateRange (extent) {
    console.log( 'updateDateRange', extent)
    this.setState({ extent });
  }

  render () {
    const {
      axes,
      data,
      height,
      hoverAnnotation,
      interpolation,
      legend,
      matte,
      margin,
      responsiveHeight,
      responsiveWidth,
      scale,
      timeFormat,
      theme,
      tooltipContent,
      width,
      xField,
      yFields
    } = this.props

    const colors = COLORS[theme] || []

    const lines = prepareData({
      data,
      scale,
      timeFormat,
      xField,
      yFields
    })

    const isResponsive = responsiveHeight || responsiveWidth

    const lineDataAccessor = d => d.coordinates.filter(p => p.x >= this.state.extent[0] && p.x <= this.state.extent[1])

    const settings = {
      axes,
      defined: d => d.y !== 0,
      hoverAnnotation,
      legend,
      lineDataAccessor,
      lines,
      lineStyle: (d, i) => ({ stroke: colors[i % colors.length], strokeWidth: 2 }),
      lineType: { type: 'line', interpolator: CURVE_MAP[interpolation] },
      matte,
      minimap: {
        axes: [ axes[1] ],
        brushEnd: this.updateDateRange,
        lineDataAccessor: d => d.coordinates,
        lines,
        margin: { top: 20, bottom: 35, left: 300, right: 20 },
        size: [ 700, 100 ],
        yBrushable: false,
        xBrushExtent: this.state.extent
      },
      size: [width, height],
      xAccessor: d => d.x,
      xScaleType:
        typeof SCALE_MAP[scale.x] === 'function' ? SCALE_MAP[scale.x]() : SCALE_MAP['time'](),
      yAccessor: d => d.y,
      yScaleType:
        typeof SCALE_MAP[scale.y] === 'function' ? SCALE_MAP[scale.y]() : SCALE_MAP['linear']()
    }

    if (margin) settings.margin = margin
    if (isResponsive) {
      settings.responsiveHeight = responsiveHeight
      settings.responsiveWidth = responsiveWidth
    }
    if (tooltipContent) settings.tooltipContent = tooltipContent

    return isResponsive ?
      <ResponsiveMinimapXYFrame { ...settings } /> :
      <MinimapXYFrame { ...settings } />
  }
}
