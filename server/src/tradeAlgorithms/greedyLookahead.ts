import DataPoint from '../types/DataPoint'
import Trade from '../types/Trade'

// this algorithm uses a greedyLookahead strategy
// checks the current value and wont close the trade if
// it sees the next value goes up as well
const greedyLookahead = (data: DataPoint[]) : Trade[] => {
  throw new Error('greedyLookahead Not Implemented')
}

export default greedyLookahead
