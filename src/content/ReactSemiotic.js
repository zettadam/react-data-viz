import React from 'react'

export default (props) =>
  <article>
    <header>
      <h2>React & Semiotic</h2>
    </header>

    <section>
      <h3>What Semiotic Is</h3>
      <p>
        <strong>Semiotic is a data visualization framework for React.</strong> It provides
        three types of frames (XYFrame, ORFrame, NetworkFrame) which allow you to deploy
        a wide variety of charts that share the same rules for how to display information.
        By adjusting the settings of a frame, you can produce very different looking charts
        that despite their visual difference are the same in the way they model information.
      </p>
      <p>
        Semiotic uses a layer model for data visualization, separating interactive and annotation
        elements from graphical elements representing data. This allows for optimized rendering
        and also allows developers to focus on creating the different pieces of an effective chart
        or diagram without using the same mental model for interaction elements, labels or other
        related but distinct components.
      </p>
      <p>
        Semiotic is being developed by Elijah Meeks, Senior Data Visualization Engineer at Netflix and author of D3.js in Action.
      </p>
      <ul>
        <li><a href="https://github.com/emeeks/semiotic">Semiotic Github repo</a></li>
      </ul>

      <h3>Learn More about Semiotic</h3>
      <h4>Writing</h4>
      <ul>
        <li><a href="https://medium.com/@Elijah_Meeks/introducing-semiotic-for-data-visualization-88dc3c6b6926">Introducing Semiotic for Data Visualization</a></li>
      </ul>

      <h4>Videos</h4>
    </section>

  </article>
