// webpack.config.js
const path = require('path')

// Change mode to production for production build
module.exports = {
  mode: 'development',
  target: 'node',
  entry: './server.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  externals: [require('webpack-node-externals')()],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
