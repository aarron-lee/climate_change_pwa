const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.config.js');
// cleans out specified directories on build
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(commonConfig, {
  mode: 'production',
  plugins: [new CleanWebpackPlugin(['assets'])]
});
