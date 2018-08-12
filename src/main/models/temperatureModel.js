var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var temperatureModel = new Schema({
    temp: {type: String},
    location: {type: String},
    time: {type: String}
});

module.exports= mongoose.model('Temperature', temperatureModel);