var webpack = require('webpack');
var ET = require('extract-text-webpack-plugin');

module.exports = {
	
	//入口   配置
	entry:{
		app:__dirname+ '/src/scripts/jiameng.js'
	},
	
	//
	devtool: 'source-map',
	
	//输出配置
	output: {
		path: __dirname+ '/prd/',
//		filename: '[name]-[hash].js',
		// filename: '[name].js'
		// filename: 'bundle.js'
		filename: 'jiameng.js'
	},
	
	//server 配置
	devServer:{
		contentBase: __dirname+ '/prd/',			//server默认路径
		port: 3000,						//端口号
		inline: true,//
		colors: true,
		// host: '10.9.163.69',
		host: '127.0.0.1',
		// proxy:{
		// 	'/rest/*':{
		// 		target: 'http://localhost:8888',
		// 		secure: true,
		// 		pathRewrite:{
		// 			'^/rest': ''
		// 		}
		// 	}
		// }
	},
	
	//模块配置
	module:{
		loaders:[{
			test: /\.scss$/,
//			loader: 'style!css!sass'  		//style!css不能交换位置
			loader: ET.extract('style','css!sass')
		},{
			test: /\.css$/,
			loader: 'style!css'  		//style!css不能交换位置
		},{
			test:/\.js/,
			loader: 'babel'
		},{
			test:/\.html/,
			loader:'string'
		},{
			test: /\.vue$/,
			loader: 'vue'
		}]
	},
	
	//vue
	vue: {
		loaders: {
			js: 'babel'
		}
	},
	
	//插件
	plugins: [
		// 打包后压缩
//		 new webpack.optimize.UglifyJsPlugin(),

		//版本好控制需要的
		  // new ET("[name].css")
		// new ET("bundle.css")
		new ET("jiameng.css")
	]
}
