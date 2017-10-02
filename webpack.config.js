var path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    filename: './bundle.js',
  },
  module: {
	    loaders: [
	      {
	        test: /\.jsx?$/,
	        exclude: /node_modules/,
	        loader: 'babel-loader',
	        query: {
	          presets: ['react', 'es2015']
	        }
	      }
	    ]
	  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
};
