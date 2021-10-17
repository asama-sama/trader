import express from 'express'
import getTrades from '../handlers/getTrades'
import healthCheck from '../handlers/healthCheck'
import getAlgorithms from '../handlers/getAlgorithms'

const router = express.Router()

router.get('/', healthCheck)
router.post('/getTrades', getTrades)
router.get('/algorithms', getAlgorithms)

export default router
