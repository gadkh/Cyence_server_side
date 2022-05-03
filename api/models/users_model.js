const mongoose  = require("mongoose");

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {type: String, required: true, unique: true},
    password: {type: String, required :true},
    author_pseudonym: {type: String, required :true},
})

module.exports = mongoose.model('UserModel', userSchema)