var mongoose = require('mongoose');
var fs = require('fs');
var postPath = './db_build/posts.json';
var userPath = './db_build/users.json';
var data;
var Post = require('./models/post_model.js')
var User = require('./models/user_model.js')

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

const conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', function() {
   //console.log('MongoDB connected!');
  // we're connected!
conn.db.listCollections({name: 'posts'})
    .next(function(err, collinfo) {
        if (collinfo) {
            //conn.db.dropCollection('foo', function(err, result) {});
            console.log('Posts already seeded!');
            Post.countDocuments({}, function(err, c) {
            console.log('Post count is ' + c);
         });
        } else {
            let post_data = fs.readFileSync(postPath);
            let post_insert = JSON.parse(post_data);
            Post.insertMany(post_insert).then(function(){
                console.log("Data inserted")  // Success
            }).catch(function(error){
                console.log(error)      // Failure
            });
         }
    });

conn.db.listCollections({name: 'users'})
    .next(function(err, collinfo) {
        if (collinfo) {
            //conn.db.dropCollection('foo', function(err, result) {});
            console.log('Users already seeded!');
            User.countDocuments({}, function(err, c) {
            console.log('User count is ' + c);
         });
        } else {
            let user_data = fs.readFileSync(userPath);
            let user_insert = JSON.parse(user_data);
            User.insertMany(user_insert).then(function(){
                console.log("Data inserted")  // Success
            }).catch(function(error){
                console.log(error)      // Failure
            });
         }
    });
});
