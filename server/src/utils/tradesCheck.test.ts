import Trade from '../types/Trade'
import { tradesAtleastMinDuration, tradesDoNotExceedMaxDuration }
  from './tradesChecks'
import { MIN_TRADE_LENGTH, MAX_TRADE_LENGTH } from './const'

describe('tradesChecks', () => {
  test('tradesAtleastMinDuration', () => {
    const trades: Trade[] = [{
      open: {
        price: 0,
        time: 0
      },
      close: {
        price: 0,
        time: MIN_TRADE_LENGTH
      }
    }]
    const trades2: Trade[] = [{
      open: {
        price: 0,
        time: 0
      },
      close: {
        price: 0,
        time: MIN_TRADE_LENGTH - 1
      }
    }]
    expect(tradesAtleastMinDuration(trades)).toBe(true)
    expect(tradesAtleastMinDuration(trades2)).toBe(false)
  })

  test('tradesDoNotExceedMaxDuration', () => {
    const trades: Trade[] = [{
      open: {
        price: 0,
        time: 0
      },
      close: {
        price: 0,
        time: MAX_TRADE_LENGTH
      }
    }]
    const trades2: Trade[] = [{
      open: {
        price: 0,
        time: 0
      },
      close: {
        price: 0,
        time: MAX_TRADE_LENGTH + 1
      }
    }]
    expect(tradesDoNotExceedMaxDuration(trades)).toBe(true)
    expect(tradesDoNotExceedMaxDuration(trades2)).toBe(false)
  })
})
