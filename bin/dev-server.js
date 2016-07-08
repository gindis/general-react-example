/**
 * Author: 笑翟 <gindis.wx>
 * Develop server
 */

'use strict';

const path = require('path')
const webpack = require('webpack')
const open = require('open')
const WebpackDevServer = require('webpack-dev-server')
const config = require('../config.js')
const webpackConfig = require('./webpack.config.js')
const projectRoot = path.resolve(__dirname, '../')
let port = config.dev.port;
webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin())
webpackConfig.entry.app.unshift('webpack-dev-server/client?http://localhost:' + port.toString() + '/', 'webpack/hot/dev-server')
const compiler = webpack(webpackConfig)
const server = new WebpackDevServer(compiler, {
  // webpack-dev-server options
  contentBase: projectRoot,
  publicPath: path.resolve(__dirname, '../build'),
  hot: true,
  quiet: false,
  noInfo: false,
  devtool: '#eval-source-map',
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  stats: {
    colors: true
  }
})

server.listen(port, 'localhost', function() {
  console.log('Webpack-dev-server is live on port 8080')
  open('http://localhost:' + port.toString() + '/demo/index.html')
})
