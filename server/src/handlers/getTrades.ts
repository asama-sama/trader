import { TRADE_FILE_NAME } from '../utils/const'
import checkFilenameExtension from '../utils/checkFilenameExtension'
import parseCSV from '../utils/parseCSV'
import { assertDataPoint } from '../types/DataPoint'
import runAlgorithm from '../tradeAlgorithms'

const getTrades = (req: any, res: any) => {
  try {
    const file = req.files[TRADE_FILE_NAME]
    if (!checkFilenameExtension(file.name, 'csv')) {
      return res.status(500).send('File type must be csv')
    }
    const fileData = file.data.toString('utf8')
    const csvData = parseCSV(fileData)

    const dataPoints = csvData.map(d => assertDataPoint(d))

    const algorithmName = req.params.algorithm

    const trades = runAlgorithm(algorithmName, dataPoints)

    res.status(200).send(trades)
  } catch (e) {
    return res.status(500).send(e)
  }
}

export default getTrades
