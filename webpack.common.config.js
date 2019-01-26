const path = require('path');
// injects scripts into index.html
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'app', 'app.js')
  },
  output: {
    path: path.resolve(__dirname),
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
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'app', 'index.template.html'),
      inject: 'head'
    })
  ]
};
