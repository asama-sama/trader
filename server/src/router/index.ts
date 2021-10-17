import express from 'express'
import getTrades from '../handlers/getTrades'
import healthCheck from '../handlers/healthCheck'
const router = express.Router()

router.get('/', healthCheck)
router.post('/getTrades', getTrades)

export default router
