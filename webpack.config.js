const path = require('path');

module.exports = {
  context: __dirname,
  entry: './public/js/index.js',
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.jsx?$/, // .js || .jsx
      exclude: /node_modules/,
      // mode: 'development',
      use: {
        loader: "babel-loader"
      }
    }],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    watchContentBase: true,
    watchOptions: {
      poll: true
    },
    historyApiFallback: true,
    hot: false

  }
};