const path = require('path')

module.exports = {
  mode: 'development', // Change mode to production for production build
  target: 'node',
  entry: './server.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
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
