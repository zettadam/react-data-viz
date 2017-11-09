import React from 'react'

export default ({
  value,
  onChange
}) =>
  <label>
    <select title="Select theme" name="theme"
      value={ value }
      onChange={ onChange }>
      <option value="sequential">Sequential</option>
      <option value="divergent">Divergent</option>
      <option value="qualitativeA">Qualitative A</option>
      <option value="qualitativeB">Qualitative B</option>
      <option value="grayscale">Grayscale</option>
    </select>
  </label>
