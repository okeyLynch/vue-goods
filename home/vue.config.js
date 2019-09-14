let path = require('path');
// 判断是否发布
if (process.env.NODE_ENV === 'production') {
	// 发布得配置
	module.exports = {
		// 静态资源发布
		outputDir: path.join(process.cwd(), '../static/home'),
		publicPath: 'static/home',
		// 模板
		indexPath: path.join(process.cwd(), '../views/home.html')
	};
} else {
	let proxyTarget = {
		target: 'http://localhost:3000'
	}
	// 开发配置
	module.exports = {
		// 配置服务器, 请求代理
		devServer: {
			// 请求代理
			proxy: {
				// 请求地址
				'/data/home': proxyTarget,
				'/data/list': proxyTarget,
				'/data/product':proxyTarget
			}
		}
	}
}
