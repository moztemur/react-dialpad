var webpack = require('webpack');
var path = require('path');
var distPath = path.resolve(__dirname + '/demo/dist');

var config = {
  entry: [__dirname + '/demo/src/index.js'],
  output: {
    path: distPath,
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
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
    global: true
  }
};

module.exports = config;
