const express = require('express');
const { json } = require('express/lib/response');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

const booksRoutes = require('./api/routes/books');
const userRoutes = require('./api/routes/user');

mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.wl3bn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', ()=>{
    console.log("MongoDB Connected")
})

app.use(morgan('dev'));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-requested-With, Accept, Authorization");
    res.header("Access-Control-Allow-Origin", "*");
    if (req.method === "OPTIONS"){
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});


app.use(express.json());
app.use(express.urlencoded({
    extended: false
}))

//Routes
app.use('/books', booksRoutes);
app.use('/users', userRoutes);


app.use((req, res, next) =>{
    const error = new Error('Not Found');
    error.status(404);
    next();
});

app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;