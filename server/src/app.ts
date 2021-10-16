import express from 'express'
import router from './router'

const app = express()
const port = 3001

app.use(router)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
