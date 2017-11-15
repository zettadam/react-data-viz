import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  //ORFrame,
  ResponsiveORFrame
} from 'semiotic'

//import COLORS from 'common/colorSchemes'


export default class HistogramChart extends Component {

  static propTypes = {
    axis: PropTypes.object,
    data: PropTypes.arrayOf(PropTypes.object),
    height: PropTypes.number,
    hoverAnnotation: PropTypes.bool,
    margin: PropTypes.object,
    oAccessor: PropTypes.func,
    oLabel: PropTypes.bool,
    oPadding: PropTypes.number,
    projection: PropTypes.string,
    rAccessor: PropTypes.string,
    responsiveHeight: PropTypes.bool,
    responsiveWidth: PropTypes.bool,
    style: PropTypes.object,
    summaryType: PropTypes.string,
    theme: PropTypes.string,
    type: PropTypes.string,
    width: PropTypes.number
  }

  static defaultProps = {
    height: 300,
    hoverAnnotation: true,
    margin: { left: 55, top: 20, bottom: 50, right: 50 },
    oLabel: true,
    oPadding: 0,
    projection: 'horizontal',
    responsiveHeight: true,
    responsiveWidth: true,
    theme: 'schemeAccent',
    type: 'bar',
    summaryType: 'histogram',
    width: 533
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
      summaryType,
      //theme,
      type,
      width
    } = this.props

    //const colors = COLORS[theme] || COLORS['schemeAccent']
    const style = d => {
      console.log( 'd', d)
      return {
        fill: d.color, stroke: d.color
      }
    }

    const frameProps = {
      data,
      hoverAnnotation,
      margin,
      oLabel,
      oAccessor,
      oPadding,
      projection,
      rAccessor,
      responsiveHeight,
      responsiveWidth,
      style,
      summaryType,
      type
    }

    if (axis) frameProps.axis = axis
    if (height && width) frameProps.size = [height, width]

    return (
      <ResponsiveORFrame { ...frameProps } />
    )
  }
}
