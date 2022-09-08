const path = require('path')

const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    path.resolve(process.cwd(), 'src/App.jsx')
  ],
  resolve: {
    modules: [
      path.resolve(process.cwd(), 'node_modules'),
      path.resolve(process.cwd(), 'src')
    ],
    alias: {
      '@src': path.resolve(process.cwd(), 'src'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.less', '.css']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'assets', to: 'assets' },
      ],
      options: {
        concurrency: 100
      }
    })
  ]
}
