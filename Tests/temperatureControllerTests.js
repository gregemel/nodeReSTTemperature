var should = require('should'),
    sinon = require('sinon');

describe('Temperature Controller Tests:', function(){
    describe('Post', function(){
        it('should not allow an empty temp on post', function(){
            var Temperature = function(temperature){this.save = function(){}};

            var req = {
                body: {
                    temp: 'none'
                }
            }

            var res = {
                status: sinon.spy(),
                send: sinon.spy()
            }

            var temperatureController = require('../Controllers/temperatureController')(Temperature);

            temperatureController.post(req,res);

            res.status.calledWith(400).should.equal(true, 'Bad Status ' + res.status.args[0][0]);
            res.send.calledWith('Location is required').should.equal(true);
        })
    })
})