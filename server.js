const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
//const mongoose = require('mongoose');
const db = require('./db');

// set up express app
const app = express();

//connect to MongoDB
//mongoose.connect('mongodb://localhost/sentencedata');
//mongoose.Promise = global.Promise;

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Point static path to dist (folder where build files are located)
app.use(express.static(path.join(__dirname, 'dist/testsite')));

// initialise routes 
app.use('/api', require('./server/routes/api'));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/testsite/index.html'));
});

// error handling middleware
app.use(function(err, req, res, next){
  //console.log(err);
  res.status(422).send({error: err.message});
});

// listen for requests 
app.listen(process.env.port || 3000, function(){
  console.log('now listening for requests');
});
