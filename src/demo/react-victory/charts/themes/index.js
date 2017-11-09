import sparkSequential from './sparkSequential'
import sparkDivergent from './sparkDivergent'
import sparkQualitativeA from './sparkQualitativeA'
import sparkQualitativeB from './sparkQualitativeB'
import grayscale from './grayscale'

export default {
  spark: {
    sequential: sparkSequential,
    divergent: sparkDivergent,
    qualitativeA: sparkQualitativeA,
    qualitativeB: sparkQualitativeB
  },
  grayscale
}
