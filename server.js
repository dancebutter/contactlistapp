var express = require('express');
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require('body-parser');
var fs = require('fs');
var morgan = require('morgan');

var PORT_NUMBER = 9000;

var app = express();
var logFile = fs.createWriteStream('./logfile.log', {flags: 'a'});

app.use(morgan('combined', {stream : logFile}));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/contactlist', function(req, res) {
    console.log("[DEBUG] Server: GET request received");
    db.contactlist.find(function(err, docs) {
        //console.log(docs);
        res.json(docs);
    });
});

app.post( '/contactlist', function(req, res) {
    console.log("[DEBUG] Server: POST request received");
    //console.log(req.body);
    db.contactlist.insert(req.body, function(err, doc) {
        res.json(doc);
    });
});

app.delete('/contactlist/:id', function(req, res) {
    console.log("[DEBUG] Server : Delete request received");
    var id = req.params.id;
    // console.log(id);
    db.contactlist.remove({_id: mongojs.ObjectId(id)}, function(err, doc) {
        res.json(doc);
    });
});

app.listen(PORT_NUMBER);
console.log("Server running on port : " + PORT_NUMBER);
