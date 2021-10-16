import getTotalProfitFromTrade from './getTotalProfitFromTrade'
import { trade1, trade2, trade3 } from '../__testdata/trades.data'

describe('getTotalProfitFromTrade', () => {
  test('only positive profits', () => {
    expect(getTotalProfitFromTrade(trade1)).toBe(4)
  })
  test('deals with negative profits', () => {
    expect(getTotalProfitFromTrade(trade2)).toBe(-22.5)
  })
  test('deals with empty list', () => {
    expect(getTotalProfitFromTrade(trade3)).toBe(0)
  })
})
