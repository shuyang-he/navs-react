const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const ASSET_PATH = process.env.ASSET_PATH || "/";

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "assets/images",
        },
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "index",
      template: path.resolve(__dirname, "./src/index.html"),
      inject: "head",
      scriptLoading: "defer",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./src/assets/images"),
          to: path.resolve(__dirname, "./public/assets/images"),
        },
      ],
    }),
  ],
  output: {
    filename: "js/[name].[contenthash].js",
    path: path.resolve(__dirname, "./public"),
    publicPath: ASSET_PATH,
  },
};
