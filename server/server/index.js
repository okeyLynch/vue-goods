let path = require('path');
let http = require('http');
let https = require('https');
let fs = require('fs');
let { HTTP_PORT , HTTPS_PORT } = require('../consts');
let key = fs.readFileSync(path.join(process.cwd(), './ssl/private.pem'));
let cert = fs.readFileSync(path.join(process.cwd(), './ssl/file.crt'));
module.exports = app => {
	let httpPort = +process.argv[2] || 3000;
	let httpsPort = +process.argv[3] || (+process.argv[2] && +process.argv[2] + 1 ) || 3001;
	http.createServer(app).listen(httpPort, res => console.log('http' + httpPort));
	https.createServer({
		key,
		cert
	}, app).listen(httpsPort, res => console.log('https' + httpsPort));
}
