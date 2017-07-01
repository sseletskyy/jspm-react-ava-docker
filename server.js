'use strict'
const httpServer = require('http-server')
const port = process.env.PORT || 9080
let cache = 3600
let root = 'public'
if (process.env.NODE_ENV === 'production') {
  root = 'dist-sfx'
  console.log('running in production mode(with caching)-make sure you have "Disable cache (while DevTools is open)" checked in the browser to see the changes while developing')
} else {
  cache = -1
}
if (process.env.NODE_ENV === 'staging') {
  root = 'dist'
}
const server = httpServer.createServer({
  root: root,
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
