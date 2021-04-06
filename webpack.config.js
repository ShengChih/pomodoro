const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          /* MiniCssExtractPlugin.loader, */
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: [
                  "./src"
                ]
              }
            }
          }
        ],
      },
      {
        test: /\.(woff|woff2|eot|svg)$/,
        loader: "file-loader",
        options: {
          name: "[hash].[ext]"
        }
      },
      {
        test: /\.(jpg|jpeg|png)$/,
        loader: "url-loader",
        options: {
          limit: 50000
        }
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    alias: {
      Components: path.resolve(__dirname, 'src/components/')
    }
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist/"),
    port: 8080,
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new MiniCssExtractPlugin()]
};