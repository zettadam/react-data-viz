import React from 'react'
import ReactPlayer from 'react-player'

import { LineChart } from 'demo/react-victory/charts'

import { ORDINAL_DATA, TIME_SERIES } from 'fakeData'

export default (props) =>
  <article>
    <header>
      <h2>React & Victory</h2>
    </header>

    <section>
      <h3>What Victory Is</h3>
      <figure className="large">
        <LineChart
          data={ ORDINAL_DATA[2] }
          domainPadding={{ x: 0, y: 20 }}
          theme="qualitativeA"
          xField="x"
          yFields={ ['y1', 'y2', 'y3', 'y4', 'y5'] } />
          <figcaption>A line chart with multiple series built with Victory</figcaption>
      </figure>
      <p>
        Victory is a set of modular charting components for React and React Native.
        Victory makes it easy to get started without sacrificing flexibility.
        Create one of a kind data visualizations with fully customizable styles and behaviors.
        Victory uses the same API for web and React Native applications for easy cross-platform charting.
      </p>
      <p>
        Victory is helmed by Formidable’s <a href="https://github.com/boygirl">Lauren Eastridge</a>.
      </p>
      <h3>Victory Native</h3>
      <p>
        Want to use <code>Victory</code> with React Native? Check out <a href="https://github.com/FormidableLabs/victory-native">victory-native</a>.
        Victory Native shares most of its code with Victory, and has a nearly identical API!
      </p>
      <h3 style={{ color: 'red' }}>Important</h3>
      <p style={{ color: 'red' }}>
        <em>This project is in alpha release. We're hard at work fixing bugs and improving the API.
          Be prepared for breaking changes!</em>
      </p>
      <h3>Learn More about Victory</h3>
      <h4>Articles</h4>
      <ul>

      </ul>
      <h4>Videos</h4>
      <div className="videos">
        <ReactPlayer url="https://www.youtube.com/watch?v=yuAdvxnK4IY" />
        <ReactPlayer url="https://www.youtube.com/watch?v=n8TwLWsR40Y" />
      </div>
    </section>

  </article>
