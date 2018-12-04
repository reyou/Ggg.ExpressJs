module.exports = function (options) {
    return function (req, res, next) {
        console.log("Implement the middleware function based on the options object.");
        console.log("options: %s", JSON.stringify(options));
        next();
    }
}
