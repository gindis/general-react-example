/**
 * Author: 笑翟 <gindis.wx>
 * Develop server
 */

const path = require('path')

module.exports = {
  build: {
    index: path.resolve(__dirname, 'build/index.html'),
    assetsRoot: path.resolve(__dirname, 'build'),
    assetsPublicPath: '/',
    productionSourceMap: true
  },
  dev: {
    port: 8080,
    proxyTable: {}
  }
}
