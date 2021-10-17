import express from 'express'
import router from './router'
import cors from 'cors'
import fileUpload from 'express-fileupload'

const app = express()
const port = 3001

app.use(router)
app.use(cors())
app.use(fileUpload())

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
