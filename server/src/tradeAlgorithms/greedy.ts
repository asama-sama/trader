import DataPoint from '../types/DataPoint'
import Trade from '../types/Trade'

// this algorithm uses a greedy strategy and creates a new trade
// as soon as there will be profit
const greedy = (data: DataPoint[]) : Trade[] => {
  const trades: Trade[] = []
  let open:DataPoint | undefined
  for (const datapoint of data) {
    if (open === undefined) {
      open = datapoint
    }
    if (datapoint.time > open.time && datapoint.price > open.price) {
      const newTrade = {
        open,
        close: datapoint
      }
      trades.push(newTrade)
      open = undefined
    }
  }
  return trades
}

export default greedy
