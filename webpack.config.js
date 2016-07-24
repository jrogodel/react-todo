var webpack = require('webpack');
var path = require('path');
var qs = require('querystring');
var autoprefixer = require('autoprefixer');

process.env.NODE_ENV = process.env.NODE_ENV || "development";

module.exports = {
  devtool: '#eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/app.js'
  ],
  output: {
    path: '__dirname',
    filename: path.join(__dirname, './build'),
    publicPath: '/build'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js'],
    alias: {
      request: 'browser-request'
    }
  },
  module: {
     loaders: [
       {
         test: /\.js$/,
         loader: 'babel',
         include: path.join(__dirname, 'client'),
         query: {
           "env": {
             "development": {
               "presets": ["react-hmre"],
               "plugins": [
                 ["react-transform", {
                   "transforms": [{
                     "transform": "react-transform-hmr",
                     "imports": ["react"],
                     "locals": ["module"]
                   }]
                 }]
               ]
             }
           },
         }
       },
       {
         test: /\.css$/,
         include: path.join(__dirname, 'client'),
         loader: 'style-loader!css-loader?' + qs.stringify({
           modules: true,
           importLoaders: 1,
           localIdentName: '[path][name]-[local]'
        })
      }
    ]
  }
};
