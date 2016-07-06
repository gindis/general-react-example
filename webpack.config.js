/**
 * Author: 笑翟 <gindis.wx>
 * Webpack config
 */

'use strict';

const path = require('path')
const webpack = require('webpack')
const node_modules_dir = path.resolve(__dirname, 'node_modules')

module.exports = {
  entry: {
    app: [path.resolve(__dirname, 'src/entry.js')]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react']
      }
    }, {
      test: /\.(css|scss)$/,
      loader: 'style!css!sass'
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};
