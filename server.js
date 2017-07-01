'use strict'
const httpServer = require('http-server')
const port = process.env.PORT || 9080
let cache = -1
const server = httpServer.createServer({
  root: 'public',
  cache: cache,
  robots: true,
  fallback: '/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true'
  }
})

if (process.env.NODE_ENV !== 'production') {
  require('chokidar-socket-emitter')({app: server.server})
}

server.listen(port, () => {
  console.log('Listening on port ', port)
}) 
