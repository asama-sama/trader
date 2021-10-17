import checkFilenameExtension from './checkFilenameExtension'

describe('checkFilenameExtension', () => {
  test('it should be csv', () => {
    expect(checkFilenameExtension('test.csv', 'csv')).toBe(true)
  })

  test('it should handle multi dot names', () => {
    expect(checkFilenameExtension('test.data.something.json', 'json')).toBe(true)
  })

  test('it should handle empty string', () => {
    expect(checkFilenameExtension('test.txt', '')).toBe(false)
  })

  test('no extension', () => {
    expect(checkFilenameExtension('test', '')).toBe(false)
  })
})
