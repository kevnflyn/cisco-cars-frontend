const path = require('path')
const express = require('express')

module.exports = app => {
  app.use(express.static('dist/assets'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve('dist', 'index.html'))
  })
}
