import React from 'react'

export default (props) =>
  <article>
    <header>
      <h2>Using D3 in React Apps</h2>
    </header>

    <section>
      <p>
        The challenge of integrating D3 with React is that React and D3 both want to control the DOM.
        The entire <strong>select/enter/exit/update</strong> pattern with D3 is in direct conflict
        with React and its virtual DOM. If you’re coming to React from D3, giving up your grip on the DOM
        is one of those “cold, dead hands” moments. The way most people use D3 with React is to use React
        to build the structure of the application, and to render traditional HTML elements, and then
        when it comes to the data visualization section, they pass a DOM container (typically
        an <code>{'<'}svg{'/>'}</code>) over to D3 and use D3 to create and destroy and update elements.
        In a way, it’s similar to the way we used to use Java applets or Flash to run a black box in your
        page while the rest of your page is rendered separately. The benefit of this method of integrating
        React and D3 is that you can use all the same kind of code you see in all the core D3 examples.
        The main difficulty is that you need to create functions in various React lifecycle events to make
        sure your viz updates.
      </p>
    </section>

    <section>
      <h3>Read more</h3>
      <ul>
        <li><a href="https://medium.com/@Elijah_Meeks/interactive-applications-with-react-d3-f76f7b3ebc71">Interactive Applications with React & D3</a></li>
      </ul>
    </section>

  </article>
