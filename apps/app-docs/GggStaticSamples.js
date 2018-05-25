// https://expressjs.com/en/starter/static-files.html
// https://github.com/expressjs/serve-static
var express = require("express");
var path = require("path");
function GggStaticSamples(app) {
    this.registerAllStatics = function () {
        // Pass the name of the directory that 
        // contains the static assets to the express.static 
        // middleware function to start serving the files directly. 
        // http://localhost:3000/Samples/Download.txt
        app.use(express.static('./Assets'))

        // To create a virtual path prefix (where the path does not 
        // actually exist in the file system) for files that 
        // are served by the express.static function,
        // specify a mount path for the static directory
        // http://localhost:3000/static/Samples/Download.txt
        app.use('/static', express.static('./Assets'))

        // If you run the express app from another directory, 
        // it’s safer to use the absolute path of the directory that you want to serve 
        // http://localhost:3000/staticFull/Samples/Download.txt
        app.use('/staticFull', express.static(path.join(__dirname, './Assets')))

        // Here is an example of using the express.static middleware function 
        // with an elaborate options object:
        var options = {
            dotfiles: 'ignore',
            etag: false,
            extensions: ['htm', 'html'],
            index: false,
            maxAge: '1d',
            redirect: false,
            setHeaders: function (res, path, stat) {
                res.set('x-timestamp', Date.now())
            }
        }
        // http://localhost:3000/Samples/asset.html 
        app.use(express.static('./AssetsHtmls', options))



    }
}

module.exports = GggStaticSamples;