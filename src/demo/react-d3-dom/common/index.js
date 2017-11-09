import {
  curveBasis,
  curveBasisClosed,
  curveBasisOpen,
  curveBundle,
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

export ChartPanel from './ChartPanel'
export DemoHeader from './DemoHeader'

export const CURVE_MAP = {
  'basis': curveBasis,
  'basisClosed': curveBasisClosed,
  'basisOpen': curveBasisOpen,
  'bundle': curveBundle,
  'cardinal': curveCardinal,
  'cardinalClosed': curveCardinalClosed,
  'cardinalOpen': curveCardinalOpen,
  'catmullRom': curveCatmullRom,
  'catmullRomClosed': curveCatmullRomClosed,
  'catmullRomOpen': curveCatmullRomOpen,
  'linear': curveLinear,
  'linearClosed': curveLinearClosed,
  'monotoneX': curveMonotoneX,
  'monotoneY': curveMonotoneY,
  'natural': curveNatural,
  'step': curveStep,
  'stepAfter': curveStepAfter,
  'stepBefore': curveStepBefore
}

