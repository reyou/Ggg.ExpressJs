// https://expressjs.com/en/resources/middleware.html
// If the current middleware function does not end the request-response cycle, 
// it must call next() to pass control to the next middleware function. 
// Otherwise, the request will be left hanging.
var GggExpressCore = require("./GggExpressCore");
var gggExpressCore = new GggExpressCore();
function GggMiddlewareSamples(app) {
    var app = app;
    this.registerAllMiddlewares = function () {
        app.use(this.gggLogger);
        this.registerGameDetails();
        this.registerMiddlewareSubStack();
    }
    // This example shows a middleware sub-stack that handles GET requests to
    // the /user/:id path.
    // http://localhost:3000/samples/gameUsers/0
    // http://localhost:3000/samples/gameUsers/1
    this.registerMiddlewareSubStack = function () {
        app.get('/samples/gameUsers/:id', function (req, res, next) {
            // if the user ID is 0, skip to the next route
            if (req.params.id === '0') {
                next('route')
            }
            // otherwise pass the control to the next middleware function in this stack
            else {
                next()
            }
        })
        // handler for the /user/:id path, which renders a special page
        app.get('/samples/gameUsers/:id', function (req, res, next) {
            res.send(`registerMiddlewareSubStack: ${req.params.id}.`)
        })
    }
    this.registerGameDetails = function () {
        app.use('/samples/gameDetails/:id', function (req, res, next) {
            console.log('Request Type:', req.method)
            res.send(`registerAllMiddlewares: gameDetails.`);
            next()
        })
    }
    this.gggLogger = function (req, res, next) {
        gggExpressCore.log(`GggMiddlewareSamples gggLogger ${Date.now()}`);
        next();
    }

}

module.exports = GggMiddlewareSamples;