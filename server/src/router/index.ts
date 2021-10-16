import express from 'express'
import getTrades from '../handlers/getTrades'
import healthCheck from '../handlers/healthCheck'
const router = express.Router()

router.get('/', healthCheck)
router.get('/getTrades', getTrades)

export default router
