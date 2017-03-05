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
    historyApiFallback: true,
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
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        include: /(node_modules)\/react-toolbox/,
        use: [
          "style-loader",
          "css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]",
          "postcss-loader"
        ],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader?modules",
          "sass-loader",
          "toolbox-loader"
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
