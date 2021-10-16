import Trade from '../types/Trade'

const getProfitFromTrade = (trades: Trade[]): number => {
  return trades.reduce((accumulated, current) => {
    return accumulated + (current.close.price - current.open.price)
  }, 0)
}

export default getProfitFromTrade
