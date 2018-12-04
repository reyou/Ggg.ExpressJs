var chai = require("chai");
var assert = chai.assert;
const request = require('supertest');
const express = require('express');
const app = express();

app.get('/user', function (req, res) {
    res.status(200).json({ name: 'tobi' });
});
app.get('/users', function (req, res) {
    var users = [
        { name: 'tobi' },
        { name: 'aozdemir' }
    ]
    res.status(200).json(users);
});

//=============================================================================
/*If you are using the .end() method .expect() assertions that fail will not 
// throw - they will return the assertion as an error to the .end() callback.
// In order to fail the test case, you will need to rethrow or pass err to 
// done(), as follows:
 */
describe('GET /users', function () {
    it('respond with json', function (done) {
        request(app)
            .get('/users')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }
                else {
                    console.log(res.body);
                }
                done();
            });
    });
});
