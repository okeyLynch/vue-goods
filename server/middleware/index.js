let express = require('express');
let path = require('path');
let ejs = require('ejs');
let session = require('express-session');
let bodyParser = require('body-parser');
let { STATIC } = require('../consts');

module.exports = app => {
	app.engine('.html', ejs.__express);
	app.set('view engine', 'ejs');

	// session
	app.use(session({
		secret: 'jiamieryi',
		resave: true,
		saveUninitialized: false,
	}))
	// 解析请求对象 json 格式
	app.use(bodyParser.json());
	
	for (let key in STATIC) {
		// 静态化配置
		app.use(key, express.static(path.join(process.cwd(), STATIC[key])));
	}
	
	app.use('/data/', (req, res, next) => {
		let arr = req.url.split('?');
		arr[0] += '.json';
		req.url = arr.join('?');
		next();
	}, express.static(path.join(process.cwd(), './static/data/')));

}
