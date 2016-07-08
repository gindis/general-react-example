/**
 * Author: 笑翟 <gindis.wx>
 * Develop server
 */

'use strict';

const path = require('path')
const webpack = require('webpack')
const open = require('open')
const ora = require('ora')
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require('./webpack.config.js')
webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin())
webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin())

const spinner = ora('building for production...')
spinner.start()

webpack(webpackConfig, function(err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})
