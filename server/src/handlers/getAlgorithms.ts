import { ALGORITHM_NAMES } from '../utils/const'

const getAlgorithms = (req: any, res: any) => {
  return res.send(ALGORITHM_NAMES)
}

export default getAlgorithms
