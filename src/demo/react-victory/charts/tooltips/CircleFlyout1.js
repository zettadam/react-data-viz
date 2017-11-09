import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class CircleFlyout1 extends Component {

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

    const newY = orientation === 'top' ? y - 10 : y + 10

    return (
      <g>
        <circle cx={ x } cy={ newY } r="20" stroke="tomato" fill="none" />
        <circle cx={ x } cy={ newY } r="25" stroke="orange" fill="none" />
        <circle cx={ x } cy={ newY } r="30" stroke="gold" fill="none" />
      </g>
    )
  }
}
