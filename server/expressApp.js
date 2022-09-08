
const express = require('express')
const logger = require('morgan')

const devMiddleware = require('./devMiddleware')
const { normalizePort } = require('./serverHelpers')

expressApp = express()

/**
 * Request logger
 */
expressApp.use(logger('dev'))

if (process.env.NODE_ENV === 'development') {
  devMiddleware(expressApp)
}

if (process.env.NODE_ENV === 'production') {
  devMiddleware(expressApp)
}

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || '4000')
expressApp.set('port', port)

module.exports.expressApp = expressApp
