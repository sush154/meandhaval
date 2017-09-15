var mongoose = require('mongoose');
var userSchema = require('../schema/user')
var UserModel = mongoose.model('UserModel', userSchema, 'user');

module.exports = UserModel;