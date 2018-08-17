const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './demo/src/index.js',
  output: {
    path: path.resolve(__dirname, 'demo/dist'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
          use: [
              "style-loader", // creates style nodes from JS strings
              "css-loader", // translates CSS into CommonJS
              "sass-loader" // compiles Sass to CSS, using Node Sass by default
          ]
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        use: 'url-loader?limit=1500000&img?progressive=true',
      },
    ]
  },
  resolve: {
    extensions: [".jsx", ".json", ".js"]
  },
};
