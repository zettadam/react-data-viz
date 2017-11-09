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
      <option value="basisClosed">Basis Closed</option>
      <option value="basisOpen">Basis Open</option>
      <option value="bundle">Bundle</option>
      <option value="cardinal">Cardinal</option>
      <option value="cardinalClosed">Cardinal Closed</option>
      <option value="cardinalOpen">Cardinal Open</option>
      <option value="catmullRom">CatmullRom</option>
      <option value="catmullRomClosed">CatmullRom Closed</option>
      <option value="catmullRomOpen">CatmullRom Open</option>
      <option value="linear">Linear</option>
      <option value="linearClosed">Linear Closed</option>
      <option value="monotoneX">MonotoneX</option>
      <option value="monotoneY">MonotoneY</option>
      <option value="natural">Natural</option>
      <option value="step">Step</option>
      <option value="stepAfter">Step After</option>
      <option value="stepBefore">StepBefore</option>
    </select>
  </label>
)
