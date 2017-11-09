import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class CircleFlyout2 extends Component {

  static propTypes = {
    x: PropTypes.number,
    y: PropTypes.number
  }

  render () {
    const { x, y } = this.props

    const newY = y - 20

    return (
      <g>
        <circle cx={ x } cy={ newY } r="20" stroke="tomato" fill="tomato" fillOpacity="0.75" />
        <circle cx={ x } cy={ newY } r="25" stroke="orange" fill="orange" fillOpacity="0.5" />
        <circle cx={ x } cy={ newY } r="30" stroke="gold" fill="gold" fillOpacity="0.25" />
      </g>
    )
  }
}
