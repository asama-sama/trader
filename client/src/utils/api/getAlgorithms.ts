import { API_URL } from '../const'

const getAlgorithms = () => fetch(`${API_URL}/algorithms`)
  .then(res => res.json())

export default getAlgorithms
