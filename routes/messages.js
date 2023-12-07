const express = require('express');
const router = express.Router();

const messagesController = require('../controllers/messageController')


router.get('/', messagesController.messages_get)
// router.post('/', signupController.signup_post)

module.exports = router