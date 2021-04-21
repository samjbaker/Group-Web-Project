const express = require('express');
const router = express.Router();
const Sentence = require('../../models/sentence');
//const data = require('./data.json')

// Get a sentence from the database 
router.get('/', function (req, res, next) {
  Sentence.aggregate([{ $sample: {size: 1}}]).then(function(sentence){
    res.send(sentence);
  });
});

// Add a new sentence to the database
router.post('/', function (req, res, next) {
  Sentence.create(req.body).then(function(sentence){ // creates & saves to DB
    res.send(sentence);
  }).catch(next);
});

// Update a sentence in the database
router.put('/:id', function (req, res, next) {
  Sentence.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(sentence){
    Sentence.findOne({_id: req.params.id}).then(function(sentence){
    res.send(sentence);
    });
  });
});

// Delete a sentence from the database
router.delete('/:id', function (req, res, next) {
  Sentence.findByIdAndRemove({_id: req.params.id}).then(function(sentence){
  res.send(sentence);
  });
});

module.exports = router;