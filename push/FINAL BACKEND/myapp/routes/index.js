var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('webtechdevops.centralindia.cloudapp.azure.com:51003/Pooja');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// create table

var Schema1 = new Schema({
    firstname: { type: String, required: true },
    lastname: String,
    domain: String,
    location: String
}, { collection: 'Table' });


var Table = mongoose.model('Table', Schema1);



//Insert into Table

router.post('/table', function(req, res, next) {
    console.log('This is inside of insert admin');
    console.log(req.body);
    var item = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        domain: req.body.domain,
        location: req.body.location
    };
    var data = new Table(item);
    data.save();
    res.send("Added Successfully");
});


//get data

router.get('/get_table', function(req, res, next) {
    Table.find()
        .then(function(doc) {

            res.send(doc);

        });
});


module.exports = router;
