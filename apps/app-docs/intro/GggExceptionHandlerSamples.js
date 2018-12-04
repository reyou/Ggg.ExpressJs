var GggExpressCore = require("./GggExpressCore");
// ============================================================================ 
// Define error-handling middleware functions in the same way as other 
// middleware functions, except with four arguments instead of three, 
// specifically with the signature (err, req, res, next)):
// https://expressjs.com/en/guide/error-handling.html
// You define error-handling middleware last, after 
// other app.use() and routes calls; for example:
// For organizational (and higher-level framework) purposes, 
// you can define several error-handling middleware functions,
// much like you would with regular middleware functions.
// For example, if you wanted to define an error-handler
// for requests made by using XHR, and those without,
//  you might use the following commands:
// ============================================================================ 
// The stack trace is not included in the production environment.
// Set the environment variable NODE_ENV to production, to run the app in 
// production mode.
// ============================================================================
// http://localhost:3000/samples/exception
function GggExceptionHandlerSamples(app) {
    var gggExpressCore = new GggExpressCore();
    this.registerAllExceptionHandlers = function () {
        this.logErrors();
        this.clientErrorHandler();
        this.errorHandler();
    }
    // Notice that when not calling “next” in an error-handling function, you 
    // are responsible for writing (and ending) the response. Otherwise 
    // those requests will “hang” and will not be eligible for garbage collection.
    this.logErrors = function () {
        app.use(function (err, req, res, next) {
            gggExpressCore.error(err);
            next(err);
        })
    }
    this.clientErrorHandler = function () {
        app.use(function (err, req, res, next) {
            gggExpressCore.error("GggExceptionHandlerSamples.clientErrorHandler");
            next(err);
        })
    }
    this.errorHandler = function () {
        app.use(function (err, req, res, next) {
            if (req.url === "/samples/exceptionhtml") {
                res.status(500)
                res.render('error', { error: err })
            }
            else if (req.url === "/samples/exceptionroute") {
                next("route");
            }
            else {
                gggExpressCore.error("GggExceptionHandlerSamples.errorHandler");
                res.status(500).send('3rd errorHandler!')
            }
        })
    }
}

module.exports = GggExceptionHandlerSamples;