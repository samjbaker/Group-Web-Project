const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create sentence schema & model
const SentenceSchema = new Schema({
    user_id: {
        type: Number,
        required: [true, 'User ID is required']
    },
    post_number: {
        type: Number
    },
    post_text: {
        type: String
    },
    timestamp: {
        type: String
    },
    likes: {
        type: Number
    }
});


const Sentence = mongoose.model('sentence', SentenceSchema);

module.exports = Sentence;