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
    }],
  },
  resolve: {
    root: path.resolve('.'),
    extensions: ['', '.js'],
  },
  plugins: [
    new webpack.optimize.DedupePlugin()
  ],
  node: {
    global: false
  }
};

module.exports = config;
