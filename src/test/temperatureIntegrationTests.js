var should = require('should'),
    request = require('supertest'),
    app = require('../main/app.js'),
    mongoose = require('mongoose'),
    Temperature = mongoose.model('Temperature'),
    agent = request.agent(app);


describe('Temperature Crud Test', function(){
    it('Should allow a temperature to be posted and return a Mongo _id', function(done){
        var temperaturePost = {temp:'68', location:'basement', time:'2018-08-11 18:23:00'};

        agent.post('/api/temperatures')
            .send(temperaturePost)
            .expect(200)
            .end(function(err, results){
                console.log("results: " + JSON.stringify(results.body))
                results.body.should.have.property('_id');
                done()
            })
    })

    afterEach(function(done){
        Temperature.remove().exec();
        done();
    })
})