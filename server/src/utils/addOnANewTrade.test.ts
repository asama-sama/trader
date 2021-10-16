import addOnANewTrade from './addOnANewTrade'
import { trade1 } from '../__testdata/trades.data'

describe('addOnANewTrade', () => {
  test('trades increases by 1', () => {
    const open = {
      time: 1,
      price: 1
    }
    const close = {
      time: 2,
      price: 2
    }
    const prevLength = trade1.length
    const newTrades = addOnANewTrade(open, close, trade1)
    expect(newTrades.length).toBe(prevLength + 1)
  })
})
