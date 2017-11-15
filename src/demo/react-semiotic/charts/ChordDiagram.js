import React from 'react'
import { NetworkFrame } from 'semiotic'

const ChordDiagram = (
  colors,
  data,
  edgeWidthAccessor = d => d.value,
  height = 400,
  networkType = 'chord',
  padAngle = 0.01,
  sourceAccessor = d => d.source,
  targetAccessor = d => d.target,
  width = 700
) =>
  <NetworkFrame
    size={[ width, height ]}
    edges={ data }
    nodeStyle={ (d,i) => ({ fill: colors[d.index], stroke: 'black' })}
    edgeStyle={ (d,i) => ({ fill: colors[d.target.index], stroke: 'black', opacity: 0.5 })}
    nodeSizeAccessor={ 5 }
    sourceAccessor={ sourceAccessor }
    targetAccessor={ targetAccessor }
    hoverAnnotation={ true }
    edgeWidthAccessor={ edgeWidthAccessor }
    networkType={{ type: networkType, padAngle }} />

export default ChordDiagram
