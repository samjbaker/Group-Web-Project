var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    user_id: {type: Number, required: true},
    user_name: {type: String, required: true},
    pic_filename: {type: String, required: true}
  }
);

//Export model
module.exports = mongoose.model('users', UserSchema);
