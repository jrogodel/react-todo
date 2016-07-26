const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool:'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3030',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist')
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel']
    }
    {
      test: /\.styl/,
      loader: 'style-loader!css-loader!stylus-loader'
    }
    ]
  },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
