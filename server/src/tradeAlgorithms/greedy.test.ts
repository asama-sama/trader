import { series1, series2, series3 } from '../__testdata/datapoints.data'
import greedy from '../tradeAlgorithms/greedy'
import getTotalProfitFromTrade from '../utils/getTotalProfitFromTrade'

describe('greedy algorith,', () => {
  test('series 1', () => {
    const trades = greedy(series1)
    const totalProfit = getTotalProfitFromTrade(trades)
    expect(totalProfit).toBeCloseTo(0.4)
  })
  test('series 2', () => {
    const trades = greedy(series2)
    const totalProfit = getTotalProfitFromTrade(trades)
    expect(totalProfit).toBe(0)
  })
  test('series 3', () => {
    const trades = greedy(series3)
    const totalProfit = getTotalProfitFromTrade(trades)
    expect(totalProfit).toBe(0)
  })
})
