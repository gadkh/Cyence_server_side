module.exports = {
    getAllBooks: (req, res) =>{
        res.status(200).json({
            message: "Get All books"
        })
    },

    createBook: (req, res) =>{
        res.status(200).json({
            message: "Post book"
        })
    },

    updateBook: (req, res) =>{
        const bookId = req.params.bookId;
    
        res.status(200).json({
            message: `Update book: ${bookId}`
        })
    },

    deleteBook: (req, res) =>{
        const bookId = req.params.bookId;
    
        res.status(200).json({
            message: `Delete book: ${bookId}`
        })
    }
}