//=============================================================================
// Debug => Launch Current Page
//=============================================================================
// https://github.com/visionmedia/supertest
// SuperTest works with any test framework, here is an example without using 
// any test framework at all:
const request = require('supertest');
const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.status(200).json(
        { name: 'home' }
    );
});
app.get('/user', function (req, res) {
    res.status(200).json({ name: 'tobi' });
});
//=============================================================================
request(app)
    .get('/user')
    .expect('Content-Type', /json/)
    .expect('Content-Length', '15')
    .expect(200)
    .end(function (err, res) {
        if (err) {
            throw err;
        }
        else {
            console.log(res.body);
        }
    });
//=============================================================================
request(app)
    .get('/')
    .expect(200)
    .end(function (err, res) {
        if (err) {
            throw err;
        }
        else {
            console.log(res.body);
        }
    });
//=============================================================================