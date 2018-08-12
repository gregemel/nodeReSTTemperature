var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');


var db;
console.log('Hello');
if(process.env.ENV == 'Test'){

    db = mongoose.connect('mongodb://localhost/tempAPI_test');
}

else{
    db= mongoose.connect('mongodb://localhost/tempAPI');
}

var Temperature = require('./models/temperatureModel');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

tempRouter = require('./Routes/temperatureRoutes')(Temperature);


app.use('/api/temperatures', tempRouter);


app.get('/', function(req, res){
    res.send('welcome to Temperature API!');
});

app.listen(port, function(){
    console.log('Gulp is running Temperature app on PORT: ' + port);
});

module.exports = app;