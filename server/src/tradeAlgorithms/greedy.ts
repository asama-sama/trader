import DataPoint from '../types/DataPoint'
import Trade from '../types/Trade'
import addOnANewTrade from '../utils/addOnANewTrade'

// this algorithm uses a greedy strategy and creates a new trade
// as soon as there will be profit
const greedy = (data: DataPoint[]) : Trade[] => {
  let trades: Trade[] = []
  let open:DataPoint | undefined
  for (const datapoint of data) {
    if (open === undefined) {
      open = datapoint
    }
    if (datapoint.time > open.time && datapoint.price > open.price) {
      trades = addOnANewTrade(open, datapoint, trades)
      open = undefined
    }
  }
  return trades
}

export default greedy
