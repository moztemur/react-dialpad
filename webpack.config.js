const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'react-dialpad',
    libraryTarget: 'umd',
    umdNamedDefine: true
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
  // module: {
  //   preLoaders: [{
  //     test: /\.jsx?$/,
  //     loader: 'eslint',
  //     exclude: /node_modules/
  //   }],
  //   loaders: [{
  //     test: /\.jsx?$/,
  //     loaders: ['babel-loader'],
  //     exclude: /node_modules/,
  //   }, {
  //     test: /\.scss$/,
  //     loaders: ['style', 'css', 'sass']
  //   }, {
  //     test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
  //     // use: [{
  //     //   loader: "file-loader?progressive=true",
  //     //   options: {}
  //     // }]
  //     loader: 'url-loader?limit=1500000&img?progressive=true'
  //   }]
  // },
};
