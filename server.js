const express = require('express')
const app = express()
app.listen(3000)
app.use('/api', require('./src/routes'))