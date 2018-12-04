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

describe('GET /user', function () {
    it('respond with json', function (done) {
        request(app)
            .get('/user')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
