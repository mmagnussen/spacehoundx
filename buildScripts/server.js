
/*ES5 code from importing these functions:
var express = require('express')
var path = require('path')
var open = require('open')
*/

//Instead use ES6:
import express from 'express';
import path from 'path';
import open from 'open';


//Establish port numner and initialize express
const port = 3001;
const app = express();

//Listen on port 3000 and report any error
app.listen(port, function (error) {
    if (error) {
        console.log(error);
    } else {
        open(`http://localhost:${port}`)
    }
});

//Have express serve a file when you visit localhost:3001
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

