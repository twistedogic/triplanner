const resolve  = require("path").resolve;
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [
    "./index.js"
  ],
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "dist"),
    publicPath: "/"
  },
  context: resolve(__dirname, "src"),
  devtool: "inline-source-map",
  devServer: {
    host: "0.0.0.0",
    port: 3000,
    inline: true,
    hot: true,
    contentBase: resolve(__dirname, "dist"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        enforce:"pre",
        test: /\.js$/,
        use:[
          "eslint-loader"
        ],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: [
          "babel-loader",
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader?modules"
        ],
      },
      {
        test: /\.scss$/,
        use: [
          "sass-loader",
          "style-loader",
          "css-loader?modules"
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "My App",
      template: "index.ejs"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};
