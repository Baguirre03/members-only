const Message = require('../models/message.js')
const User = require('../models/user.js')
const asyncHandler = require('express-async-handler')


exports.messages_get = asyncHandler(async (req, res, next) => {
    res.render('messages', {
        title: "Welcome to the message homepage",
        user: req.user,
    })
})
