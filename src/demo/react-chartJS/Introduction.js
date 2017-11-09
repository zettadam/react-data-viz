import React from 'react'

import introduction_rendered from 'md/chartJS/introduction.md'

const Introduction = props =>
  <section className="content" dangerouslySetInnerHTML={{ __html: introduction_rendered }}>
  </section>

export default Introduction
