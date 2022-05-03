const express = require('express');
const router = express.Router();

const {
    sinup,
    login,
    delteUser,
    updateUser,
} = require('../controllers/user_controller');

router.get('/', login);
router.post('/', sinup);
router.delete('/:userId', delteUser);
router.patch('/:userId', updateUser);

module.exports = router;