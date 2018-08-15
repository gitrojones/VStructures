const path = require('path')

const express = require('express')
const WebpackDevMiddleware = require('webpack-dev-middleware')
const WebpackHotMiddleware = require('webpack-hot-middleware')

const webpack = require('webpack')
const config = require('./dev.webpack.js')

const server = express()
const bundle = webpack(config)

server.use(WebpackDevMiddleware(bundle, {
  publicPath: config.output.publicPath
}))
server.use(WebpackHotMiddleware(bundle, {
  publicPath: config.output.publicPath
}))

server.listen(3000, () => console.log('Test app listening on port 3000!'))
