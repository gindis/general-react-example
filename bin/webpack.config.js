/**
 * Author: 笑翟 <gindis.wx>
 * Webpack config
 */

'use strict';

const path = require('path')
const node_modules_dir = path.resolve(__dirname, '../node_modules')
const projectRoot = path.resolve(__dirname, '../')
const config = require('../config.js')

module.exports = {
  entry: {
    app: ['./src/entry.js']
  },
  output: {
    path: config.build.assetsRoot,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: node_modules_dir,
      loader: 'babel',
      query: {
        presets: ['es2015-ie', 'react', 'stage-0']
      }
    }, {
      test: /\.(css|scss)$/,
      loader: 'style!css!sass'
    }]
  },
  plugins: [

  ]
};
