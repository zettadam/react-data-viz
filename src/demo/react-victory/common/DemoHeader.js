import React from 'react'

import DemoToolbar from 'common/DemoToolbar'

export default ({
  handlers,
  section
}) =>
  <header>
    <h3>Using React and <a href="https://formidable.com/open-source/victory/">Victory</a> library</h3>
    <DemoToolbar handlers={ handlers } section={ section } />
  </header>
