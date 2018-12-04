

function GggExpressCore() {
  
    var date = new Date();
    this.log = q => this.logWithTime(q);
    this.error = err => this.logError(err);
    this.logError = function (err) {
        console.error(`GggMessageError: ${err} GggDate: ${date}.`);
    }
    this.logWithTime = function (q) {
        // Template Literals
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
        console.log(`GggMessage: ${q} GggDate: ${date}.`);
    }
}
module.exports = GggExpressCore;