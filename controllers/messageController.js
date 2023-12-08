const Message = require('../models/message.js')
const asyncHandler = require('express-async-handler')
const { body, validationResult } = require('express-validator')


exports.messages_get = asyncHandler(async (req, res, next) => {
    const allMessages = await Message.find({}).sort({ time: 1 }).populate('user')
    console.log(allMessages)
    res.render('messages', {
        title: "Welcome to the message homepage",
        user: req.user,
        messages: allMessages
    })
})

exports.messages_post = [
    body('message')
        .trim()
        .isLength({ min: 1 })
        .escape()
        .withMessage('Atleast one character is required in message'),

    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req)
        const messageSchema = {
            user: req.user._id,
            time: new Date(),
            text: req.body.message
        }
        const message = new Message(messageSchema)
        if (!errors.isEmpty()) {
            const allMessages = await Message.find({}).sort({ time: 1 }).populate('user')
            res.render('messages', {
                title: "Welcome to the message home page",
                user: req.user,
                errors: errors.array(),
                messages: allMessages
            })
        } else {
            await message.save()
            const allMessages = await Message.find({}).sort({ time: 1 }).populate('user')
            res.render('messages', {
                title: "Welcome to the message home page",
                user: req.user,
                messages: allMessages
            })
        }
    })
]
