const asyncHandler = require('express-async-handler')
const authenticate = require('../config/passport.js')


exports.logout = asyncHandler(async (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err)
        }
        res.redirect('/')
    })
})

