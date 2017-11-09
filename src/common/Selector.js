import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Selector extends Component {

  static propTypes = {
    multiple: PropTypes.bool,
    onChange: PropTypes.func,
    options: PropTypes.array,
    title: PropTypes.string,
    value: PropTypes.string
  }

  static defaultProps = {
    multiple: false,
    options: [],
    title: ''
  }

  render () {

    const {
      multiple,
      onChange,
      options,
      title,
      value
    } = this.props

    return (
      <label>
      <select
        onChange={ onChange }
        title={ title }
        value={ value }>
      { options.length > 0 && options.map(o => <option key={ o } value={ o }>{ o }</option> )}
      </select>
    </label>
    )
  }
}
