var mongoose = require('mongoose');
var fs = require('fs');
var arrayPath = './dbdata/test.json';
var data;

const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB
} = process.env;

const options = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  connectTimeoutMS: 10000,
};

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.connect(url, options)
  .catch(function (err) {
    console.log(err);
  });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
   console.log('MongoDB connected!');
  // we're connected!
});
/*
// Post model
const Post = mongoose.model('Post', {
    user_id: { type: Number },
    post_number: { type: Number },
    post_text: { type: String },
    timestamp: { type: String },
    likes: { type: Number }
});

let post_data = fs.readFileSync(arrayPath);
let posty = JSON.parse(post_data);
Post.insertMany(posty).then(function(){
    console.log("Data inserted")  // Success
}).catch(function(error){
    console.log(error)      // Failure
});

User.find(function (err, user1) {
  if (err) return console.error(err);
  console.log(user1);
})
*/
//console.log(post_data);

/*
function loadFile(filePath){
    var arrLines = [];
    fs.stat(filePath, function(err, stat) {
        if(err == null) {
            arrLines = fsReadFileSynchToArray(filePath);
        } else if(err.code == 'ENOENT') {
            console.log('error: loading file ' + filePath + ' not found');
        } else {
            console.log('error: loading file', err.code);
        }
    });
    return arrLines;
}

function fsReadFileSynchToArray (filePath) {
    var data = JSON.parse(fs.readFileSync(filePath));
//    console.log(data);
    return data;
}

var test  = loadFile(arrayPath);

try {
   data = require('./dbdata/test.json');
} catch ( err ) {
   console.log('error loading file ' + filePath + ' not found');
}

console.log(data);
*/
//console.log(test);
/*
var nameSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
});

var User = mongoose.model("User", nameSchema);

var fluffy = new User({ firstName: 'fluffy', lastName: 'head'});
var fluffy2 = new User({ firstName: 'Sam', lastName: 'Fluffer'});

 fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
  });

fluffy2.save(function (err, fluffy2) {
   if (err) return console.error(err);
 });

User.find(function (err, user1) {
  if (err) return console.error(err);
  console.log(user1);
})
*/
