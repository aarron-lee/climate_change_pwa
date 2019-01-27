const path = require('path');
const webpack = require('webpack');
// cleans out specified directories on build
const CleanWebpackPlugin = require('clean-webpack-plugin');
// injects scripts into index.html
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'app', 'app.jsx')
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
      },
      {
        // react svg loader
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'app', 'Components'),
      ContainerComponents: path.resolve(__dirname, 'app', 'Components', 'Container'),
      PresentationalComponents: path.resolve(__dirname, 'app', 'Components', 'Presentation'),
      UtilComponents: path.resolve(__dirname, 'app', 'Components', 'Util'),
      Stylesheets: path.resolve(__dirname, 'app', 'Stylesheets')
    },
    extensions: ['.js', '.jsx', '.scss']
  },
  plugins: [
    new webpack.ProvidePlugin({
      localforage: 'localforage'
    }),
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'app', 'index.template.html'),
      inject: 'body'
    })
  ]
};
