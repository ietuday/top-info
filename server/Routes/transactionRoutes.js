var express = require('express');

var routes = function(Transaction){

    var transactionRouter = express.Router();

    transactionRouter.route('/transaction')
    
        // .post(function(req, res){
        //     var picture = new Pictures(req.body);
        //     picture.save();
        //     res.status(201).send(picture);
    
        // })
        // .get(function(req,res){
    
        //     var query = {};
    
        //     if(req.query.name) {
        //         query.name = req.query.name;
        //     }
        //     Pictures.find(query, function(err,pictures){
        //         if(err) {
        //             res.status(500).send(err);
        //         }
        //         else {
        //             res.json(pictures);
        //         }
        //     });
        // });
    
        // pictureRouter.route('/Picture/:pictureId')
    
        // .get(function(req,res){
        //     Pictures.findById(req.params.pictureId, function(err,picture){
        //         if(err) {
        //             res.status(500).send(err);
        //         }
        //         else {
        //             res.json(picture);
        //         }
        //     });
        // })
        // .put(function(req,res){
        //     Pictures.findById(req.params.pictureId, function(err,picture){
        //         if(err) {
        //             res.status(500).send(err);
        //         }
        //         else {
        //             picture.type_of_picture = req.body.type_of_picture;
        //             picture.p_name = req.body.p_name;
        //             picture.date_of_creation = req.body.date_of_creation;
        //             picture.p_url = req.body.p_url;
        //             picture.save();
        //             res.json(picture);
        //         }
        //     });
        // })
        // .delete(function(req,res){
        //     Pictures.findByIdAndRemove(req.params.pictureId, function(err,picture){
        //         if(err) {
        //             res.status(500).send(err);
        //         }
        //         else{
        //             res.status(204).send('Removed');
        //         }
        //     });
        // });
    return transactionRouter;
};

module.exports = routes;