const express = require('express');
const router = express.Router();
const checkAuth = require('../middlewares/checkAuth')

const {
    getAllBooks, 
    createBook,
    updateBook,
    deleteBook,
    getBooks
} = require('../controllers/books_controlles');


router.get('/', getAllBooks);
router.get('/:bookId',getBooks);

router.post('/', checkAuth, createBook);
router.patch('/:bookId', checkAuth, updateBook);
router.delete('/unpublished/:bookId', checkAuth, deleteBook);

module.exports = router;