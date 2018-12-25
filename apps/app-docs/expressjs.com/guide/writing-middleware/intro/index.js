var express = require('express');
var mw = require('./my-middleware.js')
var os = require('os');
var ifaces = os.networkInterfaces();
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
    responseText += '<p>Requested at: ' + req.requestTime + '</p>';
    responseText += '<p>hostname: ' + os.hostname() + '</p>';
    responseText += '<p>platform: ' + os.platform() + '</p>';
    responseText += '<p>arch: ' + os.arch() + '</p>';
    responseText += '<p>release: ' + os.release() + '</p>';
    responseText += '<p>interfaces: ' + getInterfaces() + '</p>';
    console.log(responseText);
    res.send(responseText)
})

app.listen(port, () => {
    console.log("App is running at http://localhost:%d in %s mode", port, "Local");
    console.log("Press CTRL-C to stop\n");
})

function getInterfaces(){
    var result = "";
    Object.keys(ifaces).forEach(function (ifname) {
        var alias = 0;
      
        ifaces[ifname].forEach(function (iface) {
          if ('IPv4' !== iface.family || iface.internal !== false) {
            // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
            return;
          }
      
          if (alias >= 1) {
            // this single interface has multiple ipv4 addresses
            // console.log(ifname + ':' + alias, iface.address);
            result += ifname + ':' + alias + " " + iface.address + " ";
          } else {
            // this interface has only one ipv4 adress
            // console.log(ifname, iface.address);
            result += ifname + " " + iface.address + " ";
          }
          ++alias;
        });
      });     
      return result;
}


