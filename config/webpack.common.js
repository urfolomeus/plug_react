var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = function opts ({ filename, cssFilename }) {
  return {
    entry: {
      app: './web/static/js/index.js',
      vendor: ['react', 'react-dom'],
    },
    output: {
      path: path.join(__dirname, '..', 'priv', 'static', 'js'),
      filename,
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
            use: [
              {
                loader: 'css-loader',
                query: {
                  modules: true,
                  localIdentName: '[name]___[local]___[hash:base64:5]'
                }
              }
            ]
          })
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
      new ExtractTextPlugin('../css/' + cssFilename),
      new HtmlWebpackPlugin({
        filename: '../index.html',
        template: 'web/index.html'
      }),
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest'],
      }),
    ],
    resolve: {
      modules: [ 'node_modules', __dirname + '../web/static/js' ],
      extensions: ['.js', '.jsx']
    }
  }
};
