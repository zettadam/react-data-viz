import React from 'react'
import introduction_rendered from 'md/react-dom-d3/introduction.md'

const Introduction = props =>
  <section className="content" dangerouslySetInnerHTML={{ __html: introduction_rendered }}>
  </section>

export default Introduction
