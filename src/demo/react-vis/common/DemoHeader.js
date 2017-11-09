import React from 'react'

import DemoToolbar from 'common/DemoToolbar'

export default ({
  handlers,
  section
}) =>
  <header>
    <h3>Using React and <a href="http://uber.github.io/react-vis/">React-Vis</a> library</h3>
    <DemoToolbar handlers={ handlers } section={ section } />
  </header>
