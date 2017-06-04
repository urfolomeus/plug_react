var opts = require('./webpack.common.js');

module.exports = opts({
  filename: '[name].[chunkhash].js',
  cssFilename: 'app.[chunkhash].css',
})
