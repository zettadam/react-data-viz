import React from 'react'

export default ({
  value,
  onChange
}) => (
  <label>
    <select title="Select interpolation" name="interpolation"
      value={ value }
      onChange={ onChange }>
      <option value="basis">Basis</option>
      <option value="cardinal">Cardinal</option>
      <option value="catmullRom">CatmullRom</option>
      <option value="linear">Linear</option>
      <option value="linearClosed">Linear Closed</option>
      <option value="monotoneX">MonotoneX</option>
      <option value="monotoneY">MonotoneY</option>
      <option value="natural">Natural</option>
      <option value="step">Step</option>
    </select>
  </label>
)
