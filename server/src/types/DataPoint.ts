import CsvStructure from '../types/CsvStructure'

interface DataPoint {
  time: number,
  price: number
}

const assertDataPoint = ({ time, price }: CsvStructure) : DataPoint => {
  if (time === undefined || price === undefined) {
    throw new Error('Object is not a DataPoint')
  }
  return {
    time: parseInt(time),
    price: parseFloat(price)
  }
}

export default DataPoint
export { assertDataPoint }
