var DashboardPlugin = require('webpack-dashboard/plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/dev-server',
      path.join(__dirname, '..', 'web', 'static', 'js', 'index.js')
    ],
    vendor: ['react', 'react-dom'],
  },
  output: {
    path: path.join(__dirname, '..', 'priv', 'static', 'js'),
    filename: '[name].js',
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
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]___[local]___[hash:base64:5]'
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 }
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
    new DashboardPlugin(),
    new HtmlWebpackPlugin({
      template: 'web/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    modules: [ 'node_modules', __dirname + '../web/static/js' ],
    extensions: ['.js', '.jsx']
  }
};
