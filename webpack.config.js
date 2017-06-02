var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
  entry: './web/static/js/index.js',
  output: {
    path: path.join(__dirname, 'priv', 'static', 'js'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('../css/app.css')
  ],
  resolve: {
    modules: [ 'node_modules', __dirname + '/web/static/js' ]
  }
};
