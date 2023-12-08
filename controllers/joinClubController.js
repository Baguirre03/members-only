const asyncHandler = require('express-async-handler')
const authenticate = require('../config/passport.js')


exports.get_joinclub = asyncHandler(async (req, res, next) => {
    res.render('joinclub', {
        title: "Join the club TODAY!",
        user: req.user,
    })
})