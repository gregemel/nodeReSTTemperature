var temperatureController = function(Temperature){

    var post = function(req, res){
        console.log("posted req: " + JSON.stringify(req.body));
        var temp = new Temperature(req.body);

        if(!temp.location){
            res.status(400);
            res.send('Location is required');
        }
        else {
            temp.save();
            res.status(201);
            res.send(temp);
        }

    }

    var get = function(req,res){

        var query = {};

        Temperature.find(query, function(err,temperatures){
            if(err)
                res.status(500).send(err);
            else
                res.json(temperatures);
        });
    }

    return {
        post: post,
        get:get
    }
}

module.exports = temperatureController;