import { ALGORITHM_NAMES } from '../utils/const'
import DataPoint from '../types/DataPoint'
import greedy from './greedy'
import greedyLookahead from './greedyLookahead'
import Trade from '../types/Trade'
import KeyValue from '../types/KeyValue'

const runAlgorithm = (name: string, data: DataPoint[]) => {
  let trades: Trade[]
  const algorithms:KeyValue = ALGORITHM_NAMES
  if (algorithms[name] === algorithms.greedy) {
    trades = greedy(data)
  } else if (algorithms[name] === algorithms.greedyLookahead) {
    trades = greedyLookahead(data)
  } else {
    throw new Error(`Could not find algorithm: ${name}`)
  }
  return trades
}

export default runAlgorithm
