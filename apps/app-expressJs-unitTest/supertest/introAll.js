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
describe('GET /user', function () {
    it('respond with json', function (done) {
        request(app)
            .get('/user')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
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
//=============================================================================
// You can also use promises
describe('GET /users', function () {
    it('respond with json', function () {
        return request(app)
            .get('/users')
            .set('Accept', 'application/json')
            .expect(200)
            .then(response => {
                assert(response.body.length, 2)
            })
    });
});
//=============================================================================
// Expectations are run in the order of definition. This characteristic can be
// used to modify the response body or headers before executing an assertion.
describe('GET /user', function () {
    it('user.name should be an case-insensitive match for "tobi"', function (done) {
        request(app)
            .get('/user')
            .set('Accept', 'application/json')
            .expect(function (res) {
                res.body.id = 'some fixed id';
                res.body.name = res.body.name.toUpperCase();
            })
            .expect(200, {
                id: 'some fixed id',
                name: 'TOBI'
            }, done);
    });
});
//=============================================================================
// Anything you can do with superagent, you can do with supertest - for example
// multipart file uploads!
/*request(app)
    .post('/')
    .field('name', 'my awesome avatar')
    .attach('avatar', 'test/fixtures/homeboy.jpg'); */
//=============================================================================

//=============================================================================
