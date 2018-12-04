function GggResponseSamples(app) {
    this.registerAllRoutes = function () {
        this.download();
        this.end();
        this.json();
        this.jsonp();
        this.redirect();
        this.render();
        this.send();
        this.sendFile();
        this.sendStatus();
        
    }

    // http://localhost:3000/samples/sendStatus
    this.sendStatus = function () {
        app.get("/samples/sendStatus", function (req, res, next) {
            res.sendStatus(200);
        });
    }

    // http://localhost:3000/samples/sendFile
    this.sendFile = function () {
        app.get("/samples/sendFile", function (req, res, next) {
            res.sendFile("./Assets/Samples/Download.txt",
                {
                    root: __dirname
                });
        });
    }

    // http://localhost:3000/samples/send
    this.send = function () {
        app.get("/samples/send", function (req, res, next) {
            res.send("This sends the response.");
        });
    }

    // http://localhost:3000/samples/render
    // Render a view template
    // Error: No default engine was specified and no extension was provided.
    this.render = function () {
        app.get("/samples/render", function (req, res, next) {
            // pass a local variable to the view
            var model = {
                name: 'Rocket League'
            };
            // if a callback is specified, 
            // the rendered HTML string has to be sent explicitly
            res.render('index', model, function (err, html) {
                res.send(html);
            });
        });
    }
    // http://localhost:3000/samples/redirect
    this.redirect = function () {
        app.get("/samples/redirect", function (req, res, next) {
            res.redirect("http://www.gamegogo.org");
        });
    }
    // http://localhost:3000/samples/jsonp
    this.jsonp = function () {
        app.get("/samples/jsonp", function (req, res, next) {
            var game = {
                name: "NBA",
                price: "$59"
            }
            res.jsonp(game);
        });
    }
    // http://localhost:3000/samples/json
    this.json = function () {
        app.get("/samples/json", function (req, res, next) {
            var game = {
                name: "Fifa",
                price: "$59"
            }
            res.json(game);
        });
    }
    // http://localhost:3000/samples/download
    this.download = function () {
        app.get("/samples/download", function (req, res, next) {
            res.download("./Assets/Samples/Download.txt");
        });
    }
    // http://localhost:3000/samples/end
    this.end = function () {
        app.get("/samples/end", function (req, res, next) {
            res.end("This is end of the response.");
        });
    }
}

module.exports = GggResponseSamples;