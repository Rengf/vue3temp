var mongoose = require('mongoose');
var usersSchema = new mongoose.Schema({
    user_name: String,
    user_pwd: String,
    isAdmin: {
        type: Boolean,
        default: false,
    },
    regist_time: String,
})

module.exports = mongoose.model('user', usersSchema);