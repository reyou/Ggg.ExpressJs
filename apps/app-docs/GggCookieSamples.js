// https://github.com/expressjs/cookie-session
var cookieParser = require('cookie-parser');
var GggExpressCore = require("./GggExpressCore");
var gggExpressCore = new GggExpressCore();

function GggCookieSamples(appRef) {
    let app = appRef;
    this.registerAllMiddlewares = function () {
        // load the cookie-parsing middleware
        app.use(cookieParser())
        gggExpressCore.log("GggCookieSamples registerAllMiddlewares called.");
    }

}

module.exports = GggCookieSamples;