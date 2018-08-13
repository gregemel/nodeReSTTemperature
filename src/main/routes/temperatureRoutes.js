"use strict";

var express = require('express');

var routes = function(Temperature){
    var tempRouter = express.Router();

    var temperatureController = require('../controllers/temperatureController')(Temperature)
    tempRouter.route('/')
        .post(temperatureController.post)
        .get(temperatureController.get);

    tempRouter.use('/:logId', function(req,res,next){
        Temperature.findById(req.params.logId, function(err,temperature){
            if(err)
                res.status(500).send(err);
            else if(temperature){
                req.temperature = temperature;
                next();
            }else{
                res.status(404).send('temperature not found');
            }
        });
    });
    tempRouter.route('/:logId')
        .get(function(req,res){
            res.json(req.temperature);
        });
    return tempRouter;
};

module.exports = routes;