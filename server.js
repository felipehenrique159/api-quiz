const express = require('express')
const cors = require('cors')
const routes = require('./src/routes')

const app = express()

app.listen(3000)

app.use(cors())
app.use('/api', routes)
