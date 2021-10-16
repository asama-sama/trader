import DataPoint from './DataPoint'

interface Trade {
  open: DataPoint,
  close: DataPoint,
  profit: number
}

export default Trade
