var mongoose = require('mongoose');
var config = require('./config');
mongoose.connect(config.mongo.connectionURL);
var db = mongoose.connection;
db.once('open', function() {
  console.log('DB connected');
});

module.exports = db;