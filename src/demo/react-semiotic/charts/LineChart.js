import React, { Component } from 'react'
import { scaleLinear, scaleLog, scaleOrdinal, scaleTime } from 'd3-scale'
import { timeParse } from 'd3-time-format'
import { ResponsiveXYFrame, XYFrame } from 'semiotic'

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
    responsiveHeight: true,
    responsiveWidth: true,
    scale: { x: 'time', y: 'linear' },
    showLinePoints: false,
    theme: 'schemeAccent',
    timeFormat: '%Y-%m-%d',
    width: 533,
    xAccessor: 'x',
    yAccessor: 'y'
  }

  render () {
    const {
      axes,
      data,
      height,
      hoverAnnotation,
      interpolation,
      legend,
      margin,
      matte,
      pointStyle,
      responsiveHeight,
      responsiveWidth,
      scale,
      showLinePoints,
      timeFormat,
      theme,
      tooltipContent,
      width,
      xField,
      yFields
    } = this.props

    const colors = COLORS[theme] || []
    const isResponsive = responsiveHeight || responsiveWidth

    const lines = prepareData({
      data,
      scale,
      timeFormat,
      xField,
      yFields
    })

    const settings = {
      axes,
      hoverAnnotation,
      legend,
      lines,
      lineStyle: (d, i) => ({ stroke: colors[i % colors.length], strokeWidth: 2 }),
      lineType: { type: 'line', interpolator: CURVE_MAP[interpolation] },
      matte,
      pointStyle: (d, i) => ({
        fill: 'rgba(255,255,255,0)',
        stroke: 'rgba(0,0,0,0.25)',
        strokeWidth: 2
      }),
      showLinePoints,
      size: [width, height],
      xAccessor: 'x',
      xScaleType:
        typeof SCALE_MAP[scale.x] === 'function' ? SCALE_MAP[scale.x]() : SCALE_MAP['time'](),
      yAccessor: 'y',
      yScaleType:
        typeof SCALE_MAP[scale.y] === 'function' ? SCALE_MAP[scale.y]() : SCALE_MAP['linear']()
    }

    if (margin) settings.margin = margin
    if (pointStyle) settings.pointStyle = pointStyle
    if (tooltipContent) settings.tooltipContent = tooltipContent
    if (isResponsive) {
      settings.responsiveHeight = responsiveHeight
      settings.responsiveWidth = responsiveWidth
    }

    return isResponsive ?
      <ResponsiveXYFrame {...settings } /> :
      <XYFrame { ...settings } />
  }
}
