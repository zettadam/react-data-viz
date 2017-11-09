import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'

import Introduction from './Introduction'
import CartesianChartsDemo from './CartesianChartsDemo'
import RadialChartsDemo from './RadialChartsDemo'

const Article = props => (
  <article>
    <h1>ChartJS</h1>
    <nav>
      <ul>
        <li><NavLink to="/chartJS/introduction">Introduction</NavLink></li>
        <li><NavLink to="/chartJS/demo/cartesian">Cartesian Charts</NavLink></li>
        <li><NavLink to="/chartJS/demo/radial">Radial Charts</NavLink></li>
      </ul>
    </nav>

    <Switch>
      <Route path="/chartJS/introduction" component={ Introduction } />
      <Route path="/chartJS/demo/cartesian" component={ CartesianChartsDemo } />
      <Route path="/chartJS/demo/radial" component={ RadialChartsDemo } />
    </Switch>
  </article>
)

export default Article

