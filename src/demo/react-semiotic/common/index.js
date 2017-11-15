import {
  curveBasis,
  curveBasisClosed,
  curveBasisOpen,
  curveCardinal,
  curveCardinalClosed,
  curveCardinalOpen,
  curveCatmullRom,
  curveCatmullRomClosed,
  curveCatmullRomOpen,
  curveLinear,
  curveLinearClosed,
  curveMonotoneX,
  curveMonotoneY,
  curveNatural,
  curveStep,
  curveStepAfter,
  curveStepBefore
} from 'd3-shape'

import ChartPanel from './ChartPanel'
import DemoHeader from './DemoHeader'

export {
  ChartPanel,
  DemoHeader
}

export const CURVE_MAP = {
  basis: curveBasis,
  basisClosed: curveBasisClosed,
  basisOpen: curveBasisOpen,
  cardinal: curveCardinal,
  cardinalClosed: curveCardinalClosed,
  cardinalOpen: curveCardinalOpen,
  catmullRom: curveCatmullRom,
  catmullRomClosed: curveCatmullRomClosed,
  catmullRomOpen: curveCatmullRomOpen,
  linear: curveLinear,
  linearClosed: curveLinearClosed,
  monotoneX: curveMonotoneX,
  monotoneY: curveMonotoneY,
  natural: curveNatural,
  step: curveStep,
  stepAfter: curveStepAfter,
  stepBefore: curveStepBefore
}

export const INTERPOLATION_OPTIONS = [
  'basis',
  'bundle',
  'cardinal',
  'catmullRom',
  'linear',
  'monotoneX',
  'monotoneY',
  'natural',
  'step',
  'stepAfter',
  'stepBefore'
]

export const THEME_OPTIONS = [
  'schemeAccent',
  'schemeBlues',
  'schemeBrBG',
  'schemeBuGn',
  'schemeBuPu',
  'schemeDark2',
  'schemeGnBu',
  'schemeGreens',
  'schemeGreys',
  'schemeOranges',
  'schemeOrRd',
  'schemePaired',
  'schemePastel1',
  'schemePastel2',
  'schemePiYG',
  'schemePRGn',
  'schemePuBu',
  'schemePuBuGn',
  'schemePuOr',
  'schemePuRd',
  'schemePurples',
  'schemeRdBu',
  'schemeRdGy',
  'schemeRdPu',
  'schemeRdYlBu',
  'schemeRdYlGn',
  'schemeReds',
  'schemeSet1',
  'schemeSet2',
  'schemeSet3',
  'schemeSpectral',
  'schemeYlGn',
  'schemeYlGnBu',
  'schemeYlOrBr',
  'schemeYlOrRd'
]
