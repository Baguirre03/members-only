const express = require('express');
const router = express.Router();

const signupController = require('../controllers/signUpController')


router.get('/', signupController.signup_get)
router.post('/', signupController.signup_post)

module.exports = router