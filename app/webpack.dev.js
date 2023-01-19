const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require('path');

/** @type {import('webpack').Configuration} */
const config = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
  },
};

module.exports = merge(common, config);
