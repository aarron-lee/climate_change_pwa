const path = require('path');
// cleans out specified directories on build
const CleanWebpackPlugin = require('clean-webpack-plugin');
// injects scripts into index.html
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'app', 'app.js')
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'assets/[name].[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path]___[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'app', 'index.template.html'),
      inject: 'body'
    })
  ]
};
