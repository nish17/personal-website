const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./public/js/index.js",
  devtool: "cheap-eval-source-map",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        exclude: /node_modules/,
        use: ["file-loader"]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: /node_modules/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: /node_modules/,
        loader: "file-loader"
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    watchContentBase: true,
    watchOptions: {
      poll: true
    },
    historyApiFallback: true,
    hot: false
  }
};
