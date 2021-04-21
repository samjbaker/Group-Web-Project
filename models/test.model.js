// Define schema
var Schema = mongoose.Schema;

var TestSchema = new Schema({
  post: String,
  UserId: Number
});

// Compile model from schema
var Test = mongoose.model('Test', TestSchema);

module.exports = Test;
