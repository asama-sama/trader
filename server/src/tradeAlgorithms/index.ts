import { ALGORITHM_NAMES } from '../utils/const'
import DataPoint from '../types/DataPoint'
import greedy from './greedy'
import greedyLookahead from './greedyLookahead'
import Trade from '../types/Trade'

const runAlgorithm = (name: string, data: DataPoint[]) => {
  let trades: Trade[]
  if (name === ALGORITHM_NAMES.greedy) {
    trades = greedy(data)
  } else if (name === ALGORITHM_NAMES.greedyLookahead) {
    trades = greedyLookahead(data)
  } else {
    throw new Error(`Could not find algorithm: ${name}`)
  }
  return trades
}

export default runAlgorithm
