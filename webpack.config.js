var webpack = require('webpack');
var path = require('path');
var distPath = path.resolve(__dirname + '/dist');
var libraryName = 'react-dialpad';

var config = {
  entry: [__dirname + '/src/index.js'],
  output: {
    path: distPath,
    filename: 'bundle.js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  devtool: 'source-map',
  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      loader: 'eslint',
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/,
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }, {
      test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
      // use: [{
      //   loader: "file-loader?progressive=true",
      //   options: {}
      // }]
      loader: 'url-loader?limit=1500000&img?progressive=true'
    }]
  },
  resolve: {
    root: path.resolve('.'),
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.optimize.DedupePlugin()
  ],
  node: {
    global: false
  }
};

module.exports = config;
