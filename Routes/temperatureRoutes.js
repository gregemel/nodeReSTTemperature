var express = require('express');


var routes = function(Temperature){
    var tempRouter = express.Router();

    var temperatureController = require('../Controllers/temperatureController')(Temperature)
    tempRouter.route('/')
        .post(temperatureController.post)
        .get(temperatureController.get);

    tempRouter.use('/:tempId', function(req,res,next){
        Temperature.findById(req.params.tempId, function(err,temperature){
            if(err)
                res.status(500).send(err);
            else if(temperature)
            {
                req.temperature = temperature;
                next();
            }
            else
            {
                res.status(404).send('no temperature found');
            }
        });
    });
    tempRouter.route('/:tempId')
        .get(function(req,res){

            res.json(req.temperature);

        })
        .put(function(req,res){
            req.temperature.temp = req.body.temp;
            req.temperature.location = req.body.location;
            req.temperature.time = req.body.time;
            req.temperature.read = req.body.read;
            req.temperature.save(function(err){
                if(err)
                    res.status(500).send(err);
                else{
                    res.json(req.temperature);
                }
            });
        })
        .patch(function(req,res){
            if(req.body._id)
                delete req.body._id;

            for(var p in req.body)
            {
                req.temperature[p] = req.body[p];
            }

            req.temperature.save(function(err){
                if(err)
                    res.status(500).send(err);
                else{
                    res.json(req.temperature);
                }
            });
        })
        .delete(function(req,res){
            req.temperature.remove(function(err){
                if(err)
                    res.status(500).send(err);
                else{
                    res.status(204).send('Removed');
                }
            });
        });
    return tempRouter;
};

module.exports = routes;