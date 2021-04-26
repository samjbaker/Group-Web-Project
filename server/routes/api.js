const express = require('express');
const router = express.Router();
const posts = require('../../models/post_model.js');
const users = require('../../models/user_model.js');

// Get a sentence from the database
router.get('/', function (req, res, next) {
  posts.aggregate([{ $sample: {size: 4}}, { $lookup: {from: 'users', localField: 'user_id', foreignField: 'user_id', as: 'user_info'} }]).then(function(posts){
    for(i in posts) {
      posts[i].username = posts[i].user_info[0].user_name;
    }
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
