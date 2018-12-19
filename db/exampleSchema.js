var mongoose = require('mongoose');


var Example = mongoose.Schema({
  // unique id syntax: _id
  // was formerly the session schema in brainstorm
  creator_id: {type: String, required: true}, // references User
  timestamp: {type: String, required: true},
  title: {type: String, required: true},
  modified: {type: String, required: true}
})

module.exports = mongoose.model('Example', Example);
