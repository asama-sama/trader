import Trade from '../types/Trade'
import { MAX_TRADE_LENGTH, MIN_TRADE_LENGTH } from './const'

const tradesAtleastMinDuration = (trades: Trade[]) => {
  return trades.map(t => t.close.time - t.open.time >= MIN_TRADE_LENGTH)
    .find(t => t === false) === undefined
}

const tradesDoNotExceedMaxDuration = (trades: Trade[]) => {
  return trades.map(t => t.close.time - t.open.time <= MAX_TRADE_LENGTH)
    .find(t => t === false) === undefined
}

export { tradesAtleastMinDuration, tradesDoNotExceedMaxDuration }
