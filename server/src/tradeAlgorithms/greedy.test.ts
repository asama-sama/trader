import greedy from '../tradeAlgorithms/greedy'
import getTotalProfitFromTrade from '../utils/getTotalProfitFromTrade'
import { MIN_TRADE_LENGTH } from '../utils/const'
import { linearInterpolate } from '../utils/dataPointGenerators'
import { tradesAtleastMinDuration, tradesDoNotExceedMaxDuration } from '../utils/tradesChecks'

describe('greedy algorithm', () => {
  test('linear positive series', () => {
    const series = linearInterpolate(300, 0.1, 0)
    const trades = greedy(series)

    expect(series.length).toBe(300)
    expect(trades.length).toBeGreaterThan(2)
    expect(getTotalProfitFromTrade(trades)).toBeGreaterThan(26)
    expect(tradesAtleastMinDuration(trades)).toBe(true)
    expect(tradesDoNotExceedMaxDuration(trades)).toBe(true)
    trades.forEach(trade => {
      expect(trade.close.time - trade.open.time).toBe(MIN_TRADE_LENGTH)
    })
  })
  test('linear negative series', () => {
    const series = linearInterpolate(300, -0.1, 0)
    const trades = greedy(series)

    expect(series.length).toBe(300)
    expect(trades.length).toBe(0)
    expect(getTotalProfitFromTrade(trades)).toBe(0)
    trades.forEach(trade => {
      expect(trade.close.time - trade.open.time).toBe(MIN_TRADE_LENGTH)
    })
  })
  test('combined positive and negative series', () => {
    let series = linearInterpolate(150, -0.1, 0)
    series = series.concat(linearInterpolate(150, 0.1, 150))
    const trades = greedy(series)

    expect(series.length).toBe(300)
    expect(trades.length).toBe(5)
    expect(getTotalProfitFromTrade(trades)).toBeGreaterThan(20)
    expect(tradesAtleastMinDuration(trades)).toBe(true)
    expect(tradesDoNotExceedMaxDuration(trades)).toBe(true)
  })
})
