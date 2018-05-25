// https://www.npmjs.com/package/path-to-regexp
"use strict";
var url = require('url');
var GggExpressCore = require("./GggExpressCore");
var gggExpressCore = new GggExpressCore();

function GggRoutesSamples(app) {
    this.registerAllRoutes = function () {
        this.registerAll();
        this.registerGet();
        this.registerPost();
        this.registerPut();
        this.registerDelete();
        this.registerMultiHandler();
        this.registerMultiCallback();
        this.registerUserId();
        this.registerDotNotation();
        this.registerHyphenNotation();
        this.registerMultiParameters();
        this.registerHybridHandlers();
        this.registerKeyword();
        this.registerAnyMatch();
        this.registerLetters();
        this.registerChainedRoutes();
        this.registerException();
        this.registerExceptionHtml();
        this.registerExceptionRoute();
        gggExpressCore.log(`GggRoutesSamples registerAllRoutes called.`);
    }
    // http://localhost:3000/samples/exception
    this.registerException = function () {
        app.get("/samples/exception", function (req, res, next) {
            throw "This is an exception.";
        });
    }
    // http://localhost:3000/samples/exceptionhtml
    this.registerExceptionHtml = function () {
        app.get("/samples/exceptionhtml", function (req, res, next) {
            throw {
                message: "Ggg Html exception!",
                type: "Ggg Unhandled Exception"
            };
        });
    }
     // http://localhost:3000/samples/exceptionroute
    this.registerExceptionRoute = function () {
        app.get("/samples/exceptionroute", function (req, res, next) {
            throw {                
                message: "Ggg Html exception for Route!",
                type: "Ggg Unhandled Exception"
            };
        });
    }
     this.registerExceptionRoute = function () {
        app.get("/samples/exceptionroute", function (req, res, next) {
            gggExpressCore.log("2nd exceptionroute will not throw exception.");
            res.render("exceptionroutehandler",{
                title:"exceptionroutehandler title",
                message:"exceptionroutehandler message"
            });
        });
    }
    this.registerChainedRoutes = function () {
        app.route('/samples/game')
            .get(function (req, res) {
                res.send('Get a random game.')
            })
            .post(function (req, res) {
                res.send('Add a game.')
            })
            .put(function (req, res) {
                res.send('Update the game.')
            })
    }

    this.registerAll = function () {
        // This method is used for loading middleware functions at a path for all request methods.
        app.all('/', function (req, res, next) {
            console.log("GggMessage: all req.all => " + req.url);
            var url_parts = url.parse(req.url, true);
            next() // pass control to the next handler
        });
    }
    this.registerPut = function () {
        app.put('/user', function (req, res) {
            res.send('Got a PUT request at /user')
        });
    }
    this.registerDelete = function () {
        app.delete('/user', function (req, res) {
            res.send('Got a DELETE request at /user')
        });
    }
    this.registerPost = function () {
        app.post('/', function (req, res) {
            res.send('Got a POST request')
        });
    }
    this.registerGet = function () {
        app.get('/', function (req, res) {
            res.render("index", {
                title: "Hey",
                message: "Hello There"
            });
        });
    }
    this.registerLetters = function () {
        // This route path will match /abe and /abcde.
        app.get('/ab(cd)?e', function (req, res) {
            res.send('ab(cd)?e')
        })

        // This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on.
        app.get('/ab*cd', function (req, res) {
            res.send('ab*cd')
        })

        // This route path will match abcd, abbcd, abbbcd, and so on.
        app.get('/ab+cd', function (req, res) {
            res.send('ab+cd')
        })

        // This route path will match acd and abcd.
        app.get('/ab?cd', function (req, res) {
            res.send('ab?cd')
        });
    }
    this.registerAnyMatch = function () {
        // This route path will match anything with an qqq in the route name.
        app.get(/qqq/, function (req, res, next) {
            var isProceed = req.query.isProceed;
            console.log(`GggMessage: isProceed => ${isProceed}`);
            if (isProceed === "true") {
                res.send('/a/');
                return;
            }
            next()
        })
    }
    this.registerKeyword = function () {
        // Request URL: http://localhost:3000/butterfly
        // This route path will match butterfly and dragonfly, but not butterflyman, dragonflyman, and so on.
        app.get(/.*fly$/, function (req, res) {
            res.send('/.*fly$/')
        })
    }
    this.registerMultiParameters = function () {
        // Route path: /users/:userId/games/:gameId
        // Request URL: http://localhost:3000/users/34/games/8989
        // req.params: { "userId": "34", "gameId": "8989" }
        app.get('/users/:userId/games/:gameId', function (req, res) {
            res.send(req.params)
        })
    }
    this.registerHyphenNotation = function () {
        // Since the hyphen (-) and the dot (.) are interpreted literally, they can be used along with route parameters for useful purposes.
        // Route path: /flights/:from-:to
        // Request URL: http://localhost:3000/flights/LAX-SFO
        // req.params: { "from": "LAX", "to": "SFO" }
        app.get('/flights/:from-:to', function (req, res) {
            res.send(req.params)
        })
    }
    this.registerDotNotation = function () {
        // Route path: /plantae/:genus.:species
        // Request URL: http://localhost:3000/plantae/Prunus.persica
        // req.params: { "genus": "Prunus", "species": "persica" }
        app.get("/plantae/:genus.:species", function (req, res) {
            res.send(req.params);
        });
    }
    this.registerUserId = function () {
        // Route path: /user/:userId(\d+)
        // Request URL: http://localhost:3000/user/42
        // req.params: {"userId": "42"}
        app.get("/user/:userId(\\d+)", function (req, res) {
            res.send(req.params);
        });
    }
    this.registerMultiCallback = function () {
        // More than one callback function can handle 
        // a route (make sure you specify the next object). For example:
        app.get('/example/b', function (req, res, next) {
            console.log('the response will be sent by the next function ...')
            next()
        }, function (req, res) {
            res.send('Hello from B!')
        })
    }
    this.registerHybridHandlers = function () {
        var cb0 = function (req, res, next) {
            console.log('CB0')
            next()
        }

        var cb1 = function (req, res, next) {
            console.log('CB1')
            next()
        }
        app.get('/example/registerHybridHandlers', [cb0, cb1], function (req, res, next) {
            console.log('the response will be sent by the next function ...')
            next()
        }, function (req, res) {
            res.send(`GggMessage: registerHybridHandlers`)
        })
    }
    this.registerMultiHandler = function () {

        var cb0 = function (req, res, next) {
            console.log('CB0')
            next()
        }

        var cb1 = function (req, res, next) {
            console.log('CB1')
            next()
        }

        var cb2 = function (req, res) {
            res.send('Hello from C!')
        }

        app.get('/example/c', [cb0, cb1, cb2]);
    }

}

module.exports = GggRoutesSamples;