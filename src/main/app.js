"use strict";

var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db;
console.log('starting Temperature Logs service...');
if(process.env.ENV == 'Test'){
    db = mongoose.connect('mongodb://localhost/temperatureLogs_test');
}else{
    db= mongoose.connect('mongodb://localhost/temperatureLogs');
}

var Temperature = require('./models/temperatureModel'),
    tempRouter = require('./routes/temperatureRoutes')(Temperature);

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/api/temperatures', tempRouter);

app.get('/', function(req, res){
    res.send('root has no verbs');
});

app.listen(port, function(){
    console.log('Gulp is running Temperature Logs on PORT: ' + port);
});

module.exports = app;