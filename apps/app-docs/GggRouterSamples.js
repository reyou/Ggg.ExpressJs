// https://expressjs.com/en/guide/routing.html
var express = require("express");
var GggRouterSamples = express.Router();

// middleware that is specific to this router
GggRouterSamples.use(function timeLog(req, res, next) {
    console.log(`Time: ${Date.now()}`);
    next();
});

// define the home page route
GggRouterSamples.get("/", function (req, res) {
    res.send('Games home page');
});

// define the about route
GggRouterSamples.get('/about', function (req, res) {
    res.send('About GameGoGo')
})

// use the router and 401 anything falling through
// http://localhost:3000/samples/router/admin
GggRouterSamples.get('/admin', function (req, res) {
    if (!req.headers['x-auth']) {
        res.sendStatus(401)
    }
    else {
        res.send(`GggMessage: GggRouterSamples.get`);
    }
})

module.exports = GggRouterSamples;