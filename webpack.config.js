
var webpack = require('webpack');
var path=require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
   path:path.resolve(__dirname,'dist'),
    filename: 'bundle.js',
    publicPath:'/dist'
   },
  module:{
  	rules:[
  	{
  		use:'babel-loader',
  		test:/\.js$/,
  		exclude:/node_modules/
  	},
  	// adding css-loader
  	{
  		use:['style-loader','css-loader','sass-loader'],
  		test:/\.scss$/
  	}
  	]
  },
}