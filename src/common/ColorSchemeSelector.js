import React from 'react'

export default ({
  value,
  onChange
}) => (
  <label>
    <select title="Select theme" name="theme"
      value={ value }
      onChange={ onChange }>
      <option value="schemeAccent">Scheme Accent</option>
      <option value="schemeBlues">Scheme Blues</option>
      <option value="schemeBrBG">Scheme BrBG</option>
      <option value="schemeBuGn">Scheme BuGn</option>
      <option value="schemeBuPu">Scheme BuPu</option>
      <option value="schemeDark2">Scheme Dark2</option>
      <option value="schemeGnBu">Scheme GnBu</option>
      <option value="schemeGreens">Scheme Greens</option>
      <option value="schemeGreys">Scheme Greys</option>
      <option value="schemeOranges">Scheme Oranges</option>
      <option value="schemeOrRd">Scheme OrRd</option>
      <option value="schemePaired">Scheme Paired</option>
      <option value="schemePastel1">Scheme Pastel1</option>
      <option value="schemePastel2">Scheme Pastel2</option>
      <option value="schemePiYG">Scheme PiYG</option>
      <option value="schemePRGn">Scheme PRGn</option>
      <option value="schemePuBu">Scheme PuBu</option>
      <option value="schemePuBuGn">Scheme PuBuGn</option>
      <option value="schemePuOr">Scheme PuOr</option>
      <option value="schemePuRd">Scheme PuRd</option>
      <option value="schemePurples">Scheme Purples</option>
      <option value="schemeRdBu">Scheme RdBu</option>
      <option value="schemeRdGy">Scheme RdGy</option>
      <option value="schemeRdPu">Scheme RdPu</option>
      <option value="schemeRdYlBu">Scheme RdYlBn</option>
      <option value="schemeRdYlGn">Scheme RdYlGn</option>
      <option value="schemeReds">Scheme Reds</option>
      <option value="schemeSet1">Scheme Set1</option>
      <option value="schemeSet2">Scheme Set2</option>
      <option value="schemeSet3">Scheme Set3</option>
      <option value="schemeSpectral">Scheme Spectral</option>
      <option value="schemeYlGn">Scheme YlGn</option>
      <option value="schemeYlGnBu">Scheme YlGnBu</option>
      <option value="schemeYlOrBr">Scheme YlOrBr</option>
      <option value="schemeYlOrRd">Scheme YlOrRd</option>
    </select>
  </label>
)
