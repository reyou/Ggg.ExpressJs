// https://github.com/tediousjs/tedious
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;
var GggSqlDateProvider = require("../GggSqlDateProvider");

var config = {
    userName: 'FW_4137@dubebe', // update me
    password: 'AAdnAU5X', // update me
    server: 'dubebe.database.secure.windows.net',
    // If you're on Windows Azure, you will need this:
    options: {
        debug: {
            packet: true,
            data: true,
            payload: true,
            token: true
        },
        encrypt: true,
        database: "GameGoGo"
    },
}

var connection = new Connection(config);
connection.on('connect', function (err) {
    if (err) {
        console.log(err);
    } else {
        var gggSqlDateProvider = new GggSqlDateProvider();
        var newsCategoryUrlId = 1;
        var newsCategoryId = 1;
        // GetRssNewsSql(newsCategoryUrlId);
        GetRssNewsStoredProcedure(newsCategoryId, 50, 0);
    }
});

function GetRssNewsStoredProcedure(newsCategoryId, count, skip) {
    request = new Request("GameGoGo_Read_RssNews", function (err) {
        if (err) {
            console.log(JSON.stringify(err));
        }
        connection.close();
    });
    request.addParameter('newscategoryid', TYPES.Int, newsCategoryId);
    request.addParameter('count', TYPES.Int, count);
    request.addParameter('skip', TYPES.Int, skip);
    request.on('row', function (columns) {
        columns.forEach(function (column) {
            console.log("%s\t%s", column.metadata.colName, column.value);
        });
        console.log("\n=====================================\n");
    });

    connection.callProcedure(request);
}

function GetRssNewsSql(newsCategoryUrlId) {
    request = new Request("select top 50 * from RssNews where newsCategoryUrlId = @newsCategoryUrlId", function (err, rowCount) {
        if (err) {
            console.log(JSON.stringify(err));
        } else {
            console.log(rowCount + ' rows');
        }
        connection.close();
    });
    request.addParameter('newsCategoryUrlId', TYPES.Int, newsCategoryUrlId);
    request.on('row', function (columns) {
        columns.forEach(function (column) {
            console.log("%s\t%s", column.metadata.colName, column.value);
        });
        console.log("\n=====================================\n");
    });

    connection.execSql(request);
}

// ============================================================================
console.log("GggMessage: GggSqlProvider finished.");