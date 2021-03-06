const path = require('path')
const express = require('express')

const comments = require('./routes/routes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))


server.use('/api/v1/comments', comments)

module.exports = server
