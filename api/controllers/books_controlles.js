const bookModel = require('../models/books_model');
const UserModel = require('../models/users_model');
const mongoose = require('mongoose');

module.exports = {

    getAllBooks: (req, res) => {
        bookModel.find().populate('useryId', 'author_pseudonym').then((books) => {
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
        const { title, description, cover_image, price, useryId } = req.body;

        UserModel.findById(useryId).then((user) => {
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
                useryId
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
        bookModel.findById(bookId).populate('useryId', 'author_pseudonym').then((book) => {
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

        bookModel.updateOne({_id: bookId}, req.body).then(() =>{
            res.status(200).json({
                message: `Update book: ${bookId}`
            })
        }).catch(error => {
            res.status(500).json({
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