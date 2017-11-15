import React from 'react'

export default (props) =>
  <article>
    <header>
      <h2>Data Visualization</h2>
    </header>

    <section>
      <h3>What Is Data Visualization?</h3>

      <blockquote className="pullquote pullquote-left">
        <div>
          <p>
            Data visualization is a collection of methods that use visual representations
            to explore, make sense of, and communicate quantitative data.
          </p>
          <p>
            The <strong>immediate</strong> purpose of data visualization is to <u>improve understanding</u>.
            When data visualization is done in ways that do not improve understanding, it is done poorly.
            The <strong>ultimate</strong> purpose of data visualization, beyond understanding,
            is to <u>enable better decisions and actions</u>.
          </p>
          <p className="attribution">
            <img src="/static/experts/stephen-few.jpg" width="30" height="30" alt="Stephen Few" />
            <a href="http://www.perceptualedge.com/blog/?p=2636">Stephen Few</a>, What Is Data Visualization?
          </p>
        </div>
      </blockquote>

      <blockquote className="pullquote pullquote-left">
        <div>
          <p>
            Computer-based visualization systems provide visual representations of datasets
            designed to help people carry out tasks more effectively.
          </p>
          <p>
            Visualization is suitable when there is a need to augment human capabilities rather than replace
            people with computational decision-making methods. The design space of possible vis idioms is huge,
            and includes the considerations of both how to create and how to interact with visual representations. <u>Vis
            design is full of trade-offs</u>, and <strong>most possibilities in the design space are ineffective</strong> for
            a particular task, so validating the effectiveness of a design is both necessary and difficult.
            Vis designers must take into account <u>three very different kinds of resource limitations:
            those of computers, of humans, and of displays</u>.
            Vis usage can be analyzed in terms of <strong>why</strong> the user needs it, <strong>what</strong> data
            is shown, and <strong>how</strong> the idiom is designed.
          </p>
          <p className="attribution">
            <img src="/static/experts/tamara-munzner.jpg" height="30" eidth="40" alt="Tamara Munzner" />
            <a href="https://www.safaribooksonline.com/library/view/visualization-analysis-and/9781466508910/K14708_C000.xhtml">Tamara Munzner</a>,
            Visualization Analysis and Design
          </p>
        </div>
      </blockquote>

      <p>A primary goal of data visualization is to communicate information clearly and efficiently via graphs, plots and charts to increase understanding.</p>
    </section>

    <section>
      <h3>Learn More about Data Visualization</h3>
      <h4>Books</h4>
      <h4>Videos</h4>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=N00g9Q9stBo">A Brief History of Data Visualization</a></li>
        <li><a href="https://www.youtube.com/watch?v=-xS7QJhVbcM">Harvard i-lab | Data Visualization for Non-Programmers</a></li>
        <li><a href="https://www.youtube.com/watch?v=AU1CouHqQQY">Data science: Unpacking data visualisation</a></li>
      </ul>

      <h4>Writing</h4>
      <ul>
        <li><a href="http://www.perceptualedge.com/blog/">Perceptual Edge | Blog</a></li>
      </ul>
    </section>

  </article>
