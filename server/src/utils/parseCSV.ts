import CsvStructure from '../types/CsvStructure'

// converts a generic csv file to a json structure
// splits rows on '\n' and cells on ','
const parseCSV = (csv: string) : CsvStructure[] => {
  const lines = csv.split('\n')
  const header = lines[0].split(',').map(heading => heading.toLowerCase())
  const data = lines.slice(1, lines.length)
  let dataArray: CsvStructure[] = []
  for (const line of data) {
    const cells = line.split(',')
    const jsonForLine : CsvStructure = {}
    cells.forEach((cell, idx) => {
      const trimmed = cell.trim()
      if (trimmed === '') return
      jsonForLine[header[idx]] = trimmed
    })
    if (Object.keys(jsonForLine).length === 0) continue
    dataArray = [...dataArray, jsonForLine]
  }
  return dataArray
}

export default parseCSV
