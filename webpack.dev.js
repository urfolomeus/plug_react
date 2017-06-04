var opts = require('./webpack.common.js');

module.exports = opts({
  filename: '[name].js',
  cssFilename: 'app.css',
})
