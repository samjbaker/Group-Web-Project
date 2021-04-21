const express = require('express');
const router = express.Router();
const posts = require('../../models/post_model');
//const data = require('./data.json')

// Get a sentence from the database 
router.get('/', function (req, res, next) {
  Posts.aggregate([{ $sample: {size: 1}}]).then(function(posts){
    res.send(posts);
  });
});

// Add a new sentence to the database
router.post('/', function (req, res, next) {
  Posts.create(req.body).then(function(posts){ // creates & saves to DB
    res.send(posts);
  }).catch(next);
});

// Update a sentence in the database
router.put('/:id', function (req, res, next) {
  Posts.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(posts){
    Posts.findOne({_id: req.params.id}).then(function(posts){
    res.send(posts);
    });
  });
});

// Delete a sentence from the database
router.delete('/:id', function (req, res, next) {
  Posts.findByIdAndRemove({_id: req.params.id}).then(function(posts){
  res.send(posts);
  });
});

module.exports = router;
