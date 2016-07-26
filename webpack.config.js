var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        inline: true,
        hot: true,
        contentBase: './src',
        port: 3000
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './dev/js/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query:
                {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.styl/,
                loader: 'style-loader!css-loader!stylus-loader'
            }
        ]
    },
    output: {
        path: 'src',
        filename: 'js/bundle.min.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
