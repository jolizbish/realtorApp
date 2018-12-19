var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/loc8');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('mongo is running')
});
