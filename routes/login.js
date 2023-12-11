const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController')


router.get('/', loginController.login_get)
router.post('/', loginController.login_post)

router.get('/failed', loginController.login_fail_get)
router.post('/failed', loginController.login_post)


module.exports = router