const path = require('path')

const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const WebpackHotMiddleware = require('webpack-hot-middleware')

const config = require('../build/webpack.config.dev')

module.exports = app => {
  const compiler = webpack(config)

  const middleware = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })

  app.use(middleware)

  app.use(
    WebpackHotMiddleware(compiler)
  )

  app.use(express.static('assets'))

  app.get('*', (req, res) => {
    const indexFile = path.resolve(compiler.outputPath, 'index.html')

    compiler.outputFileSystem.readFile(indexFile, (error, file) => {
      if (error) {
        res.sendStatus(404)
      } else {
        res.end(file)
      }
    })
  })
}
