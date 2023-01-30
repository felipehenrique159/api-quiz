require('dotenv').config()
const express = require('express')
const cors = require('cors')
const routes = require('./src/routes')

const server = express()

server.listen(process.env.API_PORT, () => {
    console.log(`Servidor está funcionando na porta:${process.env.API_PORT}`)
});

server.use(cors())
server.use(express.json())
server.use('/api', routes)
