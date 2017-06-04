var DashboardPlugin = require('webpack-dashboard/plugin')
var opts = require('./webpack.common.js');

var devConfig = opts({
  filename: '[name].js',
  cssFilename: 'app.css',
})

devConfig.plugins.push(new DashboardPlugin())

module.exports = devConfig;
