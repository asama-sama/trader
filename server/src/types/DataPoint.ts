import CsvStructure from './KeyValue'

interface DataPoint {
  time: number,
  price: number
}

const assertDataPoint = (csvEntry: CsvStructure) : DataPoint => {
  const { time, price } = csvEntry
  if (time === undefined || price === undefined) {
    throw new Error(`Object is not a DataPoint: ${JSON.stringify(csvEntry)}`)
  }
  return {
    time: parseInt(time),
    price: parseFloat(price)
  }
}

export default DataPoint
export { assertDataPoint }
