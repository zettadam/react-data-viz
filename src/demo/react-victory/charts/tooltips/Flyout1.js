import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Flyout1 extends Component {

  static propTypes = {
    orientation: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number
  }

  static defaultProps = {
    orientation: 'top'
  }

  render () {
    const { x, y, orientation } = this.props

    const newY = orientation === 'top' ? y - 25 : y + 25

    return (
      <g>
        <rect x={ x - 36 - 6 } y={ newY - 9 } height="32" width="72" stroke="gold" fill="gold" fillOpacity="0.25" />
        <rect x={ x - 36 - 3 } y={ newY - 6 } height="26" width="76" stroke="orange" fill="orange" fillOpacity="0.5"/>
        <rect x={ x - 36 } y={ newY - 3 } height="20" width="82" stroke="tomato" fill="tomato" fillOpacity="0.75" />
      </g>
    )
  }
}
