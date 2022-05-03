const mongoose  = require("mongoose");

const bookSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {type: String, required :true},
    description: {type: String, required :true},
    cover_image: {type: String, required :true},
    price: {type: Number, required :true}
})

module.exports = mongoose.model('BooksModel', bookSchema)