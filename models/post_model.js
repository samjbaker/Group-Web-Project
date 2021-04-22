//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    user_id: { type: Number },
    post_number: { type: Number },
    post_text: { type: String },
    timestamp: { type: String },
    likes: { type: Number },
    is_fact: { type: Boolean },
    fact_ref: { type: String }
});

module.exports = mongoose.model('posts', PostSchema );
