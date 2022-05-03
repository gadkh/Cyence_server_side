const express = require('express');
const router = express.Router();

const {
    addUser,
    getUser,
    delteUser,
    updateUser,
} = require('../controllers/user_controller');

router.get('/', getUser);
router.post('/', addUser);
router.delete('/:userId', delteUser);
router.patch('/:userId', updateUser);

module.exports = router;