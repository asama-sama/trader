import DataPoint from '../types/DataPoint'
import Trade from '../types/Trade'

const addOnANewTrade = (open:DataPoint, close: DataPoint, trades: Trade[]) => {
  const newTrade = {
    open,
    close
  }
  return [...trades, newTrade]
}

export default addOnANewTrade
