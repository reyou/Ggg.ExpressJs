function GggSqlDateProvider() {
    function pad(number) {
        if (number < 10) {
            return '0' + number;
        }
        return number;
    }
    this.GetSqlDate = function (date) {
        return date.getUTCFullYear() +
            '-' + pad(date.getUTCMonth() + 1) +
            '-' + pad(date.getUTCDate()) +
            ' ' + pad(date.getUTCHours()) +
            '-' + pad(date.getUTCMinutes()) +
            '-' + pad(date.getUTCSeconds());
    }

}

module.exports = GggSqlDateProvider;

// GggSqlDateProviderIntTests
// var gggSqlDateProvider = new GggSqlDateProvider();
// var sqlDate = gggSqlDateProvider.GetSqlDate(new Date());
// console.log(sqlDate);