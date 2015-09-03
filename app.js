var connect = require('connect');
var express = require('express');
var app = express();

require('babel-core/register')();

var odds = require('./test6');
console.log(odds);

var babelMiddleware = require("babel-connect");

app.use(babelMiddleware({
    options: {
        // options to use when transforming files
    },
    src: "public",
    dest: "cache",
    ignore: /node_modules/
}));

app.use(express.static("cache"));

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Hello World!');
});


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
