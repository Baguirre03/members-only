const express = require('express');
const router = express.Router();

const messagesController = require('../controllers/messageController')


router.get('/', messagesController.messages_get)
router.post('/', messagesController.messages_post)
router.get('/:id/delete', messagesController.messages_delete_get)
router.post('/:id/:delete', messagesController.messages_delete_post)

module.exports = router