var express = require('express');
var mw = require('./my-middleware.js')
var app = express();
var port = 3010;

var myLogger = function (req, res, next) {
    console.log('LOGGED');
    next();
}

var requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
}

app.use(requestTime);
app.use(myLogger);
app.use(mw({ option1: '1', option2: '2' }));

app.get('/', function (req, res) {
    var responseText = 'Hello World!<br>'
    responseText += '<small>Requested at: ' + req.requestTime + '</small>'
    console.log(responseText);
    res.send(responseText)
})

app.listen(port, () => {
    console.log("App is running at http://localhost:%d in %s mode", port, "Local");
    console.log("Press CTRL-C to stop\n");
})


