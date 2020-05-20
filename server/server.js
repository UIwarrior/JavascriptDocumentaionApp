const express = require("express");
const bodyParser = require("body-parser");
const app = express();
//let http = require('http').Server(app);
const mongoose = require('mongoose');
const routes = require('./app')
    /* // Convert a csv file with csvtojson
    getCSVtoJSON = function() {}
     */

/* var http = require('http').Server(app);
var io = require('socket.io')(http);
io.set('transports', ['xhr-polling']);
io.on('connection', function(socket) {
    console.log('connected');
    socket.on('event', function(data) {});
    socket.on('disconnect', function() {
        console.log('disconnected');
    });
});
http.listen(3000); */


mongoose.connect('mongodb+srv://arnabsadhya:jsQH8B4Tve246nRA@cluster0-7fguw.mongodb.net/test?retryWrites=true')
    .then(() => console.log('connected to mongodb'))
    .catch((e) => {
        console.log(e);
        console.log('connection error')
    })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9876');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(express.static('public'));

//var fs = require('fs');

/* io.on('connection', (socket) => {

    console.log('user connected');

    socket.on('disconnect', function() {
        console.log('user disconnected');
    });

    socket.on('add-message', (message) => {
        io.emit('message', { type: 'new-message', text: message });
        // Function above that stores the message in the database
        //databaseStore(message)
    });

});
io.set('transports', ['xhr-polling']); */


var server = app.listen(3000, function() {
    console.log("app running on port.", server.address().port);
});

app.get('/', (req,res) => {
    res.send('App is running');
})

app.use('/', routes);

//module.exports = app;

/* http.listen(5000, () => {
    console.log('started on port 5000');
}); */


/*console.log('node is working')

var csvModule = require("read-csv-json")
var _filePath = './chase.csv';
var fieldsName = ['name', 'age',zzz 'number'];

var csvRead = new csvModule(_filePath, fieldsName);

csvRead.getCSVJson().then(function(result) {
    console.log('result: ', JSON.stringify(result));
}, function(err) {
    console.log('err: ', err)
});*/



/* function savePersonToPublicFolder(expenseObj, callback) {
    fs.writeFile('./public/expense.json', JSON.stringify(expenseObj), callback);
}

console.log('node is working')

var csvModule = require("read-csv-json")
var _filePath = './chase.csv';
var fieldsName = ['name', 'age', 'number'];

var csvRead = new csvModule(_filePath, fieldsName);

csvRead.getCSVJson().then(function(result) {
  console.log('result: ', JSON.stringify(result));
}, function(err) {
  console.log('err: ', err)
});*/
