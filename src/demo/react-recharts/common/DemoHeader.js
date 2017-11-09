import React from 'react'

import DemoToolbar from 'common/DemoToolbar'

export default ({
  handlers,
  section
}) =>
  <header>
    <h3>Using React and <a href="http://recharts.org">Recharts</a> library</h3>
    <DemoToolbar handlers={ handlers } section={ section } />
  </header>
