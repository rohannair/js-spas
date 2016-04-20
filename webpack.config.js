const path    = require('path');
const webpack = require('webpack');

const config = {
  cache: true,
  debug: true,
  devtool: 'cheap-module-eval-source-map',

  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    './5-ourapp.js'
  ],

  output: {
    path: path.join(__dirname, '.'),
    filename: 'app.js',
  },

  module: {
    loaders: [

      {
        test: /\.jsx$/,
        loaders: ['react-hot', 'babel-loader'],
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader'],
      }
    ],
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

  resolveLoader: {
    moduleDirectories: [
      './node_modules'
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  stats: {
    colors: true,
    reasons: true
  },
};

module.exports = config;
