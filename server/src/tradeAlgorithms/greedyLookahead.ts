import DataPoint from '../types/DataPoint'
import Trade from '../types/Trade'
import addOnANewTrade from '../utils/addOnANewTrade'

// this algorithm uses a greedyLookahead strategy
// checks the current value and wont close the trade if
// it sees the next value goes up as well
const greedyLookahead = (data: DataPoint[]) : Trade[] => {
  let trades: Trade[] = []
  let open:DataPoint | undefined
  for (let i = 0; i < data.length; i++) {
    const datapoint = data[i]
    const nextDatapoint = data[i + 1]
    if (open === undefined) {
      open = datapoint
    }
    // close the trade if reached the end and there is a profit
    if (nextDatapoint === undefined) {
      if (open.price < datapoint.price) {
        trades = addOnANewTrade(open, datapoint, trades)
      }
      continue
    }
    if (nextDatapoint.price < datapoint.price && datapoint.price > open.price) {
      trades = addOnANewTrade(open, datapoint, trades)
      open = undefined
    }
  }
  return trades
}

export default greedyLookahead
