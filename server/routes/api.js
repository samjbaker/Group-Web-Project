const express = require('express');
const router = express.Router();
posts = require('../../models/post_model');
//const data = require('./data.json')

// Get a sentence from the database
router.get('/', function (req, res, next) {
  posts.aggregate([{ $sample: {size: 4}}]).then(function(posts){
    posts[0].username = 'tony';
    posts[1].username = 'tony';
    posts[2].username = 'tony';
    posts[3].username = 'tony';
    res.send(posts);
  });
});

// Add a new sentence to the database
router.post('/', function (req, res, next) {
  posts.create(req.body).then(function(posts){ // creates & saves to DB
    res.send(posts);
  }).catch(next);
});

// Update a sentence in the database
router.put('/:id', function (req, res, next) {
  posts.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(posts){
    posts.findOne({_id: req.params.id}).then(function(posts){
    res.send(posts);
    });
  });
});

// Delete a sentence from the database
router.delete('/:id', function (req, res, next) {
  posts.findByIdAndRemove({_id: req.params.id}).then(function(posts){
  res.send(posts);
  });
});

module.exports = router;
