const express = require('express');
const router = express.Router();

const {
    getAllBooks, 
    createBook,
    updateBook,
    deleteBook
} = require('../controllers/books_controlles');


router.get('/', getAllBooks);
router.post('/', createBook);
router.patch('/:bookId', updateBook);
router.delete('/:bookId', deleteBook);

module.exports = router;