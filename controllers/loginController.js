const asyncHandler = require('express-async-handler')
const authenticate = require('../config/passport.js')


exports.login_get = asyncHandler(async (req, res, next) => {
    res.render('login', {
        title: "Log In"
    })
})

exports.login_fail_get = asyncHandler(async (req, res, next) => {
    res.render('login', {
        title: "Log In",
        errors: 'Failed login, try again'
    })
})


exports.login_post = authenticate.authenticate