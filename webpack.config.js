module.exports = {
	devtool: 'inline-source-map'
	entry: ['./client/client.js'],
	output: {
		path: './dist',
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
		louders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
}
