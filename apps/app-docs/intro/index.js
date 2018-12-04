// shortcuts
// alt + shift + f => format document

// Express application generator
// https://expressjs.com/en/starter/generator.html
const appPort = 3000;
const express = require("express");
const app = express();
const opn = require('opn');
var path = require("path"); 
var bodyParser = require('body-parser');

var GggRoutesSamples = require("./GggRoutesSamples");
var GggResponseSamples = require("./GggResponseSamples");
var GggRouterSamples = require("./GggRouterSamples");
var GggStaticSamples = require("./GggStaticSamples");
var GggMiddlewareSamples = require("./GggMiddlewareSamples");
var GggCookieSamples = require("./GggCookieSamples");
var GggTemplateEngineSamples = require("./GggTemplateEngineSamples");
var GggExpressCore = require("./GggExpressCore");
var GggExceptionHandlerSamples = require("./GggExceptionHandlerSamples");
var gggExpressCore = new GggExpressCore();


// https://github.com/expressjs/body-parser
app.use(bodyParser.urlencoded({
  extended: true
}))

app.listen(appPort, function () {
  gggExpressCore.log("Ggg Node-Express started on 3000.");
  // templates
  var gggTemplateEngineSamples = new GggTemplateEngineSamples(app);
  gggTemplateEngineSamples.registerTemplateEngine();
  // cookie
  var gggCookieSamples = new GggCookieSamples(app);
  gggCookieSamples.registerAllMiddlewares();
  // register middleware
  var gggMiddlewareSamples = new GggMiddlewareSamples(app);
  gggMiddlewareSamples.registerAllMiddlewares();
  // routes 
  var gggRoutesSamples = new GggRoutesSamples(app);
  var gggResponseSamples = new GggResponseSamples(app);
  gggRoutesSamples.registerAllRoutes();
  gggResponseSamples.registerAllRoutes();
  // statics
  var gggStaticSamples = new GggStaticSamples(app);
  gggStaticSamples.registerAllStatics();
  // use module as router
  app.use('/samples/router', GggRouterSamples);

  // error handlers
  // http://localhost:3000/samples/exception
  var gggExceptionHandlerSamples = new GggExceptionHandlerSamples(app);
  gggExceptionHandlerSamples.registerAllExceptionHandlers();
  // opn(`http://localhost:${appPort}`);

});

