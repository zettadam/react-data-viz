import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  ORFrame,
  ResponsiveORFrame
} from 'semiotic'

import COLORS from 'common/colorSchemes'


const prepareData = (data, theme) => {
  return data.map((d, i) => {
    const colors = COLORS[theme] || COLORS['schemeAccent']
    return {
      ...d,
      color: colors[i % colors.length]
    }
  })
}


export default class BarChart extends Component {

  static defaultProps = {
    height: 300,
    hoverAnnotation: true,
    margin: { left: 55, top: 20, bottom: 50, right: 50 },
    oLabel: true,
    oPadding: 5,
    responsiveHeight: true,
    responsiveWidth: true,
    theme: 'schemePaired',
    type: 'bar',
    width: 533
  }

  constructor (props) {
    super(props)
  }

  render () {

    const {
      axis,
      data,
      height,
      hoverAnnotation,
      margin,
      oAccessor,
      oLabel,
      oPadding,
      projection,
      rAccessor,
      responsiveHeight,
      responsiveWidth,
      theme,
      type,
      width
    } = this.props

    const frameProps = {
      data: prepareData(data, theme),
      margin,
      oAccessor,
      oLabel,
      oPadding,
      projection,
      rAccessor,
      responsiveHeight,
      responsiveWidth,
      style: d => {
        return { fill: d.color, fillOpacity: 0.9, stroke: 'black', strokeWidth: 2 }
      },
      type
    }

    if (axis) frameProps.axis = axis
    if (height && width) frameProps.size = [height, width]
    if (projection) frameProps.projection = projection

    return (
      <ResponsiveORFrame { ...frameProps } />
    )
  }
}
