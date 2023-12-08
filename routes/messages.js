const express = require('express');
const router = express.Router();

const messagesController = require('../controllers/messageController')


router.get('/', messagesController.messages_get)
router.post('/', messagesController.messages_post)

module.exports = router