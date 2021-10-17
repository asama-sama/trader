import parseCSV from './parseCSV'
import { case1, case2, case3, case4 } from '../__testdata/csv.data'

describe('parseCSV', () => {
  test('normal CSV', () => {
    expect(parseCSV(case1.csv)).toEqual(case1.json)
  })

  test('no data CSV', () => {
    expect(parseCSV(case2.csv)).toEqual(case2.json)
  })

  test('empty CSV', () => {
    expect(parseCSV(case3.csv)).toEqual(case3.json)
  })

  test('badly spaced CSV', () => {
    expect(parseCSV(case4.csv)).toEqual(case4.json)
  })
})
