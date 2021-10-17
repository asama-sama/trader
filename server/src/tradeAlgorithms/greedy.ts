import DataPoint from '../types/DataPoint'
import Trade from '../types/Trade'
import addOnANewTrade from '../utils/addOnANewTrade'
import { MAX_TRADE_LENGTH, MIN_TRADE_LENGTH } from '../utils/const'

// this algorithm uses a greedy strategy
// a trade must satisfy
// 1. open for at least min trade length
// 2. open duration <= max trade length
// 3. close.price > open.price
// after closing a trade, open at the next spot in tradelist
const greedy = (data: DataPoint[]) : Trade[] => {
  let trades: Trade[] = []
  let buyIdx: number | undefined
  for (let i = 0; i < data.length; i++) {
    const sell = data[i]
    if (buyIdx === undefined) {
      buyIdx = i
      continue
    }
    const buy = data[buyIdx]
    const duration = sell.time - buy.time
    if (duration < MIN_TRADE_LENGTH) continue
    if (sell.price > buy.price) {
      trades = addOnANewTrade(buy, sell, trades)
      buyIdx = undefined
      continue
    }
    // if the trade is exceeding its max length, go to the next number in list after "buy"
    // if we've reached the end of the list, do the same
    if (duration === MAX_TRADE_LENGTH || i === data.length - 1) {
      i = buyIdx
      buyIdx = undefined
      continue
    }
  }
  return trades
}

export default greedy
