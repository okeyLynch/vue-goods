//引入express 
let express = require('express');
let server = require('./server');
let middleware = require('./middleware');

//创建应用程序
let app = express();
server(app);
middleware(app);

app.get('/', (req, res) => {
	res.render('home.html');
})
