import React from 'react'

import AreaChartsDemo from './AreaChartsDemo'
import BarChartsDemo from './BarChartsDemo'
import BoxPlotsDemo from './BoxPlotsDemo'
import BubbleChartsDemo from './BubbleChartsDemo'
import BubbleMapChartsDemo from './BubbleMapChartsDemo'
import BulletChartsDemo from './BulletChartsDemo'
import CandlestickChartsDemo from './CandlestickChartsDemo'
import ChordDiagramsDemo from './ChordDiagramsDemo'
import ChoroplethMapsDemo from './ChoroplethMapsDemo'
import CircularPackingChartsDemo from './CircularPackingChartsDemo'
import ConnectionMapsDemo from './ConnectionMapsDemo'
import DensityPlotsDemo from './DensityPlotsDemo'
import DonutChartsDemo from './DonutChartsDemo'
import DotMapsDemo from './DotMapsDemo'
import DotMatrixChartsDemo from './DotMatrixChartsDemo'
import ErrorBarsChartsDemo from './ErrorBarsChartsDemo'
import FlowMapsDemo from './FlowMapsDemo'
import HeatmapsChartsDemo from './HeatmapsChartsDemo'
import HistogramsChartsDemo from './HistogramsChartsDemo'
import KagiChartsDemo from './KagiChartsDemo'
import LineChartsDemo from './LineChartsDemo'
import MarimekkoChartsDemo from './MarimekkoChartsDemo'
import NestedBubbleChartsDemo from './NestedBubbleChartsDemo'
import NetworkDiagramsDemo from './NetworkDiagramsDemo'
import RoseChartsDemo from './RoseChartsDemo'
import ParallelCoordinatesPlotsDemo from './ParallelCoordinatesPlotsDemo'
import ParallelSetsChartsDemo from './ParallelSetsChartsDemo'
import PieChartsDemo from './PieChartsDemo'
import RadarChartsDemo from './RadarChartsDemo'
import SankeyChartsDemo from './SankeyChartsDemo'
import ScatterPlotsDemo from './ScatterPlotsDemo'
import SegmentedChartsDemo from './SegmentedChartsDemo'
import SpanChartsDemo from './SpanChartsDemo'
import StreamChartsDemo from './StreamChartsDemo'
import SunburstChartsDemo from './SunburstChartsDemo'
import TreemapsChartsDemo from './TreemapsChartsDemo'
import VoronoiChartsDemo from './VoronoiChartsDemo'

const VictoryDemo = ({
  type
}) =>
  <div className={ `demo-${type}` }>
    { 'area' === type && <AreaChartsDemo /> }
    { 'bar' === type && <BarChartsDemo /> }
    { 'box' === type && <BoxPlotsDemo /> }
    { 'bubble' === type && <BubbleChartsDemo /> }
    { 'bubble-map' === type && <BubbleMapChartsDemo /> }
    { 'bullet' === type && <BulletChartsDemo /> }
    { 'candlestick' === type && <CandlestickChartsDemo /> }
    { 'chord' === type && <ChordDiagramsDemo /> }
    { 'choropleth-map' === type && <ChoroplethMapsDemo /> }
    { 'circular-packing' === type && <CircularPackingChartsDemo /> }
    { 'connection-map' === type && <ConnectionMapsDemo /> }
    { 'density' === type && <DensityPlotsDemo /> }
    { 'donut' === type && <DonutChartsDemo /> }
    { 'dot-map' === type && <DotMapsDemo /> }
    { 'dot-matrix' === type && <DotMatrixChartsDemo /> }
    { 'error-bar' === type && <ErrorBarsChartsDemo /> }
    { 'flow-map' === type && <FlowMapsDemo /> }
    { 'heatmap' === type && <HeatmapsChartsDemo /> }
    { 'histogram' === type && <HistogramsChartsDemo /> }
    { 'kagi' === type && <KagiChartsDemo /> }
    { 'line' === type && <LineChartsDemo /> }
    { 'marimekko' === type && <MarimekkoChartsDemo /> }
    { 'nested-bubble' === type && <NestedBubbleChartsDemo /> }
    { 'network' === type && <NetworkDiagramsDemo /> }
    { 'rose' === type && <RoseChartsDemo /> }
    { 'parallel-coordinates' === type && <ParallelCoordinatesPlotsDemo /> }
    { 'parallel-set' === type && <ParallelSetsChartsDemo /> }
    { 'pie' === type && <PieChartsDemo /> }
    { 'radar' === type && <RadarChartsDemo /> }
    { 'sankey' === type && <SankeyChartsDemo /> }
    { 'scatter' === type && <ScatterPlotsDemo /> }
    { 'segmented' === type && <SegmentedChartsDemo /> }
    { 'span' === type && <SpanChartsDemo /> }
    { 'stream' === type && <StreamChartsDemo /> }
    { 'sunburst' === type && <SunburstChartsDemo /> }
    { 'treemap' === type && <TreemapsChartsDemo /> }
    { 'voronoi' === type && <VoronoiChartsDemo /> }
  </div>

export default VictoryDemo
