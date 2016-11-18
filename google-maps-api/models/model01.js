const mongoose = require('mongoose');
//access schema prop of mongoose
var Schema = mongoose.Schema;
//create instance of mongoose schema
var userSchema = new Schema({
  name: String
});

var User = mongoose.model('User', userSchema);


//export the model/collection with the name of 'User'
module.exports = User
