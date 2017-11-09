import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'

import CHART_TYPE_MATRIX from 'chart-matrix.json'
import ChartDemo from './demo/ChartDemo'
import ContentSection from './content/ContentSection'


const sortedChartTypes = Object.keys(CHART_TYPE_MATRIX)
  .map(k => ({ type: k, ...CHART_TYPE_MATRIX[k]}))
  .sort((a, b) => {
    const titleA = a.type.toLowerCase()
    const titleB = b.type.toLowerCase()
    if (titleA < titleB) return -1
    if (titleA > titleB) return 1
    return 0
  })

const Home = () =>
  <div className="app">

    <main className="grid content">
      <header className="content__header">
        <h1>React and Data Visualization</h1>
      </header>

      <div className="content__body">
        <Switch>
          <Route path="/chart-types/:type" component={ ChartDemo } />
          <Route path="/content/:section" component={ ContentSection } />
        </Switch>
      </div>
    </main>

    <aside className="grid sidebar">
      <h3>Charts & Plots</h3>
      <nav className="chart-type__list">
      { sortedChartTypes &&
        <ul>{ sortedChartTypes.map((t, i) =>
          <li key={ `chart-type__${ t.type }` }>{ t.focus ?
            <NavLink to={ `/chart-types/${ t.type }` }>{ t.title }</NavLink> :
            <i>{ t.title }</i> }
          </li> )}
        </ul> }
      </nav>

      <nav className="main_nav">
        <ul>
          <li><NavLink to="/content/introduction">Introduction</NavLink></li>
          <li><NavLink to="/content/data-visualization">Data Visualization</NavLink></li>
          <li><NavLink to="/content/d3-data-visualization-web">D3 (Data visualization on the web)</NavLink></li>
          <li><NavLink to="/content/using-d3-in-react-apps">Using D3 in React applications</NavLink>
            <ol>
              <li><NavLink to="/content/d3-owns-dom-draws-charts">D3 owns DOM and draws charts</NavLink></li>
              <li><NavLink to="/content/react-owns-dom-d3-draws-charts">React owns DOM and D3 draws charts</NavLink></li>
              <li><NavLink to="/content/react-owns-dom-draws-charts">React owns DOM and draws the charts</NavLink></li>
            </ol>
          </li>
          <li><NavLink to="/content/react-based-charting-libraries">React-based charting libraries</NavLink>
            <ul>
              <li><NavLink to="/content/react-recharts">Recharts</NavLink></li>
              <li><NavLink to="/content/react-victory">Victory</NavLink></li>
              <li><NavLink to="/content/react-vx">VX (Visualization Components)</NavLink></li>
              <li><NavLink to="/content/react-semiotic">Semiotic</NavLink></li>
              <li><NavLink to="/content/react-chartjs">ChartJS</NavLink></li>
            </ul>
          </li>
          <li><NavLink to="/content/recommendations">Recommendations</NavLink></li>
          <li><NavLink to="/content/references">References</NavLink></li>
        </ul>
      </nav>

    </aside>

    <footer className="grid footer">
      <p>2017 Adam Ziolkowski</p>
    </footer>

  </div>

  export default Home
