const http = require('http')
const express = require('express')
const path = require('path')
const API = require('./api/api')
const { PORT } = require('../config/application-constants')

const portNum = process.env.WFMSPORT || PORT

const app = express()
const server = http.createServer(app)

API.init(app)
app.use(express.static(path.resolve(__dirname, '../build/')))

const startServer = (portNum) => {
  return server.listen(portNum, () => {
    const { port } = server.address()
    console.log(`Server listening on port ${port}`)
    console.log('Press crtl+c to stop the server')
  })
}

process.on('SIGINT', () => {
  server.close()
  process.exit()
})
process.on('exit', () => {
  server.close()
  process.exit()
})
process.on('uncaughtException', () => {
  server.close()
  process.exit()
})

startServer(portNum)
