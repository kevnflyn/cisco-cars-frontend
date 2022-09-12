/**
 * Module dependencies.
 */
const http = require('http')
const { expressApp } = require('./expressApp')
const { normalizePort, onError, onListening } = require('./serverHelpers')

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || '4000')
expressApp.set('port', port)

/**
 * Create HTTP server.
 */
const server = http.createServer(expressApp)

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port)
server.on('error', onError(port))
server.on('listening', onListening(server))
