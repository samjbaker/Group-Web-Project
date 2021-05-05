//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    user_id: { type: Number, ref: 'users' },
    post_number: { type: Number },
    post_text: { type: String },
    timestamp: { type: String },
    likes: { type: Number },
    is_fact: { type: Boolean },
    fact_ref: { type: String },
    no_comments: { type: Number }
});

module.exports = mongoose.model('posts', PostSchema );
