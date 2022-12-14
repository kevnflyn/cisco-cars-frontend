const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const { merge } = require('webpack-merge')

const commonRules = require('./webpack.rules')
const webpackConfig = require('./webpackConfig')

const {
  jsRule,
  cssRule,
  lessRule,
  moduleLessRule,
  svgRule,
  fontRule,
  imgRule
} = commonRules

module.exports = merge(webpackConfig, {
  optimization: {
    minimize: false,
    splitChunks: {
      chunks: 'all'
    },
    emitOnErrors: true
  },
  module: {
    rules: [
      jsRule,
      cssRule,
      lessRule,
      moduleLessRule,
      svgRule,
      fontRule,
      imgRule
    ]
  },
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client'
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/'
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin({ NODE_ENV: 'development' }),
  ]
})
