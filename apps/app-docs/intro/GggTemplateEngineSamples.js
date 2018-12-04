"use strict";
var GggExpressCore = require("./GggExpressCore");
// Some popular template engines that work with Express are Pug,
// Mustache, and EJS. The Express application generator 
// uses Jade as its default, but it also supports several others.
function GggTemplateEngineSamples(app) {
    var gggExpressCore = new GggExpressCore();
    this.registerTemplateEngine = function () {
        this.registerPug();
        gggExpressCore.log("GggTemplateEngineSamples registerTemplateEngine called.");
    }
    this.registerPug = function () {
        app.set('views', './views');
        app.set('view engine', 'pug');
    }
}

module.exports = GggTemplateEngineSamples;
