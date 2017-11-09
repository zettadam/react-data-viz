import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'

import Introduction from './Introduction'


const Article = props => (
  <article>
    <h1>React (owns the DOM) plus D3</h1>

    <nav>
      <ul>
        <li><NavLink to="/react-dom-d3/introduction">Introduction</NavLink></li>
        <li><NavLink to="/react-dom-d3/bar-charts">Bar Charts</NavLink></li>
        <li><NavLink to="/react-dom-d3/line-charts">Line Charts</NavLink></li>
        <li><NavLink to="/react-dom-d3/area-charts">Area Charts</NavLink></li>
        <li><NavLink to="/react-dom-d3/pie-charts">Pie Charts</NavLink></li>
      </ul>
    </nav>

    <Switch>
      <Route path="/react-dom-d3/introduction" component={ Introduction } />
      <Route component={ Introduction } />
    </Switch>

  </article>
)

export default Article
