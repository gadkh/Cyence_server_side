const bookModel = require('../models/books_model');
const UserModel = require('../models/users_model');
const mongoose = require('mongoose');

module.exports = {

    getAllBooks: (req, res) => {
        bookModel.find().populate('userId', 'author_pseudonym').then((books) => {
            res.status(200).json({
                books
            })
        }).catch(error =>{
            res.status(500).json({
                error
            });
        })
    },

    createBook: (req, res) => {
        const { title, description, cover_image, price, userId } = req.body;

        UserModel.findById(userId).then((user) => {
            if (!user){
                return res.status(404).json({
                    message: "User not found"
                })
            }

            const book_Model = new bookModel({
                _id: new mongoose.Types.ObjectId(),
                title,
                description,
                cover_image,
                price,
                userId
            });

            return book_Model.save();
        }).then(() => {
            res.status(200).json({
                message: "Created book"
            });
        }).catch(error => {
            res.status(500).json({
                error
            });
        });
    },

    getBooks: (req, res) =>{
        const bookId = req.params.bookId
        bookModel.findById(bookId).populate('userId', 'author_pseudonym').then((book) => {
            res.status(200).json({
                book
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        })
    },

    updateBook: (req, res) => {
        const bookId = req.params.bookId;
        const { userId } = req.body;

        bookModel.findById(bookId).then((book) => {
            if (!book) {
                return res.status(404).json({
                    message: 'Book not found'
                })
            }
        }).then(() => {
            if (userId) {
                res.status(404).json({
                    message: "Can't change user id"
                })
            }

            return bookModel.updateOne({_id: bookId}, req.body);
        }).then(() => {
            res.status(200).json({
                message: `Book updated: ${bookId}`
            });
        }).catch(error => {
            res.status(200).json({
                error
            });
        });

    },

    deleteBook: (req, res) => {
        const bookId = req.params.bookId;

        bookModel.deleteOne({_id: bookId}).then(() => {
            res.status(200).json({
                message: `Delete book: ${bookId}`
            })
        }).catch(error => {
            res.status(500).json({
                error
            });
        });
    }
}