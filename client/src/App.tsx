import { useState, useEffect } from 'react'
import Dropzone from './components/Dropzone'
import './App.css'
import ButtonSelect from './components/ButtonSelect'
import IKeyValue from './types/IKeyValue'
import { API_URL } from './utils/const'
import IButton from './types/IButton'

function App () {
  const [selectedAlg, setSelectedAlg] = useState<string>()
  const [algorithms, setAlgorithms] = useState<IKeyValue>({})

  useEffect(() => {
    fetch(`${API_URL}/algorithms`)
      .then(res => res.json())
      .then((res:any) => {
        console.log(res)
        setAlgorithms(res)
        console.log(res)
      })
  }, [])

  const buttons = Object.keys(algorithms).map(algKey => {
    const button: IButton = {
      text: algorithms[algKey],
      onClick: () => setSelectedAlg(algKey),
      color: 'bg-green-500'
    }
    return button
  })

  return (
    <div className="">
      <Dropzone />
      <ButtonSelect buttons={buttons} />
    </div>
  )
}

export default App
