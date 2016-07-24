const webpack = require('webpack')
const path = require('path')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// SASS LOADERS
const sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, '/.client')
]

const config = {
  
  // INPUT
  entry: {
    app: 'value', ['./src/index.js','webpack-hot-middleware/client', 'webpack-dev-server/client']
  },

  // LOADERS
  module: {
    loaders: [
      {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {presets: ['react', 'es2015', 'react-hmre']},
      },
      {
        test: /\.sass$/,
        loader:ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
      }
    ]
  },

  // OUTPUT
  output: {
    path: '[name].js',
    filename: path.join(__dirname, './build')
    publicPath: '/build'
  },

  // ES2015 SOURCE MAPS
  devtool: {'source-map'},

  // PLUGINS
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
    new ExtractTextPlugin('[name].css')
  ],
  postcss:

  // RESOLVE
  resolve: { 
    extensions: ['', 'js', 'sass'],
    root: [path.join(__dirname, './client')]
  }
}

module.exports = config