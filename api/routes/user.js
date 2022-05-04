const express = require('express');
const router = express.Router();

const {
    sinup,
    login,
} = require('../controllers/user_controller');

router.post('/login', login);
router.post('/singup', sinup);


module.exports = router;