let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let Cookies = require('cookies');

// let mongodb_connect = require("./mongodb/mongodb_connect");
// var client = mongodb_connect;

let app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8888');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use(session({
    secret: 'keyboard cat', //增加安全性
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 30, // 设置 session 的有效时间，单位毫秒
    },
}))

app.use('/api', require('./router/api'));

// client.connectServer();
app.listen(3000, function() {
    console.log('app is listening on port 3000.');
})