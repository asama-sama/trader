import { API_URL } from '../const'
import { TRADE_FILE_NAME } from '../const';

const getTrades = (file: File, algorithm: string) => {
  const data = new FormData();
  data.append(TRADE_FILE_NAME, file);
  return fetch(`${API_URL}/getTrades?algorithm=${algorithm}`, {
    method: 'POST',
    body: data
  }).then(async res => {
    if (!res.ok) {
      const errText = await res.json()
      throw new Error(errText.error)
    }
    return res.json()
  })
}

export default getTrades
