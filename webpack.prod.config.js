const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const commonConfig = require('./webpack.common.config.js');
const WorkboxPlugin = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// https://developers.google.com/web/tools/workbox/modules/workbox-strategies
const CACHE_STRATEGIES = {
  CACHE_FIRST: 'cacheFirst',
  STALE_WHILE_REVALIDATE: 'staleWhileRevalidate',
  NETWORK_FIRST: 'networkFirst',
  NETWORK_ONLY: 'networkOnly',
  CACHE_ONLY: 'cacheOnly'
};

module.exports = merge(commonConfig, {
  mode: 'production',
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'app', 'manifest.json'),
        to: path.resolve(__dirname, 'build', 'manifest.json')
      }
    ]),
    new WorkboxPlugin.GenerateSW({
      // these options encourage to get in fast
      // and not allow any straggling "old" SWs
      clientsClaim: true,
      skipWaiting: true,
      importWorkboxFrom: 'local',
      navigateFallback: '/',
      runtimeCaching: [
        { urlPattern: new RegExp('/static/*'), handler: CACHE_STRATEGIES.CACHE_FIRST }
      ]
    })
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
});
