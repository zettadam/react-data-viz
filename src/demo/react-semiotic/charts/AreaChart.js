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
  xAccessor, xField,
  yAccessor, yFields
}) => {
  const parseTime = timeParse(timeFormat)
  const output = yFields.map(y => ({
    coordinates: data.map(d => ({
      [xAccessor]: scale.x === 'time' ? parseTime(d[xField]) : d[xField],
      [yAccessor]: d[y]
    }))
  }))
  return output
}


export default class AreaChart extends Component {

  static defaultProps = {
    data: [],
    height: 300,
    hoverAnnotation: true,
    interpolation: 'linear',
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
      responsiveHeight,
      responsiveWidth,
      scale,
      showLinePoints,
      theme,
      timeFormat,
      tooltipContent,
      width,
      xAccessor, xField,
      yAccessor, yFields
    } = this.props

    const colors = COLORS[theme] || []

    const lines = prepareData({
      data,
      scale,
      timeFormat,
      xAccessor, xField,
      yAccessor, yFields
    })

    const isResponsive = responsiveHeight || responsiveWidth

    const frameProps = {
      lines,
      lineStyle: (d, i) => ({ fill: colors[i % colors.length], fillOpacity: 0.75 }),
      axes,
      hoverAnnotation,
      legend,
      lineType: { type: 'stackedarea', interpolator: CURVE_MAP[interpolation] },
      matte,
      showLinePoints,
      size: [height, width],
      xAccessor,
      xScaleType: typeof SCALE_MAP[scale.x] === 'function' ? SCALE_MAP[scale.x]() : SCALE_MAP['time'](),
      yAccessor,
      yScaleType: typeof SCALE_MAP[scale.y] === 'function' ? SCALE_MAP[scale.y]() : SCALE_MAP['linear']()
    }

    if (isResponsive) {
      frameProps.responsiveHeight = responsiveHeight
      frameProps.responsiveWidth = responsiveWidth
    }

    if (margin) frameProps.margin = margin
    if (tooltipContent) frameProps.tooltipContent = tooltipContent

    return isResponsive ?
      <ResponsiveXYFrame { ...frameProps } /> :
      <XYFrame { ...frameProps } />
  }
}
