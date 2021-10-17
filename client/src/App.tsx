import { useState, useEffect } from 'react'
import Dropzone from './components/Dropzone'
import ButtonSelect from './components/ButtonSelect'
import IKeyValue from './types/IKeyValue'
import IButton from './types/IButton'
import Button from './components/Button'
import getAlgorithms from './utils/api/getAlgorithms'
import getTrades from './utils/api/getTrades'
import ITrade from './types/ITrades'
import Trades from './components/Trades'
import BlockInput from './components/BlockInput'

function App () {
  const [selectedAlg, setSelectedAlg] = useState<string>()
  const [algorithms, setAlgorithms] = useState<IKeyValue>({})
  const [dataFile, setDataFile] = useState<File>()
  const [trades, setTrades] = useState<ITrade[]>()
  const [loadingTrades, setLoadingTrades] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    getAlgorithms()
      .then((res:any) => {
        setAlgorithms(res)
      })
  }, [])

  const buttons = Object.keys(algorithms).map(algKey => {
    const button: IButton = {
      text: algorithms[algKey],
      onClick: () => setSelectedAlg(algKey),
      color: 'green',
      selected: selectedAlg === algKey
    }
    return button
  })

  const handleGetTrades = async () => {
    try {
      if (dataFile && selectedAlg) {
        setLoadingTrades(true)
        const trades = await getTrades(dataFile, selectedAlg)
        setTrades(trades)
      }
    } catch(e:any) {
      console.log(e)
      setError(e.message)
    } finally {
      setLoadingTrades(false)
    }
  }

  return (
    <div className="">
      {loadingTrades && <BlockInput />}
      <Dropzone setFile={setDataFile} />
      {error && <div className="bg-red-400 text-center">{error}</div>}
      <div className="p-3">
        <h1 className="text-center">Select algorithm</h1>
        <ButtonSelect buttons={buttons} />
      </div>
      <div className="py-4 flex flex-col items-center">
        <h1 className="text-center">Get trades</h1>
        <Button text={'Calculate'} 
          onClick={handleGetTrades} 
          disabled={!(dataFile && selectedAlg)}
          color='red' 
        />
      </div>
      {trades && <Trades trades={trades} />}
    </div>
  )
}

export default App
