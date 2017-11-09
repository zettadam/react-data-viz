import React from 'react'

import {
  GroupedBars,
  GroupedStackedBars,
  SingleBars,
  StackedBars
 } from 'demo/react-d3-dom/charts/cartesian'

 import { ORDINAL_DATA } from 'fakeData'
 import { MONOCHROMATIC_COLORS, COLORS } from 'themes/colors'

export default props => (
  <article>
    <header>
      <h2>D3 (Data Visualization on the Web)</h2>
    </header>

    <section>
      <h3>What D3 Is</h3>
      <figure>
        <StackedBars
          colors={ COLORS['qualitative2'] }
          data={ ORDINAL_DATA[2] }
          height="450"
          width="1050"
          xField="x"
          yFields={ [ 'y1', 'y2', 'y3', 'y4', 'y5' ] } />
          <figcaption>A Stacked Bar Chart (created by D3)</figcaption>
      </figure>
      <p>
        <strong>D3</strong> (<strong>Data-Driven Documents</strong> or <strong>D3.js</strong>) is
        a JavaScript library for visualizing data using web standards. D3 helps you bring data
        to life using SVG, Canvas and HTML. D3 combines powerful visualization and interaction
        techniques with a data-driven approach to DOM manipulation, giving you the full capabilities
        of modern browsers and the freedom to design the right visual interface for your data.
      </p>
      <p>
        D3 allows you to bind arbitrary data to a Document Object Model (DOM),
        and then apply data-driven transformations to the document. For example,
        you can use D3 to generate an HTML table from an array of numbers.
        Or, use the same data to create an interactive SVG bar chart with smooth
        transitions and interaction.
      </p>
      <p>
        D3 is not a monolithic framework that seeks to provide every conceivable feature.
        Instead, D3 solves the crux of the problem: efficient manipulation of documents based on data.
        This avoids proprietary representation and affords extraordinary flexibility,
        exposing the full capabilities of web standards such as HTML, SVG, and CSS.
        With minimal overhead, D3 is extremely fast, supporting large datasets and dynamic behaviors
        for interaction and animation. D3’s functional style allows code reuse through a diverse
        collection of <a href="https://github.com/d3/d3/blob/master/API.md">official</a>
        and <a href="https://www.npmjs.com/browse/keyword/d3-module">community-developed</a> modules.
      </p>
      <p>
        D3 has a bit of an unfair reputation for being hard to learn. D3 itself
        is not so complicated, but it operates in the domain of the web, and the
        web is complicated. Using D3 comfortably requires some prior knowledge
        of the web technologies with which it interacts, such as <abbr>HTML</abbr>
        , <abbr>CSS</abbr>, <abbr>JavaScript</abbr>, and <abbr>SVG</abbr>.
      </p>
      <p>
        D3’s primary author is the brilliant <a href="http://bost.ocks.org/mike/">Mike Bostock</a>, although there
        are several other dedicated contributors. The project is entirely open
        source and freely available on <a href="https://github.com/d3">GitHub</a>.
      </p>
      <p>
        D3 is released under a <a href="http://opensource.org/licenses/BSD-3-Clause">BSD license</a>,
        so you may use, modify, and adapt the code for noncommercial or commercial use at no cost.
      </p>
      <ul>
        <li><a href="http://www.d3js.org/">Official Homepage</a></li>
        <li><a href="https://github.com/d3/d3/blob/master/API.md">API Reference</a></li>
        <li><a href="https://github.com/d3/d3/blob/master/CHANGES.md">Changes in D3 4.0</a></li>
        <li><a href="http://christopheviau.com/d3list/gallery.html">Gallery</a></li>
        <li><a href="https://bl.ocks.org/mbostock">Examples</a></li>
      </ul>
    </section>

    <section>
      <h3>What It Does</h3>
      <p>
        Fundamentally, D3 is an elegant piece of software that facilitates
        generation and manipulation of web documents with data. It does this by:
      </p>
      <ul>
        <li>
          <strong>Loading</strong> data into the browser’s memory
        </li>
        <li>
          <strong>Binding</strong> data to elements within the document, creating new elements as needed
        </li>
        <li>
          <strong>Transforming</strong> those elements by interpreting each element’s
          bound datum and setting its visual properties accordingly
        </li>
        <li>
          <strong>Transitioning</strong> elements between states in response to user input
        </li>
      </ul>
      <p>
        Learning to use D3 is simply a process of learning its syntax, so you
        can tell it how to load and bind data, and transform and transition
        elements.
      </p>
      <p>
        The <strong>transformation</strong> step is most important, as this is where
        the <strong>mapping</strong> happens. D3 provides a structure for applying these
        transformations, but, as we’ll see, you define the mapping rules. Should
        larger values make taller bars or brighter circles? Will clusters be
        sorted on the x-axis by age or category? What color palette is used to
        fill in countries on your world map? All of the visual design decisions
        are up to you. You provide the concept, you craft the rules, and D3
        executes it—without telling you what to do.
      </p>
    </section>

    <section>
      <h3>What It Doesn’t Do</h3>
      <p>Here is a list of things D3 does not do:</p>
      <ul>
        <li>
          <strong>D3 doesn’t generate predefined or “canned” visualizations for you.
          This is on purpose.</strong> D3 is intended primarily for highly customized
          visualization work, whether that is designing one-off explanatory
          charts or complex, interactive, exploratory tools. It is the most
          powerful tool for visualization on the web specifically because it
          enables you to develop whatever you can imagine from scratch. There
          are no templates or chart “wizards” in D3 (although you may become one
          by the time you finish this book). There are, however, many excellent
          tools built on top of D3 that <em>do</em> provide access to
          preconfigured chart types. (See the section “Alternatives”.)
        </li>
        <li>
          <strong>D3 doesn’t even try to support older browsers.</strong> This
          helps keep the D3 codebase clean and free of hacks to support old versions
          of Internet Explorer, for example. The philosophy is that by creating more
          compelling tools and refusing to support older browsers, we encourage
          more people to upgrade (rather than forestall the process, thereby
          requiring us to continue to support those browsers, and so on—a
          vicious cycle). When D3 was first released in 2011, this was a fairly
          radical position. I’m happy to say that browsers, people, and
          organizations have since modernized sufficiently to the point that
          this is practically a nonissue. Bureaucracies that continue to support
          ancient browsers miss out on all the benefits of D3. (More for us!)
        </li>
        <li>
          <strong>D3’s <em>core</em> functionality doesn’t handle bitmap map tiles, such
          as those provided by Google Maps or Mapbox.</strong> D3 is great with anything
          vector—SVG images or GeoJSON data—but wasn’t originally intended to
          work with traditional map tiles. (<em>Bitmap</em> images are made up
          of pixels, so resizing them larger or smaller is difficult without a
          loss in quality. <em>Vector</em> images are defined by points, lines,
          and curves—mathematical equations, really—and can be scaled up or down
          without a loss in quality.) Fortunately, the{" "}
          <a href="https://github.com/d3/d3-tile">d3-tile plug-in</a> can be
          used for tile-based mapping, though it is not covered in this book.
        </li>
        <li>
          <strong>D3 doesn’t hide your original data.</strong> Because D3 code is
          executed on the client side (meaning, in the user’s web browser, as opposed
          to on the web server), the data you want visualized must be sent to the client.
          If your data can’t be shared, then don’t use D3. Alternatives include
          using proprietary browser plug-ins (like Flash) or prerendering
          visualizations as static images and sending those to the browser.
        </li>
      </ul>
    </section>

    <section>
      <h3>Origins and Context</h3>
      <p>
        The first web browsers rendered static pages; interactivity was limited
        to clicking links. In 1996, Netscape introduced the first browser with
        JavaScript, a new scripting language that could be interpreted{" "}
        <em>by the browser while the page was being viewed</em>.
      </p>
      <p>
        This doesn’t sound as groundbreaking as it turned out to be, but this
        enabled web browsers to evolve from merely passive <em>browsers</em> to
        dynamic frames for interactive, networked experiences. This shift
        ultimately enabled every intrapage interaction we have on the web today.
        Without JavaScript, D3 would never have existed, and web-based data
        visualizations would be limited to prerendered, noninteractive GIFs.
      </p>
      <p>
        Jump ahead to 2005, when Jeffrey Heer, Stuart Card, and James Landay
        introduced <a href="http://prefuse.org/">prefuse</a>, a toolkit for
        bringing data visualization to the web. <em>prefuse</em> (spelled with
        all lowercase letters) was written in Java, a compiled language, with
        programs that could run in web browsers via a Java plug-in.
      </p>
      <p>
        prefuse was a breakthrough application—the first to make web-based
        visualization accessible to less-than-expert programmers. Until prefuse
        came along, any data vis on the web was very much a custom affair.
      </p>
      <p>
        Two years later, Jeff Heer introduced{" "}
        <a href="http://flare.prefuse.org">Flare</a>, a similar toolkit, but
        written in ActionScript, so its visualizations could be viewed on the
        web through Adobe’s Flash Player. Flare, like prefuse, relied on a
        browser plug-in. Flare was a huge improvement, but as web browsers
        continued to evolve, it was clear that visualizations could be created
        with native browser technology, no plug-ins required.
      </p>
      <p>
        By 2009, Jeff Heer had moved to Stanford, where he was advising a
        graduate student named Michael Bostock. Together, in Stanford’s Vis
        Group, they created{" "}
        <a href="http://mbostock.github.com/protovis/">Protovis</a>, a
        JavaScript-based visualization toolkit that relied exclusively on native
        browser technologies.
      </p>
      <p>
        Protovis made generating visualizations simple, even for users without
        prior programming experience. Yet, to achieve this, it created an
        abstract representation layer. The designer could address this layer
        using Protovis syntax, but it wasn’t accessible through standard
        methods, so debugging was difficult.
      </p>
      <p>
        In 2011, Mike Bostock, Vadim Ogievetsky, and Jeff Heer{" "}
        <a href="http://vis.stanford.edu/papers/d3">officially announced D3</a>,
        the next evolution in web visualization tools. Unlike Protovis, D3
        operates directly on the web document itself. This means easier
        debugging, easier experimentation, and more visual possibilities. The
        only downside to this approach is a potentially steeper learning curve,
        but this book will make that as painless as possible. Plus, all the
        skills you gain while learning about D3 will prove useful even beyond
        the realm of data vis.
      </p>
      <blockquote className="pullquote pullquote-left">
        <div>
          <p>
            There is not only one right tool for visualization; the right tool
            depends on the application, such as whether you’re designing bespoke
            custom news graphics, exploring a dataset of the first time, or doing
            realtime monitoring of your network. D3 is intended to be the lowest
            layer of visualization tools: the visualization “kernel”, or “standard
            library”. You can build higher-level abstractions on top of D3 that is
            more tailored to your application. One of the areas I am considering
            exploring is higher-level abstraction, perhaps more along the lines
            of Grammar of Graphics.</p>
          <p className="attribution">
            <img class="avatar" src="/static/experts/michael-bostock.jpg" width="30" height="30" />
            <span><a href="https://news.ycombinator.com/item?id=11998072">Mike Bostock</a>, creator of D3</span>
          </p>
        </div>
      </blockquote>
      <p>
        If you’re familiar with any of these groundbreaking tools, you’ll
        appreciate that D3 descends from a prestigious lineage. And if you have
        any interest in the philosophy underlying D3’s elegant technical design,
        I highly recommend Mike, Vadim, and Jeff’s{" "}
        <a href="http://vis.stanford.edu/files/2011-D3-InfoVis.pdf">
          InfoVis paper
        </a>, which clearly articulates the need for this kind of tool. The
        paper encapsulates years’ worth of learning and insights made while
        developing visualization tools.
      </p>
    </section>

    <section>
      <h3>Modularity</h3>
      <p>Starting with version 4.0, D3 is no longer one giant, hulking library. D3 is now modular, made up of many tiny libraries, each focused on a specific domain. Unless your project is super fancy, you can probably just use the default bundle, which includes the following D3 microlibraries or modules (each repository also contains its own documentation):</p>
      <ul className="cols cols-4">
        <li><a href="https://github.com/d3/d3-array">d3-array</a></li>
        <li><a href="https://github.com/d3/d3-axis">d3-axis</a></li>
        <li><a href="https://github.com/d3/d3-brush">d3-brush</a></li>
        <li><a href="https://github.com/d3/d3-chord">d3-chord</a></li>
        <li><a href="https://github.com/d3/d3-collection">d3-collection</a></li>
        <li><a href="https://github.com/d3/d3-color">d3-color</a></li>
        <li><a href="https://github.com/d3/d3-dispatch">d3-dispatch</a></li>
        <li><a href="https://github.com/d3/d3-drag">d3-drag</a></li>
        <li><a href="https://github.com/d3/d3-dsv">d3-dsv</a></li>
        <li><a href="https://github.com/d3/d3-ease">d3-ease</a></li>
        <li><a href="https://github.com/d3/d3-force">d3-force</a></li>
        <li><a href="https://github.com/d3/d3-format">d3-format</a></li>
        <li><a href="https://github.com/d3/d3-geo">d3-geo</a></li>
        <li><a href="https://github.com/d3/d3-hierarchy">d3-hierarchy</a></li>
        <li><a href="https://github.com/d3/d3-interpolate">d3-interpolate</a></li>
        <li><a href="https://github.com/d3/d3-path">d3-path</a></li>
        <li><a href="https://github.com/d3/d3-polygon">d3-polygon</a></li>
        <li><a href="https://github.com/d3/d3-quadtree">d3-quadtree</a></li>
        <li><a href="https://github.com/d3/d3-queue">d3-queue</a></li>
        <li><a href="https://github.com/d3/d3-random">d3-random</a></li>
        <li><a href="https://github.com/d3/d3-request">d3-request</a></li>
        <li><a href="https://github.com/d3/d3-scale">d3-scale</a></li>
        <li><a href="https://github.com/d3/d3-selection">d3-selection</a><sup>1</sup></li>
        <li><a href="https://github.com/d3/d3-shape">d3-shape</a></li>
        <li><a href="https://github.com/d3/d3-time">d3-time</a></li>
        <li><a href="https://github.com/d3/d3-time-format">d3-time-format</a></li>
        <li><a href="https://github.com/d3/d3-timer">d3-timer</a></li>
        <li><a href="https://github.com/d3/d3-transition">d3-transition</a></li>
        <li><a href="https://github.com/d3/d3-voronoi">d3-voronoi</a></li>
        <li><a href="https://github.com/d3/d3-zoom">d3-zoom</a></li>
      </ul>

      <p>For more advanced use, you can generate custom bundles in order to, say, exclude all the bits you don’t need (to make your custom D3 bundle as tiny as possible) or add other bits you do need. See <a href="https://github.com/d3/d3/blob/master/CHANGES.md">the changes doc</a> for details and ideas on how to generate your own custom D3 bundles.</p>
    </section>

    <section>
      <h3>Learn more about D3</h3>

      <h4>Books</h4>
      <ul>
        <li><a href="https://www.safaribooksonline.com/library/view/interactive-data-visualization/9781449340223/">Interactive Data Visualization for the Web, by Scott Murray</a></li>
      </ul>
      <h4>Videos</h4>
      <ul>
        <li>An Introduction to d3.js: From Scattered to Scatterplot, by Scott Murray</li>
        <li>Learning to Visualize Data with D3.js, by Rafael Hernandez</li>
      </ul>
    </section>

    <section>
      <h3>Alternatives</h3>
      <p>
        D3 might not be perfect for every project. Sometimes you just need a
        quick chart and you don’t have time to code it from scratch. Or you
        might need to support <em>really</em> old browsers and can’t rely on the
        presence of technologies like SVG.
      </p>
      <p>
        For those situations, it’s good to know what other tools are out there.
        Here is a brief, noncomprehensive list of D3 alternatives, all of which
        use web-standard technologies (mostly JavaScript) and are free to
        download and use.
      </p>

      <h4>Easy Charts</h4>
      <dl>
        <dt><a href="http://datawrapper.de">DataWrapper</a></dt>
        <dd>
          A beautiful web service that lets you upload your data and quickly
          generate a chart that you can republish elsewhere, embed on your site,
          or export to PDF. This service was originally intended for
          journalists, but it is helpful for everyone. DataWrapper displays
          interactive charts in current browsers and static images for old ones.
          (Brilliant!) You can also download all the code and run it on your own
          server instead of using theirs.
        </dd>
        <dt><a href="http://www.flotcharts.org/">Flot</a></dt>
        <dd>
          A plotting library for jQuery that uses the HTML canvas element and
          supports older browsers, even all the way back to Internet Explorer 6.
          It supports limited visual forms (lines, points, bars, areas), but it
          is easy to use.
        </dd>
        <dt><a href="https://developers.google.com/chart/">Google Chart Tools</a></dt>
        <dd>
          Having evolved from Google’s earlier <a href="https://developers.google.com/chart/image/">Image Charts API</a>,
          Google’s Chart Tools can be used to generate several standard chart types,
          with support for old versions of IE.
        </dd>
        <dt><a href="http://www.highcharts.com/">Highcharts</a></dt>
        <dd>
          A JavaScript-based charting library with several predesigned themes
          and chart types. The tool is free only for noncommercial use.
        </dd>
        <dt><a href="http://benpickles.github.com/peity/">Peity</a></dt>
        <dd>
          A jQuery plug-in for very simple and very <em>tiny</em> bar, line, and
          pie charts that supports only recent browsers. Did I mention that this
          makes only very <em>tiny</em> visualizations? +10 cuteness points.
        </dd>
        <dt><a href="http://timeline.knightlab.com">Timeline.js</a></dt>
        <dd>
          A library specifically for generating interactive timelines. No coding
          is required; just use the code generator. There is not much room for
          customization, but hey, timelines are really hard to do well.
        </dd>
      </dl>

      <h4>Graph Visualizations</h4>
      <p>
        A “graph” is just data with a networked structure (for example, B is
        connected to A, and A is connected to C).
      </p>
      <dl>
        <dt><a href="http://arborjs.org/">Arbor.js</a></dt>
        <dd>
          A library for graph visualization using jQuery. Even if you never use
          this, you should check out how the documentation is presented as a
          graph, using the tool itself. (It’s so <em>meta</em>.) It uses the
          HTML canvas, so it won’t work in older browsers.
        </dd>
        <dt><a href="http://js.cytoscape.org">Cytoscape.js</a></dt>
        <dd>Library for graph theory analysis and visualization.</dd>
        <dt><a href="http://sigmajs.org/">Sigma.js</a></dt>
        <dd>
          A very lightweight library for graph visualization. Sigma.js is
          beautiful and fast, and it also uses canvas.
        </dd>
      </dl>

      <h4>Geomapping</h4>
      <p>
        In this book, I distinguish between <em>mapping</em> (all visualizations
        are maps) and <em>geomapping</em> (visualizations that include
        geographic data, or geodata, such as traditional maps). D3 has a lot of
        geomapping functionality, but you should know about these other tools.
      </p>
      <dl>
        <dt><a href="http://kartograph.org/">Kartograph</a></dt>
        <dd>
          A JavaScript-and-Python combo for gorgeous, entirely vector-based
          mapping by Gregor Aisch with must-see demos. Please go look at them
          now. I promise you’ve never seen online maps this beautiful.
        </dd>
        <dt><a href="http://leafletjs.com">Leaflet</a></dt>
        <dd>
          A library for tiled maps, designed for smooth interaction on both
          desktop and mobile devices. It includes some support for displaying
          data layers of SVG on top of the map tiles. (See Mike’s demo
          <a href="http://bost.ocks.org/mike/leaflet/">“Using D3 with Leaflet”</a>.)
        </dd>
        <dt><a href="http://modestmaps.com/">Modest Maps</a></dt>
        <dd>
          The granddaddy of tiled map libraries, Modest Maps has been succeeded
          by Polymaps and D3, but lots of people still love it, as it is
          lightweight and works with old versions of IE and other browsers.
          Modest Maps has been adapted for ActionScript, Processing, Python,
          PHP, Cinder, openFrameworks…yeah, basically everything. File this
          under “oldie, but goodie.”
        </dd>
        <dt><a href="http://polymaps.org/">Polymaps</a></dt>
        <dd>
          A predecssor of D3 by Mike Bostock, this library is for displaying
          tiled maps, with layers of data on top of the tiles. Polymaps relies
          on SVG and thus works best with current browsers. That said, you may
          be better off using D3 and the <a href="https://github.com/d3/d3-tile">d3-tile plug-in</a>.
        </dd>
      </dl>

      <h4>Almost from Scratch</h4>
      <p>
        These tools, like D3, provide methods of drawing visual forms, but
        without predesigned visual templates. If you enjoy the creative freedom
        of starting from scratch, you might enjoy these.
      </p>
      <dl>
        <dt><a href="http://p5js.org">p5.js</a></dt>
        <dd>
          <em>p5</em> takes <a href="http://processing.org/">Processing</a>, the
          fantastic programming language for artists and designers, and
          reimagines it in JavaScript for the web. Imagine the friendly
          nomenclature of Processing, and the webby strength of JavaScript.
          The <em>p5</em> project is led by <a href="http://www.lauren-mccarthy.com">Lauren McCarthy</a>,
          and it renders using canvas, so only modern browsers are supported.
        </dd>
        <dt><a href="http://paperjs.org/">Paper.js</a></dt>
        <dd>
          A framework for rendering vector graphics to canvas. Also, its website
          is one of the most beautiful on the internet, and their demos are
          unbelievable. (Go play with them now.)
        </dd>
        <dt><a href="http://dmitrybaranovskiy.github.io/raphael/">Raphaël</a></dt>
        <dd>
          A well-established library for drawing vector graphics by Dmitry
          Baranovskiy, popular due to its friendly syntax and support for older
          browsers.
        </dd>
        <dt><a href="http://snapsvg.io">Snap.svg</a></dt>
        <dd>
          A pretty fantastic, modern library for SVG creating and animation,
          this is also primarily by Dmitry. Consider it Raphaël’s successor.
        </dd>
        <dt><a href="https://two.js.org">Two.js</a></dt>
        <dd>
          JavaScript library for two-dimensional drawing in modern browsers,
          rendering to SVG, canvas, and WebGL, by <a href="http://jonobr1.com">Jono Brandel</a>.
        </dd>
      </dl>

      <h4>Three-Dimensional</h4>
      <p>
        D3 is not the best at 3D, simply because web browsers are historically
        two-dimensional beasts. But with increased support for WebGL, there are
        now more opportunities for 3D web experiences.
      </p>
      <dl>
        <dt><a href="http://www.senchalabs.org/philogl/">PhiloGL</a></dt>
        <dd>
          A WebGL framework specifically for 3D visualization (no longer under
          active development, unfortunately).
        </dd>
        <dt><a href="http://mrdoob.github.com/three.js/">Three.js</a></dt>
        <dd>
          A library for generating any sort of 3D scene you could imagine,
          produced by Google’s Data Arts team. You could spend all day exploring
          the mind-blowing demos on their site.
        </dd>
      </dl>

      <h4>Tools Built with D3</h4>
      <h5>General-use charting libraries</h5>
      <p>
        There are many different charting libraries built on top of D3.
        Theoretically, these make it easier to generate a visualization quickly,
        and often without having to write any D3 code yourself. The trade-off is
        generally less customization; you have to be comfortable with the chart
        templates supported by each tool. Also, each library has its own syntax
        and quirks. I recommend taking a quick glance at each one to decide what
        works best for you.
      </p>
      <dl>
        <dt><a href="https://eventbrite.github.io/britecharts/">Britecharts</a></dt>
        <dd>
          A reusable charting library by for D3 4.x brought to you by
          Eventbrite’s engineering team. And, wow,
          <a href="http://eventbrite.github.io/britecharts/tutorial-kitchen-sink.html">those colors</a>
          sure are “brite.”
        </dd>
        <dt><a href="http://c3js.org">C3.js</a></dt>
        <dd>
          Reusable charting by Masayuki Tanaka. Not yet updated to work with D3
          4.x at the time of this writing. (But what a nice demo!)
        </dd>
        <dt><a href="http://forio.com/contour/">Contour</a></dt>
        <dd>Beautifully designed, simple chart types.</dd>
        <dt><a href="http://d3plus.org">D3plus</a></dt>
        <dd>
          Charting library that also includes some nice utilities for easy text
          wrapping, color legibility, and other things you’d probably want help
          with.
        </dd>
        <dt><a href="http://visible.io">D4</a></dt>
        <dd>Library with lots of supported chart types.</dd>
        <dt><a href="http://dimplejs.org">dimple</a></dt>
        <dd>Library intended for business analysts.</dd>
        <dt><a href="http://nvd3.org">NVD3</a></dt>
        <dd>
          NVD3 was one of the first D3-based charting libraries, and offers lots
          of beautiful examples, with room for customization.
        </dd>
        <dt><a href="https://plot.ly/javascript/">plotly.js</a></dt>
        <dd>
          Quick and easy charting. Just drop in your data values, and you’re
          off!
        </dd>
        <dt><a href="http://plottablejs.org/">Plottable</a></dt>
        <dd>
          Promises “the power and flexibility of D3, but easier,” by providing
          predefined “components” that you can reuse.
        </dd>
        <dt><a href="http://imaginea.github.io/uvCharts/">uvCharts</a></dt>
        <dd>Another such library, with 12 supported chart types.</dd>
        <dt><a href="http://vega.github.io/vega/">Vega</a></dt>
        <dd>
          A “visualization grammar” with which you define chart types, visual
          properties, interaction rules, and data in a simple JSON object. Then
          Vega translates your specifications into a working, interactive chart,
          using D3 under the hood. Version 2 of this amazing, powerful tool was
          primarily authored by Arvind Satyanarayan, and was produced in Jeff
          Heer’s new <a href="https://idl.cs.washington.edu">Interactive Data Lab</a> at
          the University of Washington (Jeff’s next stop after Stanford).
        </dd>
      </dl>

      <h5>More specialized tools</h5>
      <p>
        This section includes D3-based libraries with more specialized use cases
        (such as for time series data), as well as plug-ins for use with D3 and
        other related tools.
      </p>
      <dl>
        <dt><a href="http://square.github.com/crossfilter/">Crossfilter</a></dt>
        <dd>
          A library for working with large, multivariate datasets, written
          primarily by Mike Bostock. This is useful for trying to squeeze your
          “big data” into a relatively small web browser. Not technically built
          with D3, but is commonly used with D3.
        </dd>
        <dt><a href="http://square.github.com/cubism/">Cubism</a></dt>
        <dd>
          A D3 plug-in for visualizing time series data, also written by Mike
          Bostock.
        </dd>
        <dt><a href="http://d3-annotation.susielu.com">d3-annotation</a></dt>
        <dd>
          A module for painlessly implementing visual annotations in D3 by Susie Lu.
        </dd>
        <dt>
          <a href="https://github.com/patorjk/d3-context-menu">d3-context-menu</a>
        </dt>
        <dd>
          A plug-in for adding contextual menus to your D3 projects, by Patrick
          Gillespie.
        </dd>
        <dt><a href="https://github.com/sebastian-meier/d3.sketchy">d3.sketchy</a></dt>
        <dd>
          This tool by Sebastian Meier takes your SVG shapes and makes them look
          hand-drawn. Useful when you are working in code, but need to convey to
          others that the output is rough and your design is still in process
          (like a sketch). Be sure to play with the{" "}
          <a href="http://prjcts.sebastianmeier.eu/sketch/examples/index_2.html">interactive customizer</a>.
        </dd>
        <dt><a href="http://d3-legend.susielu.com">D3 SVG Legend</a></dt>
        <dd>A reusable legend component for D3 by Susie Lu.</dd>
        <dt><a href="http://labratrevenge.com/d3-tip/">D3-tip</a></dt>
        <dd>A tool for generating tooltips in D3 charts.</dd>
        <dt><a href="https://github.com/lighterio/d6">D6</a></dt>
        <dd>
          To be honest, I don’t understand this one, but I had to share it here
          because the name stands for “Dynamically Downloaded Data-Driven
          Documents, Dude.”
        </dd>
        <dt><a href="http://dc-js.github.io/dc.js/">dc.js</a></dt>
        <dd>
          The “dc” is short for <em>dimensional charting</em>, as this library
          is optimized for exploring large, multidimensional datasets.
        </dd>
        <dt><a href="https://github.com/boundary/firespray">Firespray</a></dt>
        <dd>
          Super-fast charting library for streaming data. (Think high-density
          real-time data dashboards.)
        </dd>
        <dt><a href="http://robinforest.net/forest-d3/">Forest D3</a></dt>
        <dd>A time-series charting library built on D3, by Robin Hu.</dd>
        <dt><a href="http://metricsgraphicsjs.org">MetricsGraphics.js</a></dt>
        <dd>
          A very nice library for working with time-series data, by Ali
          Almossawi and Hamilton Ulmer.
        </dd>
        <dt><a href="http://misoproject.com/">Miso Project</a></dt>
        <dd>
          An open source project that includes <a href="http://misoproject.com/d3-chart/">d3.chart</a>,
          “a framework for building reusable charts with d3.js,” as well as other useful
          tools, from the brilliant people at <a href="https://bocoup.com">Bocoup</a> and
          <a href="http://bit.ly/2uRORGK">The Guardian Interactive team</a>.
        </dd>
        <dt><a href="http://rawgraphs.io">RAW Graphs</a></dt>
        <dd>
          Paste your spreadsheet into this amazing tool and generate an array of
          different chart types in seconds. A project initiated at the esteemed{" "}
          <a href="http://densitydesign.org">Density Design</a> research lab in
          Milan.
        </dd>
        <dt><a href="https://github.com/jamesthomson/R2D3">R2D3</a></dt>
        <dd>
          A unique blend of D3 and R that enables you to use R to create D3
          visualizations.
        </dd>
        <dt><a href="http://code.shutterstock.com/rickshaw/">Rickshaw</a></dt>
        <dd>
          A toolkit for displaying time series data that is also very
          customizable.
        </dd>
        <dt><a href="http://techanjs.org">TechanJS</a></dt>
        <dd>
          A library specifically for financial data charting and analysis.
        </dd>
        <dt><a href="http://tributary.io">Tributary</a></dt>
        <dd>
          A great tool for experimenting with live coding using D3, by Ian
          Johnson.
        </dd>
      </dl>

      <p>There is a more comprehensive <a href="https://en.wikipedia.org/wiki/Comparison_of_JavaScript_charting_frameworks">list of Javascript charting libraries/frameworks</a> is available, if you are interested in seeing more.</p>
    </section>
  </article>
)
