import React, { Component } from 'react'

import {
  INTERPOLATION_OPTIONS,
  THEME_OPTIONS
} from 'demo/react-victory/common'

import Selector from 'common/Selector'

export default class ChartPanel extends Component {

  static defaultProps = {
    aspectRatio: 'default',
    baseClassName: 'chart-panel',
    className: '',
    interpolation: 'natural',
    theme: 'sequential',
    title: 'Chart Title',
    withMin: false,
    withMax: false
  }

  constructor (props) {
    super(props)

    this.state = {
      theme: props.theme,
      interpolation: props.interpolation,
      yMax: 0,
      yMin: 0
    }

    this.handleThemeChange = this.handleThemeChange.bind(this)
    this.handleInterpolationChange = this.handleInterpolationChange.bind(this)
  }

  handleThemeChange (event) {
    const { target: { value } } = event
    this.setState({ theme: value })
  }

  handleInterpolationChange (event) {
    const { target: { value } } = event
    this.setState({ interpolation: value })
  }

  render () {
    const {
      aspectRatio,
      baseClassName,
      children,
      className,
      title
    } = this.props
    const {
      interpolation,
      theme
    } = this.state

    return (
      <div className={ `${ baseClassName } ${className}` }>
        <div className={ `${ baseClassName }__header` }>
          <h4 className={ `${ baseClassName }__title` }>{ title }</h4>
          <div className={ `${ baseClassName }__toolbar` }>
            <Selector title="Select a theme"
              value={ theme }
              onChange={ this.handleThemeChange }
              options={ THEME_OPTIONS } />
            <Selector title="Select an interpolation"
              value={ interpolation }
              onChange={ this.handleInterpolationChange }
              options={ INTERPOLATION_OPTIONS } />
          </div>
        </div>
        <div className={ `${baseClassName }__content ${baseClassName}__content-${ aspectRatio}` }>
          <div className="chart">
            { children && React.cloneElement(children, { interpolation, theme } )}
          </div>
        </div>
      </div>
    )
  }
}
