const express = require('express');
const router = express.Router();

const joinclubController = require('../controllers/joinClubController.js')

router.get('/', joinclubController.get_joinclub)
router.post('/', joinclubController.post_joinclub)


module.exports = router