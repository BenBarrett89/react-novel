var webpack = require('webpack')

module.exports = {
  entry: [
    './client/index.jsx'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: [/node_modules/, /test/],
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: './build',
    filename: 'bundle.js'
  }
}
