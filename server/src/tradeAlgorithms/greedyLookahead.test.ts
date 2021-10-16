import { series1, series2, series3 } from '../__testdata/datapoints.data'
import greedyLookahead from '../tradeAlgorithms/greedyLookahead'
import getTotalProfitFromTrade from '../utils/getTotalProfitFromTrade'

describe('greedyLookahead algorithm', () => {
  test('series 1', () => {
    const trades = greedyLookahead(series1)
    const totalProfit = getTotalProfitFromTrade(trades)
    expect(totalProfit).toBeCloseTo(0.9)
  })
  test('series 2', () => {
    const trades = greedyLookahead(series2)
    const totalProfit = getTotalProfitFromTrade(trades)
    expect(totalProfit).toBe(0)
  })
  test('series 3', () => {
    const trades = greedyLookahead(series3)
    const totalProfit = getTotalProfitFromTrade(trades)
    expect(totalProfit).toBe(0)
  })
})
