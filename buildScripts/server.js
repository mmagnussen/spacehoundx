/*
var express = require('express')
var path = require('path')
var open = open('open')
*/

import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3001;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});


app.listen(port, function (error) {
    if (error) {
        console.log(error);
    } else {
        open(`http://localhost:${port}`)
    }
});

